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
