import type { LineIcon } from "@pg/page33/types/page";

/* 24-unit line icons for the subpage sections, stroked in currentColor, in
   the same style as the navbar and skills icons (Feather, MIT; see
   THIRD_PARTY_NOTICES.md). Render inside an <svg viewBox="0 0 24 24">. */
export const LINE_ICONS: Record<LineIcon, string> = {
  zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/>',
  wallet:
    '<path d="M20 7V5.5A1.5 1.5 0 0 0 18.5 4h-13A2.5 2.5 0 0 0 3 6.5v11A2.5 2.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V17"/><path d="M21 9h-5a3 3 0 0 0 0 6h5V9Z"/><path d="M16.5 12h.01"/>',
  shield: '<path d="M12 21.5s7.5-3.6 7.5-9.4V5.4L12 2.5 4.5 5.4v6.7c0 5.8 7.5 9.4 7.5 9.4Z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
  layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
  plug: '<path d="M9 2v5M15 2v5"/><path d="M6 7h12v4a6 6 0 0 1-12 0V7Z"/><path d="M12 17v5"/>',
  cloud: '<path d="M17.5 19H8a5.5 5.5 0 1 1 1.2-10.9A6 6 0 0 1 20.8 10 4.5 4.5 0 0 1 17.5 19Z"/>',
  document:
    '<path d="M14 2.5H6.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8Z"/><path d="M14 2.5V8h5.5"/><path d="M8.5 13h7M8.5 17h5"/>',
  diagram:
    '<rect x="9" y="2.5" width="6" height="5" rx="1"/><rect x="2.5" y="16.5" width="6" height="5" rx="1"/><rect x="15.5" y="16.5" width="6" height="5" rx="1"/><path d="M12 7.5v4.5M5.5 16.5V12h13v4.5"/>',
  pointer: '<path d="m4 4 7 16 2.5-6.5L20 11 4 4Z"/><path d="m14 14 5 5"/>',
  calendar:
    '<rect x="3" y="4.5" width="18" height="17" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/><path d="M7.5 14h3M7.5 17.5h6"/>',
  sync: '<path d="M20.5 12a8.5 8.5 0 0 1-15.1 5.3M3.5 12A8.5 8.5 0 0 1 18.6 6.7"/><path d="M19 2.5v4.5h-4.5M5 21.5V17h4.5"/>',
  mobile: '<rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M11 18h2"/>',
  loader: '<path d="M12 2.5v4M12 17.5v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2.5 12h4M17.5 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/>',
  alert: '<circle cx="12" cy="12" r="9.5"/><path d="M12 7.5v5.5M12 16.5h.01"/>',
  lock: '<rect x="4" y="10.5" width="16" height="11" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/>',
  devices:
    '<rect x="2.5" y="4" width="14" height="10" rx="1.5"/><path d="M6 17.5h6"/><rect x="17" y="8.5" width="4.5" height="11" rx="1"/>',
};
