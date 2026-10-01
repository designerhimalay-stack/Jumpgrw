/* A dotted globe, drawn on a canvas: the land as dots (Natural Earth, 1:110m,
   sampled into src/lib/land-dots.json), the hubs as pulsing points, and
   arcs of light travelling between them. Orthographic projection with a
   slight tilt; it turns slowly on its own, can be dragged, and can be told
   to turn to face a hub. Only the near side is drawn. Paused while off
   screen; a single still frame under reduced motion. */

import landDots from "@/lib/land-dots.json";

export interface Hub {
  name: string;
  lat: number;
  lon: number;
}

interface Options {
  hubs: Hub[];
  /** Pairs of hub indices to join with arcs. */
  links: [number, number][];
  /** Longitude to face at the start. */
  startLon: number;
}

const RAD = Math.PI / 180;
const TILT = 18 * RAD;
const ACCENT = [80, 122, 247];

type Vec = [number, number, number];

const toVec = (lat: number, lon: number): Vec => {
  const la = lat * RAD;
  const lo = lon * RAD;
  return [Math.cos(la) * Math.sin(lo), Math.sin(la), Math.cos(la) * Math.cos(lo)];
};

/* Rotate about the vertical axis by the view longitude, then tilt toward
   the viewer. z > 0 is the near side. */
const view = (v: Vec, rot: number): Vec => {
  const [x, y, z] = v;
  const cr = Math.cos(rot);
  const sr = Math.sin(rot);
  const x1 = x * cr - z * sr;
  const z1 = x * sr + z * cr;
  const ct = Math.cos(TILT);
  const st = Math.sin(TILT);
  return [x1, y * ct - z1 * st, y * st + z1 * ct];
};

/* Points along the great circle between two unit vectors, lifted off the
   surface in the middle so the arc reads as a flight path. */
const arcPoints = (a: Vec, b: Vec, steps = 48): Vec[] => {
  const dot = Math.min(1, Math.max(-1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));
  const omega = Math.acos(dot);
  const s = Math.sin(omega) || 1;
  const out: Vec[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const k1 = Math.sin((1 - t) * omega) / s;
    const k2 = Math.sin(t * omega) / s;
    const lift = 1 + Math.sin(Math.PI * t) * 0.1 * (omega / Math.PI + 0.4);
    out.push([(a[0] * k1 + b[0] * k2) * lift, (a[1] * k1 + b[1] * k2) * lift, (a[2] * k1 + b[2] * k2) * lift]);
  }
  return out;
};

