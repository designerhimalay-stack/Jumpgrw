/* The visitor's cookie choice, kept on their device only.

   The site sets no cookies of its own and runs no analytics or advertising.
   The one optional third party is YouTube: client-story videos play inside
   the page only with "all"; with "essential" (or before any choice) they open
   on YouTube in a new tab instead, so YouTube's player never runs on this site
   (the preview pictures still come from YouTube's image server).

   Storage can be unavailable (private windows, blocked site data), so every
   read and write is guarded and a missing value just means "not chosen". */

export type Consent = "all" | "essential";

const KEY = "jg-consent";
const EVENT = "jg:consent";

export const getConsent = (): Consent | null => {
  try {
    const value = window.localStorage.getItem(KEY);
    return value === "all" || value === "essential" ? value : null;
  } catch {
    return null;
  }
};

export const setConsent = (value: Consent): void => {
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    /* storage blocked: the choice holds for this page view only */
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: value }));
};

/** Ask the cookie notice to show itself again (the "Cookie settings" link). */
export const reopenConsent = (): void => {
  window.dispatchEvent(new CustomEvent("jg:consent-open"));
};
