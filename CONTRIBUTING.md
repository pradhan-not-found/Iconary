# Contributing to Iconary

Thanks for considering a contribution! Iconary welcomes people of all skill levels — there are several ways to help, and most take less than 30 minutes.

## Ways to Contribute

### 1. Draw a New Icon
- Check the [Icon Requests](#) for icons that are needed.
- Follow the [Style Guide](./STYLE_GUIDE.md) (grid size, stroke width, naming).
- Add your SVG to `icons/svg/` and a corresponding entry in `icons/registry.json`.
- Open a PR using the "New Icon Submission" template.

### 2. Write or Improve a Concept Explainer
- Every icon has a short explanation of the AI/ML concept it represents.
- If you're knowledgeable about a concept, you can write or refine its explainer in `icons/registry.json` (the `description` field).
- Keep explanations to 1-2 sentences, plain English, no jargon where possible.

### 3. Request a New Icon
- Open an issue using the "Icon Request" template.
- Describe the concept and (optionally) suggest a visual idea.

### 4. Build or Improve a Framework Package
- Packages for React, Vue, and Svelte live in `packages/`.
- Help keep these in sync with the icon registry, improve TypeScript types, or add new framework support (Angular, Solid, etc.)

### 5. Translate Documentation
- Help translate the docs site and concept explainers into other languages.

## Submission Steps

1. Fork the repo and create a new branch.
2. Make your changes following the style guide.
3. Run `npm run lint:icons` to check your SVG meets the guidelines.
4. Open a Pull Request — fill out the template and link any related issue.
5. A maintainer will review, suggest changes if needed, and merge.

## Icon Naming Convention

- Use `kebab-case`.
- Prefix with category where helpful: `ai-`, `data-`, `model-`, `agent-`.
- Examples: `ai-agent.svg`, `data-pipeline.svg`, `model-fine-tuning.svg`

## Code of Conduct

By participating, you agree to uphold our [Code of Conduct](./CODE_OF_CONDUCT.md).

## Questions?

Open a [Discussion](#) or comment on an existing issue — we're happy to help first-time contributors.
