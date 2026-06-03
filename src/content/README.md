# Content Operations Guide

This folder is the single source of truth for marketing copy and proof content.

## Structure

- `siteContent.ts`: typed content schema for services, industries, case studies, trust blocks.

## Publishing Workflow

1. Update content in `siteContent.ts`.
2. Ensure each new entry has:
   - a unique `slug`
   - concise `summary`/`excerpt`
   - at least 3 measurable outcomes or capabilities.
3. Run project lint and verify route generation:
   - `/services/[slug]`
   - `/industries/[slug]`
   - `/case-studies/[slug]`
4. Verify metadata and internal links on updated pages.

## Copy Standards

- Write in outcome-first language.
- Use enterprise tone (clear, direct, no filler).
- Prefer measurable impact statements.
