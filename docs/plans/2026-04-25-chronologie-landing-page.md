# Chronologie Landing Page Implementation Plan

> **For Hermes:** Implement the landing page in the existing Next.js app using reusable components and verify with tests + build.

**Goal:** Replace the current SEPHORiA one-page site with a Chronologie landing page that visually matches the visible Figma landing-page thumbnail as closely as possible.

**Architecture:** Build the page from reusable presentational components under `src/components/chronologie/`, centralize section content in typed data, use Tailwind utility classes plus a small set of global design tokens/utilities, and add Vitest tests for key sections.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS v4, Vitest, React Testing Library.

---

## Tasks

1. Add test infrastructure compatible with the current Next.js app.
2. Write failing tests for the Chronologie landing page structure and key content.
3. Build reusable Chronologie components and page data.
4. Replace the current page implementation with the new landing page.
5. Run tests, lint, and production build.
6. Launch locally and visually compare with the available Figma thumbnail reference.
