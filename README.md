<div align="center">
  <img src="./public/github_header.png" alt="Iconary — The Open Source AI & ML Icon Library" width="100%" />
  
  <br />
  
  [![Stars](https://img.shields.io/github/stars/pradhan-not-found/Iconary?style=for-the-badge&color=000000&labelColor=333333&logo=github)](https://github.com/pradhan-not-found/Iconary/stargazers)
  [![NPM](https://img.shields.io/npm/v/@iconary/react?style=for-the-badge&color=CB3837&labelColor=333333&logo=npm)](https://www.npmjs.com/package/@iconary/react)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge&color=000000&labelColor=333333)](./LICENSE)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge&color=00796B&labelColor=333333)](https://github.com/pradhan-not-found/Iconary/pulls)

  <h3>Beautiful, open-source vector icons meticulously crafted for Artificial Intelligence, Machine Learning, and Data Science.</h3>
</div>

---

Iconary is the ultimate **UI toolkit for the AI era**. Whether you are designing an LLM dashboard, building a generative AI product, or visualizing data pipelines, Iconary provides highly scalable, semantic vector icons designed exclusively for complex tech concepts.

Available natively for **React**, **Vue**, and plain **HTML/CSS**, every icon ships with **outline**, **filled**, and **duotone** variants. Furthermore, we include short plain-English concept explainers with every icon, making this library perfect for frontend engineers, UI/UX designers, and anyone looking to learn AI terminology.

---

## <img src="https://raw.githubusercontent.com/primer/octicons/main/icons/star-24.svg" width="24" /> The Iconary Advantage

| Feature | Description |
| :--- | :--- |
| <img src="https://raw.githubusercontent.com/primer/octicons/main/icons/crosshairs-16.svg" width="16" /> **Purpose-Built for AI** | Hand-crafted visuals for concepts like *RAG Architecture*, *Embeddings*, *Vector Databases*, and *Intelligent Agents*. |
| <img src="https://raw.githubusercontent.com/primer/octicons/main/icons/paintbrush-16.svg" width="16" /> **Three distinct styles** | Instantly switch between `outline`, `filled`, and dynamic `duotone` variants from a single source. |
| <img src="https://raw.githubusercontent.com/primer/octicons/main/icons/package-16.svg" width="16" /> **Framework Ready** | Native, tree-shakeable packages for React and Vue, with Svelte and a Figma Plugin coming soon. |
| <img src="https://raw.githubusercontent.com/primer/octicons/main/icons/zap-16.svg" width="16" /> **Performance First** | Heavily minified via SVGO for zero-bloat, lightning-fast load times. |
| <img src="https://raw.githubusercontent.com/primer/octicons/main/icons/book-16.svg" width="16" /> **Built-in Explainers** | Demystify the tech—every icon is paired with a clear, 1-2 sentence concept explanation. |

---

## <img src="https://raw.githubusercontent.com/primer/octicons/main/icons/rocket-24.svg" width="24" /> Quick Start

Get up and running in seconds. Choose your preferred framework below:

<details open>
<summary><b><img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/react.svg" width="16" /> React</b></summary>
<br/>

```bash
npx iconary-react
```

```tsx
import { Agent, VectorDatabase, FineTuning } from "@iconary/react";

export default function App() {
  return (
    <div style={{ display: "flex", gap: "1.5rem" }}>
      <Agent size={28} />
      <VectorDatabase style="duotone" size={28} />
      <FineTuning style="filled" size={28} color="#2f81f7" />
    </div>
  );
}
```
</details>

<details>
<summary><b><img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vuedotjs.svg" width="16" /> Vue</b></summary>
<br/>

```bash
pnpm add iconary-vue
```

```vue
<script setup lang="ts">
import { Agent, Model, FineTuning } from "iconary-vue";
</script>

<template>
  <div style="display: flex; gap: 1.5rem">
    <Agent :size="28" />
    <Model icon-style="duotone" :size="28" />
    <FineTuning icon-style="filled" :size="28" color="#2f81f7" />
  </div>
</template>
```
</details>

<details>
<summary><b><img src="https://raw.githubusercontent.com/primer/octicons/main/icons/globe-16.svg" width="16" /> Plain HTML/SVG</b></summary>
<br/>

Not using a JS framework? You can browse and copy raw SVGs directly from our [Gallery Website](#), or load them via our CDN.
</details>

<br/>

> **Note:** Duotone icons automatically inherit your current text color for their primary shapes. You can easily override the secondary muted color using standard CSS variables or class targeting.

---

## <img src="https://raw.githubusercontent.com/primer/octicons/main/icons/people-24.svg" width="24" /> Open Source & Contributing

Iconary is built by the community, for the community. If you are a developer or designer searching for a **high-impact open source project to contribute to**, or looking for **good first issues**, we'd absolutely love to have you onboard!

Here is how you can help:
1. <img src="https://raw.githubusercontent.com/primer/octicons/main/icons/pencil-16.svg" width="16" /> **Draw:** Follow the style guide, create an SVG, add it to the registry, and open a PR.
2. <img src="https://raw.githubusercontent.com/primer/octicons/main/icons/note-16.svg" width="16" /> **Explain:** Refine or translate the plain-English explanations attached to each icon concept.
3. <img src="https://raw.githubusercontent.com/primer/octicons/main/icons/tools-16.svg" width="16" /> **Build:** Enhance our build pipeline, improve TypeScript typings, or expand framework support.

<img src="https://raw.githubusercontent.com/primer/octicons/main/icons/repo-16.svg" width="16" /> **Get Started:** Read our [Contribution Guidelines (CONTRIBUTING.md)](./CONTRIBUTING.md).  
<img src="https://raw.githubusercontent.com/primer/octicons/main/icons/issue-opened-16.svg" width="16" /> **Find an Issue:** Check out issues labeled [`good first issue`](https://github.com/pradhan-not-found/Iconary/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) or [`help wanted`](https://github.com/pradhan-not-found/Iconary/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22).

---

## <img src="https://raw.githubusercontent.com/primer/octicons/main/icons/law-24.svg" width="24" /> License

Iconary is proudly open-source and released under the [MIT License](./LICENSE). It is entirely free for both personal and commercial use.

<div align="center">
  <br/>
  Made with <img src="https://raw.githubusercontent.com/primer/octicons/main/icons/heart-fill-16.svg" width="16" /> by the Open Source Community
</div>
