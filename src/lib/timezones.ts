/* Clock helpers for the X-Shore section, shared by the build-time render and
   the live script so the two can never disagree. */

export type Zone = { id: string; city: string; region: string; tz: string };

export const REFERENCE_TZ = "America/Chicago";
export const WORK_START = 9;
export const WORK_END = 18;

/** Local clock time as hours, e.g. 13.5 for half past one. */
export function hourIn(tz: string, at: Date): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(at);
  const get = (type: string) => Number(parts.find((part) => part.type === type)?.value ?? 0);
  return get("hour") + get("minute") / 60;
}

/** Inside a 9 AM to 6 PM local day. */
export function isWorking(tz: string, at: Date): boolean {
  const hour = hourIn(tz, at);
  return hour >= WORK_START && hour < WORK_END;
}

/** "9:42 AM" and "CDT" for a zone at a moment. */
export function clock(tz: string, at: Date): { time: string; zone: string } {
  const time = new Intl.DateTimeFormat("en-US", { timeZone: tz, hour: "numeric", minute: "2-digit" }).format(at);
  const zone =
    new Intl.DateTimeFormat("en-US", { timeZone: tz, timeZoneName: "short" })
      .formatToParts(at)
      .find((part) => part.type === "timeZoneName")?.value ?? "";
  return { time, zone };
}

/** "8h", "12h 30m", "45m". */
export function span(hours: number): string {
  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);
  if (m === 60) return `${h + 1}h`;
  if (!h) return `${m}m`;
  return m ? `${h}h ${m}m` : `${h}h`;
}

/** One of the four location tiles. `abbr` stands in where en-US has no short
    zone name (India would print "GMT+5:30"). */
export type ZoneTile = { tz: string; place: string; abbr?: string };

/** Everything a tile shows at a moment: its split clock, whether its team is
    on, where "now" sits in its local day (0–100), and the line under it. */
export function tileState(tile: ZoneTile, at: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: tile.tz,
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).formatToParts(at);
  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  const hour = hourIn(tile.tz, at);
  const on = hour >= WORK_START && hour < WORK_END;
  const until = (hour < WORK_START ? WORK_START : WORK_START + 24) - hour;
  return {
    time: `${get("hour")}:${get("minute")}`,
    ampm: get("dayPeriod"),
    abbr: tile.abbr || get("timeZoneName"),
    on,
    now: (hour / 24) * 100,
    until,
    note: on ? `Day ends in ${span(WORK_END - hour)}` : `Back in ${span(until)}`,
  };
}

/** What the four add up to: who is on now, how many of the next 24 hours at
    least one team is working (in quarter-hour steps), and who starts next. */
export function tilesSummary(tiles: ZoneTile[], at: Date) {
  let working = 0;
  let next: { until: number; place: string } | null = null;
  for (const tile of tiles) {
    const state = tileState(tile, at);
    if (state.on) working++;
    else if (!next || state.until < next.until) next = { until: state.until, place: tile.place };
  }
  let covered = 0;
  for (let q = 0; q < 96; q++) {
    const moment = new Date(at.getTime() + q * 15 * 60 * 1000);
    if (tiles.some((tile) => isWorking(tile.tz, moment))) covered++;
  }
  return {
    working,
    coverage: span(covered / 4),
    nextLabel: next ? `${next.place} online in` : "Next team online",
    next: next ? span(next.until) : "All on",
  };
}
