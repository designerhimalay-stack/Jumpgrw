/* A light colouring for the short code samples on this page: comments,
   strings, decorators, keywords and JSX tags, each wrapped in a span with a
   data-k kind the CSS colours. Returns one numbered span per line, ready for
   set:html inside a <pre>. Input is escaped first. */

const KEYWORDS =
  /\b(model|enum|const|let|await|async|return|export|function|import|from|new|if|else|type|interface)\b/g;
const TOKENS = /("[^"]*"|\/\/.*$|@{1,2}[\w.]+|&lt;\/?[A-Za-z][\w]*|\/?&gt;)/g;

const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const keywords = (s: string) => s.replace(KEYWORDS, '<span data-k="kw">$1</span>');

function colour(line: string): string {
  const src = escape(line);
  const parts: string[] = [];
  let last = 0;
  for (const m of src.matchAll(TOKENS)) {
    const t = m[0];
    const at = m.index ?? 0;
    const kind = t.startsWith('"') ? "str" : t.startsWith("//") ? "com" : t.startsWith("@") ? "dec" : "tag";
    parts.push(keywords(src.slice(last, at)), `<span data-k="${kind}">${t}</span>`);
    last = at + t.length;
  }
  parts.push(keywords(src.slice(last)));
  return parts.join("");
}

export function codeLines(code: string): string {
  return code
    .replace(/^\n|\n\s*$/g, "")
    .split("\n")
    .map(
      (line, n) =>
        `<span data-ac-e2e-line><span data-ac-e2e-ln aria-hidden="true">${n + 1}</span><span>${colour(line) || " "}</span></span>`,
    )
    .join("");
}
