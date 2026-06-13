# Iconary Style Guide

Consistency is what makes an icon set feel professional. Please follow these rules closely.

## Grid & Canvas
- **Canvas size:** 24x24px (`viewBox="0 0 24 24"`)
- **Live area:** keep important shapes within a 20x20px area, with 2px padding on each side
- Icons should be optically centered, not just mathematically centered

## Stroke (Outline Style)
- **Stroke width:** 1.5px
- **Stroke caps:** round
- **Stroke joins:** round
- No filled shapes in outline style — strokes only

## Filled Style
- Solid shapes, no strokes
- Maintain the same silhouette as the outline version so they're recognizable as the same icon

## Duotone Style
- Two-tone: a filled background shape at lower opacity (e.g., 20%) + an outline or solid foreground detail
- Use `currentColor` for both layers so the icon inherits theme colors

## Color
- All icons should default to `currentColor` (no hardcoded colors) so they adapt to any theme
- Duotone uses opacity variation, not a second hardcoded color

## File Format
- Plain SVG, no embedded styles or scripts
- No unnecessary groups, transforms, or metadata (run through SVGO before submitting)
- File should start with `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">`

## Naming
- `kebab-case`, descriptive, category-prefixed where helpful
- Examples: `ai-agent.svg`, `model-fine-tuning.svg`, `data-vector-database.svg`

## Registry Entry Format

Each icon needs an entry in `icons/registry.json`:

```json
{
  "name": "ai-agent",
  "category": "ai-concepts",
  "tags": ["agent", "automation", "assistant"],
  "description": "An AI agent is a system that can perceive its environment and take actions to achieve a goal, often using tools or making decisions autonomously.",
  "author": "github-username"
}
```

## Concept Explainer Guidelines
- 1-2 sentences, plain English
- Avoid circular definitions ("An agent is something that acts as an agent")
- Assume the reader is smart but new to the term
- If a term has multiple meanings in AI/ML, focus on the most common usage in product/dev contexts

## Checklist Before Submitting
- [ ] SVG uses 24x24 viewBox
- [ ] Stroke width is 1.5px (outline) or appropriate fill (filled/duotone)
- [ ] Uses `currentColor`
- [ ] Run through SVGO / cleaned of unnecessary code
- [ ] Registry entry added with name, category, tags, description, author
- [ ] File named in kebab-case with category prefix