export function mountGlobe(canvas: HTMLCanvasElement, options: Options) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return { faceHub: () => {} };

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const dots = (landDots as [number, number][]).map(([lat, lon]) => toVec(lat, lon));
  const hubs = options.hubs.map((h) => toVec(h.lat, h.lon));
  const arcs = options.links.map(([a, b]) => arcPoints(hubs[a], hubs[b]));

  /* The view rotation is the longitude facing the reader, in radians. */
  let rot = options.startLon * RAD;
  let target: number | null = null;
  let highlight = -1;
  let dragging = false;
  let lastX = 0;
  let running = false;
  let frame = 0;
  let size = 0;
  let dpr = 1;

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    size = canvas.clientWidth;
    canvas.width = Math.round(size * dpr);
    canvas.height = Math.round(size * dpr);
  };

  const draw = (time: number) => {
    /* Room round the sphere for the arcs to rise into. */
    const r = size * 0.41;
    const c = size / 2;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, size, size);

    /* The sphere: a faint disc with a lit edge. */
    const glow = ctx.createRadialGradient(c - r * 0.3, c - r * 0.35, r * 0.1, c, c, r);
    glow.addColorStop(0, "rgba(80,122,247,0.16)");
    glow.addColorStop(1, "rgba(10,16,34,0.0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(c, c, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(170,189,255,0.22)";
    ctx.lineWidth = 1;
    ctx.stroke();

    /* Land: brighter toward the middle of the near side. */
    for (const d of dots) {
      const [x, y, z] = view(d, rot);
      if (z <= 0.02) continue;
      const a = 0.25 + z * 0.75;
      ctx.fillStyle = `rgba(170,189,255,${a.toFixed(3)})`;
      const s = 1.1 + z * 1.1;
      ctx.fillRect(c + x * r - s / 2, c - y * r - s / 2, s, s);
    }

    /* Arcs: the whole path faint, and a bright head travelling along it. */
    arcs.forEach((pts, i) => {
      const projected = pts.map((p) => view(p, rot));
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = `rgba(${ACCENT.join(",")},0.35)`;
      ctx.beginPath();
      let drawing = false;
      projected.forEach(([x, y, z]) => {
        if (z <= 0) {
          drawing = false;
          return;
        }
        if (!drawing) ctx.moveTo(c + x * r, c - y * r);
        else ctx.lineTo(c + x * r, c - y * r);
        drawing = true;
      });
      ctx.stroke();

      const t = ((time / 2600 + i * 0.37) % 1) * (projected.length - 1);
      const head = Math.floor(t);
      for (let k = Math.max(0, head - 10); k <= head; k++) {
        const [x, y, z] = projected[k];
        if (z <= 0) continue;
        const a = (1 - (head - k) / 10) * 0.95;
        ctx.fillStyle = `rgba(255,255,255,${a.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(c + x * r, c - y * r, 1.6 + (k === head ? 1 : 0), 0, Math.PI * 2);
        ctx.fill();
      }
    });

    /* Hubs: a pulsing ring and a solid point. */
    hubs.forEach((h, i) => {
      const [x, y, z] = view(h, rot);
      if (z <= 0) return;
      const px = c + x * r;
      const py = c - y * r;
      const on = i === highlight;
      const pulse = (time / 1800 + i * 0.25) % 1;
      ctx.strokeStyle = `rgba(${ACCENT.join(",")},${(1 - pulse).toFixed(3)})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(px, py, 4 + pulse * (on ? 22 : 14), 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = on ? "#ffffff" : `rgb(${ACCENT.join(",")})`;
      ctx.beginPath();
      ctx.arc(px, py, on ? 6 : 4.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#0a1022";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });
  };

  const tick = (time: number) => {
    frame = 0;
    if (!running) return;
    if (target !== null) {
      /* Ease toward the hub, the short way round. */
      let d = (target - rot) % (Math.PI * 2);
      if (d > Math.PI) d -= Math.PI * 2;
      if (d < -Math.PI) d += Math.PI * 2;
      rot += d * 0.08;
      if (Math.abs(d) < 0.002) target = null;
    } else if (!dragging) {
      rot -= 0.0016;
    }
    draw(time);
    frame = requestAnimationFrame(tick);
  };

  resize();
  draw(0);
  new ResizeObserver(() => {
    resize();
    draw(performance.now());
  }).observe(canvas);

  if (!reduced) {
    new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
      if (running && !frame) frame = requestAnimationFrame(tick);
    }).observe(canvas);

    canvas.addEventListener("pointerdown", (event) => {
      dragging = true;
      target = null;
      lastX = event.clientX;
      canvas.setPointerCapture(event.pointerId);
    });
    canvas.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      rot -= (event.clientX - lastX) * 0.006;
      lastX = event.clientX;
    });
    const release = () => {
      dragging = false;
    };
    canvas.addEventListener("pointerup", release);
    canvas.addEventListener("pointercancel", release);
  }

  return {
    /* Turns the globe to face a hub and marks it; -1 clears the mark. */
    faceHub(index: number) {
      highlight = index;
      if (index < 0) return;
      target = options.hubs[index].lon * RAD;
      if (reduced) {
        rot = target;
        target = null;
        draw(0);
      }
    },
  };
}
