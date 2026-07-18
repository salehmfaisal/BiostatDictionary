import katex from "katex";

/** Renders a KaTeX formula to HTML on the server. */
export function FormulaDisplay({
  formula,
  display = true,
  ariaLabel,
}: {
  formula: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  let html = "";
  try {
    html = katex.renderToString(formula, {
      throwOnError: false,
      displayMode: display,
      output: "html",
    });
  } catch {
    html = `<code>${formula}</code>`;
  }
  return (
    <div
      role="math"
      aria-label={ariaLabel ?? "Mathematical formula"}
      className="my-2"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
