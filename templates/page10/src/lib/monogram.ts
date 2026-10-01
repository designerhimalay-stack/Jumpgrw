/* Letters for a tool with no logo. A short name or an acronym stands as it is
   ("C#", "AWS", "MERN stack" → "MERN"); otherwise the initials of a two-word
   name ("Spring Boot" → "SB") or the first two letters ("Kafka" → "KA"). */
export function monogram(name: string): string {
  const first = name.split(/[\s/]+/)[0];
  if (name.length <= 3) return name.toUpperCase();
  if (/^[A-Z0-9]{2,4}$/.test(first)) return first;
  const words = name.replace(/[^\p{L}\p{N} ]/gu, " ").trim().split(/\s+/);
  const letters = words.length > 1 ? words[0][0] + words[1][0] : words[0].slice(0, 2);
  return letters.toUpperCase();
}
