<div align="center">
  <img src="./public/iconary.png" alt="Iconary Banner" width="100%" />
  <p align="center">
    <strong>Open source icons for AI, ML & data tooling — with built-in concept explanations.</strong>
  </p>
  <p align="center">
    <a href="https://github.com/pradhan-not-found/Iconary/stargazers"><img src="https://img.shields.io/github/stars/pradhan-not-found/Iconary?style=flat-square&logo=github" alt="Stars" /></a>
    <a href="https://www.npmjs.com/package/@iconary/react"><img src="https://img.shields.io/npm/v/@iconary/react?style=flat-square&logo=npm" alt="NPM Version" /></a>
    <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License" /></a>
    <a href="https://github.com/pradhan-not-found/Iconary/pulls"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" /></a>
  </p>
</div>

<br />

Iconary is a meticulously crafted collection of icons designed specifically for AI/ML products, dashboards, and developer tools. Every icon comes in **outline**, **filled**, and **duotone** styles, and includes a short explanation of the concept it represents — making it equally useful for designers, developers, and anyone learning AI/ML terminology.

---

## ⚡ Why Iconary?

- 🎯 **Built for AI/ML** — Beautifully designed icons for complex concepts like intelligent agents, embeddings, fine-tuning, RAG architecture, vector databases, and more.
- 🎨 **3 Styles from 1 Source** — Outline, filled, and duotone variants are generated automatically to fit perfectly into your UI.
- 📖 **Concept Explainers** — Demystify AI terminology. Each icon includes a 1-2 line plain-English explanation of what it represents.
- 📦 **Framework-ready** — Plug-and-play packages available for React, Vue, and Svelte (Figma plugin coming soon).
- 🚀 **Performance Optimized** — Heavily minified via SVGO for lightning-fast load times and a tiny bundle footprint.
- 🌱 **Always Growing** — As the AI landscape evolves, so do our icons. Request a new term or contribute your own design!

---

## 📦 Installation

Install the Iconary package for your preferred framework:

### React
```bash
npx iconary-react
```

### Vue (Coming Soon)
```bash
npx iconary-vue
```

### Svelte (Coming Soon)
```bash
npx iconary-svelte
```

---

## 💻 Usage

Using Iconary is incredibly straightforward. Simply import the desired icon and pass your preferred styling props.

```jsx
import { Agent, VectorDatabase, FineTuning } from "@iconary/react";

export default function App() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {/* Default Outline Style */}
      <Agent size={24} />

      {/* Duotone Style */}
      <VectorDatabase style="duotone" size={24} />

      {/* Filled Style with custom color */}
      <FineTuning style="filled" size={24} color="#2f81f7" />
    </div>
  );
}
```

*Note: Duotone icons automatically inherit your current text color for their primary shapes. You can override the secondary muted color using standard CSS targeting.*

---

## 🌐 Plain HTML / CSS

Not using a JavaScript framework? No problem! You can download the raw SVGs directly from our [gallery](#), or use our CDN link to include them in your vanilla HTML/CSS projects.

---

## 🎨 Browse Icons

Visit the **[Iconary Gallery](#)** to visually search, preview, and instantly copy icons in your preferred style and framework format.

---

## 🤝 Contributing

Iconary is built by the community, for the community. We'd absolutely love your help! Whether you can draw an SVG, write a clear explanation of an AI concept, translate docs, or build a framework integration — there's a place for you here.

1. **Draw:** Follow the style guide, add your SVG and a registry entry, and open a PR.
2. **Explain:** Help write or refine the plain-English explanations attached to each icon.
3. **Build:** Improve our build pipeline or add support for new frameworks.

See [CONTRIBUTING.md](./CONTRIBUTING.md) to get started, and check out open issues labeled [`good first issue`](https://github.com/pradhan-not-found/Iconary/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).

---

## 📄 License

Iconary is proudly open-source and released under the [MIT License](./LICENSE). It is entirely free for both personal and commercial use.

<div align="center">
  <br/>
  Made with ❤️ by contributors
</div>
