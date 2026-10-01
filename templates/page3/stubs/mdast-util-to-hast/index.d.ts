import type { Data, Literal } from "hast";

/** A raw HTML node: the one type hast-util-to-html takes from this package. */
export interface Raw extends Literal {
  type: "raw";
  data?: Data | undefined;
}
