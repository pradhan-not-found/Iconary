# Iconary — Master Plan

## 1. The Core Idea (in one line)
**Iconary is an open source icon library for AI, ML & data tooling — but every icon also comes with a short, clear explanation of the concept it represents, and ships in multiple visual styles generated from a single source file.**

This combination is what makes it different from existing icon sets (Lucide, Tabler, Feather, Heroicons, Phosphor):

| Existing icon libraries | Iconary |
|---|---|
| Just visuals, no context | Each icon = visual **+ 1-2 line concept explainer** |
| Usually one style (outline OR filled) | Each icon auto-generates into **outline, filled, and duotone** from one source |
| General-purpose | Focused specifically on **AI/ML/data** — a space exploding right now with almost no dedicated icon set |
| Contribution = just draw an icon | Contribution can be: draw icon, write/improve concept explainer, add a style variant, build a framework package, translate docs |

This means a beginner designer, a technical writer, a translator, and a frontend dev can ALL contribute meaningfully — which is exactly what drives high commit counts.

## 2. Why This Will Attract Contributors
- **Tiny contribution units.** One icon, one explainer, one translation — each is a single small PR.
- **Never runs dry.** AI/ML vocabulary keeps growing (new icons needed constantly: "agent," "RAG," "fine-tuning," "vector store," etc.).
- **Multiple skill tracks.** Designers draw, writers explain, devs build framework packages, translators localize docs.
- **Visible, satisfying showcase site.** Contributors can literally see and use their icon within minutes of merge.
- **Topical.** AI/ML is one of the hottest spaces — contributors want their name attached to something relevant.

## 3. Phased Roadmap

### Phase 1 — Foundation (Week 1-2)
- Set up GitHub repo, style guide, contribution docs (this package gives you all of this).
- Build 20-30 starter icons covering core AI/ML concepts (model, dataset, pipeline, embedding, token, prompt, agent, fine-tuning, inference, vector database, etc.)
- Write the concept explainer for each starter icon.
- Set up linting script that checks SVG size, viewBox, naming.

### Phase 2 — Site & Packages (Week 2-4)
- Build the documentation/gallery site (Astro recommended — fast, simple).
- Each icon page shows: SVG preview in 3 styles, concept explainer, copy-to-clipboard code (SVG, React, Vue).
- Auto-generate npm packages from the SVG source using a build script.

### Phase 3 — Open the Gates (Week 4+)
- Publish repo publicly, write a launch post.
- Add "Icon Request" and "New Icon Submission" issue templates (included below).
- Label 10-15 starter issues as "good first issue."
- Post to Reddit (r/opensource, r/webdev, r/MachineLearning), Hacker News "Show HN," Twitter/X, Product Hunt.

### Phase 4 — Sustain Growth (Ongoing)
- Weekly "icon of the week" social post highlighting a contributor.
- Add a public roadmap board (GitHub Projects) so people can see what's needed next.
- Add framework integrations one at a time (React done first, then Vue, Svelte, Figma plugin) — each becomes its own contribution wave.
- Add a "Hall of Contributors" section on the site.

## 4. What You Personally Need To Do First
1. Pick up the repo structure and files in this package — they're ready to use as-is or lightly edited.
2. Draw or commission the first 20-30 icons (even rough versions are fine — community will refine).
3. Push the repo to GitHub under the name `iconary` (check availability first).
4. Set up the gallery site (can start as a simple static page, polish later).
5. Open with 10-15 "good first issue" tickets so the first wave of contributors has something to do immediately.

## 5. Files Included In This Package
- `README.md` — main repo readme
- `CONTRIBUTING.md` — contribution guide
- `STYLE_GUIDE.md` — icon design rules
- `CODE_OF_CONDUCT.md` — community guidelines
- `.github/ISSUE_TEMPLATE/icon_request.md`
- `.github/ISSUE_TEMPLATE/new_icon_submission.md`
- `STARTER_ICON_LIST.md` — first 30 icons + their concept explainers, ready to draw
