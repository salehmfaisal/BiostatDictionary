"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";

const FIELDS = ["Biostatistics", "Bioinformatics", "Epidemiology", "Data Science"];

export function SuggestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    term: "",
    field: FIELDS[0],
    category: "",
    definition: "",
    reason: "",
    reference: "",
    name: "",
    email: "",
  });

  function update(key: keyof typeof values) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  // A mailto fallback so submissions reach a real inbox without a backend.
  const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    `Term suggestion: ${values.term || "(no title)"}`,
  )}&body=${encodeURIComponent(
    [
      `Term: ${values.term}`,
      `Field: ${values.field}`,
      `Category: ${values.category}`,
      `Suggested definition: ${values.definition}`,
      `Reason for inclusion: ${values.reason}`,
      `Reference: ${values.reference}`,
      `Submitted by: ${values.name} (${values.email})`,
    ].join("\n"),
  )}`;

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-surface-muted p-6">
        <h2 className="text-lg font-semibold text-content">Thank you</h2>
        <p className="mt-2 text-content-muted">
          Your suggestion has been prepared. Submissions are never published
          automatically — our editors review each one first.
        </p>
        <p className="mt-3">
          <a href={mailto} className="text-brand underline">
            Click here to send your suggestion by email
          </a>{" "}
          to complete the submission.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 rounded-md border border-border px-3 py-1.5 text-sm text-content-muted hover:text-content"
        >
          Suggest another term
        </button>
      </div>
    );
  }

  const inputClass =
    "mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-content outline-none focus:border-brand";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="term" className="font-medium text-content">
          Term name <span className="text-brand">*</span>
        </label>
        <input id="term" required value={values.term} onChange={update("term")} className={inputClass} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="field" className="font-medium text-content">
            Field <span className="text-brand">*</span>
          </label>
          <select id="field" value={values.field} onChange={update("field")} className={inputClass}>
            {FIELDS.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="category" className="font-medium text-content">
            Category
          </label>
          <input id="category" value={values.category} onChange={update("category")} className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="definition" className="font-medium text-content">
          Suggested definition
        </label>
        <textarea id="definition" rows={3} value={values.definition} onChange={update("definition")} className={inputClass} />
      </div>

      <div>
        <label htmlFor="reason" className="font-medium text-content">
          Reason for inclusion
        </label>
        <textarea id="reason" rows={2} value={values.reason} onChange={update("reason")} className={inputClass} />
      </div>

      <div>
        <label htmlFor="reference" className="font-medium text-content">
          Reference
        </label>
        <input id="reference" value={values.reference} onChange={update("reference")} className={inputClass} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-medium text-content">
            Your name
          </label>
          <input id="name" value={values.name} onChange={update("name")} className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="font-medium text-content">
            Your email
          </label>
          <input id="email" type="email" value={values.email} onChange={update("email")} className={inputClass} />
        </div>
      </div>

      <button
        type="submit"
        className="rounded-md bg-brand px-5 py-2.5 font-medium text-white hover:bg-brand-strong"
      >
        Submit suggestion
      </button>
    </form>
  );
}
