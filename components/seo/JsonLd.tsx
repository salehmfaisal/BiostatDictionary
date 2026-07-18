/** Renders a JSON-LD structured-data script tag. */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to embed; no user HTML is included.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
