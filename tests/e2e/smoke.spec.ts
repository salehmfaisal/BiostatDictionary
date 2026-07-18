import { test, expect } from "@playwright/test";

test.describe("BiostatDictionary smoke tests", () => {
  test("homepage shows the dictionary document", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    // The reading view renders the four field sections.
    await expect(page.getByRole("heading", { name: "Biostatistics", level: 3 })).toBeVisible();
  });

  test("selected-term deep link highlights the term", async ({ page }) => {
    await page.goto("/?term=hazard-ratio");
    const entry = page.locator("#term-hazard-ratio");
    await expect(entry).toHaveClass(/term-selected/);
    await expect(page).toHaveTitle(/Hazard Ratio/);
  });

  test("keyboard shortcut opens search and finds a term by acronym", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("/");
    const dialog = page.getByRole("dialog", { name: /search/i });
    await expect(dialog).toBeVisible();
    await page.getByLabel("Search terms").fill("GLM");
    await expect(page.getByRole("option").first()).toContainText(/Generalized Linear Model/i);
  });

  test("term page renders full sections", async ({ page }) => {
    await page.goto("/term/confidence-interval");
    await expect(page.getByRole("heading", { name: "Confidence Interval", level: 1 })).toBeVisible();
    await expect(page.getByText("Simple explanation")).toBeVisible();
    await expect(page.getByText("Interpretation")).toBeVisible();
  });

  test("clicking a term inline updates the URL without full navigation", async ({ page }) => {
    await page.goto("/");
    await page.locator('a[data-term-slug="p-value"]').first().click();
    await expect(page).toHaveURL(/\?term=p-value/);
    await expect(page.locator("#term-p-value")).toHaveClass(/term-selected/);
    // Back button restores previous state.
    await page.goBack();
    await expect(page).not.toHaveURL(/\?term=p-value/);
  });

  test("alphabet navigation jumps to a letter page", async ({ page }) => {
    await page.goto("/terms/h");
    await expect(page.getByRole("heading", { name: /Terms starting with H/ })).toBeVisible();
  });

  test("field page lists terms and topics", async ({ page }) => {
    await page.goto("/epidemiology");
    await expect(page.getByRole("heading", { name: "Epidemiology", level: 1 })).toBeVisible();
    await expect(page.getByText("All Epidemiology topics")).toBeVisible();
  });

  test("invalid term returns 404", async ({ page }) => {
    const res = await page.goto("/term/not-a-real-term-xyz");
    expect(res?.status()).toBe(404);
  });
});
