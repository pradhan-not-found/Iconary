<div align="center">
  <img src="./public/github_header.png" alt="Iconary — The Open Source AI & ML Icon Library" width="100%" />
  
  <br /><br />
  
  [![Stars](https://img.shields.io/github/stars/pradhan-not-found/Iconary?style=for-the-badge&color=000000&labelColor=333333&logo=github)](https://github.com/pradhan-not-found/Iconary/stargazers)
  [![NPM](https://img.shields.io/badge/npm-v0.1.0-CB3837?style=for-the-badge&labelColor=333333&logo=npm)](#)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge&color=000000&labelColor=333333)](./LICENSE)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge&color=00796B&labelColor=333333)](https://github.com/pradhan-not-found/Iconary/pulls)

  <h3>The UI Toolkit for AI Developers</h3>
</div>

<br />

Iconary is the ultimate open-source icon library for Artificial Intelligence (AI), Machine Learning (ML), and Data Science. Whether you are building an LLM dashboard, a generative AI product, or visualizing data pipelines, Iconary provides highly scalable, semantic vector icons designed exclusively for complex tech concepts.

Available natively for **React**, **Vue**, and plain **HTML/CSS**. Every icon ships with **outline**, **filled**, and **duotone** variants. We also include short plain-English concept explainers with every icon, making this library perfect for frontend engineers, UI/UX designers, and anyone looking to learn AI terminology.

<br />

## <img src="https://api.iconify.design/lucide/star.svg?color=white" width="24" style="vertical-align: text-bottom;" /> The Iconary Advantage

| Feature | Description |
| :--- | :--- |
| <img src="https://api.iconify.design/lucide/crosshair.svg?color=white" width="16" style="vertical-align: middle;" /> **Purpose-Built for AI** | Hand-crafted visuals for concepts like *RAG Architecture*, *Embeddings*, *Vector Databases*, and *Intelligent Agents*. |
| <img src="https://api.iconify.design/lucide/paintbrush.svg?color=white" width="16" style="vertical-align: middle;" /> **Three distinct styles** | Instantly switch between `outline`, `filled`, and dynamic `duotone` variants from a single source. |
| <img src="https://api.iconify.design/lucide/package.svg?color=white" width="16" style="vertical-align: middle;" /> **Framework Ready** | Native, tree-shakable packages for React and Vue, with Svelte and a Figma plugin coming soon. |
| <img src="https://api.iconify.design/lucide/zap.svg?color=white" width="16" style="vertical-align: middle;" /> **Performance First** | Heavily minified via SVGO for zero-bloat, lightning-fast load times. |
| <img src="https://api.iconify.design/lucide/book.svg?color=white" width="16" style="vertical-align: middle;" /> **Built-in Explainers** | Demystify the tech—every icon is paired with a clear, 1-2 sentence concept explanation. |

<br />

## <img src="https://api.iconify.design/lucide/rocket.svg?color=white" width="24" style="vertical-align: text-bottom;" /> Quick Start

Get up and running in seconds. Choose your preferred framework below:

<details open>
<summary><b><img src="https://api.iconify.design/simple-icons/react.svg?color=white" width="16" style="vertical-align: middle;" /> React</b></summary>
<br/>

```bash
npm install iconary-react
```

```tsx
import { Agent, VectorDatabase, FineTuning } from "iconary-react";

export default function App() {
  return (
    <div style={{ display: "flex", gap: "1.5rem" }}>
      <Agent size={28} />
      <VectorDatabase iconStyle="duotone" size={28} />
      <FineTuning iconStyle="filled" size={28} color="#2f81f7" />
    </div>
  );
}
```
</details>

<details>
<summary><b><img src="https://api.iconify.design/simple-icons/vuedotjs.svg?color=white" width="16" style="vertical-align: middle;" /> Vue</b></summary>
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
<summary><b><img src="https://api.iconify.design/lucide/globe.svg?color=white" width="16" style="vertical-align: middle;" /> Plain HTML/SVG</b></summary>
<br/>

Not using a JS framework? You can browse and copy raw SVGs directly from our [Gallery Website](#), or load them via our CDN.
</details>

<br/>

> **Note:** Duotone icons automatically inherit your current text color for their primary shapes. You can easily override the secondary muted color using standard CSS variables or class targeting.

<br />

## <img src="https://api.iconify.design/lucide/users.svg?color=white" width="24" style="vertical-align: text-bottom;" /> Open Source & Contributing

Iconary is built by the community, for the community. If you are a developer or designer searching for a **high-impact open source project to contribute to**, or looking for **good first issues**, we'd absolutely love to have you on board!

Here is how you can help:
* <img src="https://api.iconify.design/lucide/pen-tool.svg?color=white" width="16" style="vertical-align: middle;" /> **Draw:** Follow the style guide, create an SVG, add it to the registry, and open a PR.
* <img src="https://api.iconify.design/lucide/file-text.svg?color=white" width="16" style="vertical-align: middle;" /> **Explain:** Refine or translate the plain-English explanations attached to each icon concept.
* <img src="https://api.iconify.design/lucide/hammer.svg?color=white" width="16" style="vertical-align: middle;" /> **Build:** Enhance our build pipeline, improve TypeScript typings, or expand framework support.

<img src="https://api.iconify.design/lucide/book-open.svg?color=white" width="16" style="vertical-align: middle;" /> **Get Started:** Read our [Contribution Guidelines (CONTRIBUTING.md)](./CONTRIBUTING.md).  
<img src="https://api.iconify.design/lucide/check-circle.svg?color=white" width="16" style="vertical-align: middle;" /> **Find an Issue:** Check out issues labeled [`good first issue`](https://github.com/pradhan-not-found/Iconary/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) or [`help wanted`](https://github.com/pradhan-not-found/Iconary/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22).

<br />

### <img src="https://api.iconify.design/lucide/sprout.svg?color=white" width="20" style="vertical-align: text-bottom;" /> First-Time Contributor?

If you are new to open-source or Git, don't worry! Follow this simple flowchart to make your first contribution:

<br />

1. **<kbd><img src="https://api.iconify.design/lucide/git-fork.svg?color=white" width="16" style="vertical-align: middle;" /></kbd> Fork it**  
Click the "Fork" button at the top right of this page to copy the repository to your own account.

↓

2. **<kbd><img src="https://api.iconify.design/lucide/download-cloud.svg?color=white" width="16" style="vertical-align: middle;" /></kbd> Clone & Install**  
Clone your forked repository to your computer (`git clone https://github.com/YOUR_NAME/Iconary.git`), open the folder, and run `npm install`.

↓

3. **<kbd><img src="https://api.iconify.design/lucide/git-branch.svg?color=white" width="16" style="vertical-align: middle;" /></kbd> Create a Branch**  
Create a new branch for your work (`git checkout -b feature/my-new-icon`).

↓

4. **<kbd><img src="https://api.iconify.design/lucide/code.svg?color=white" width="16" style="vertical-align: middle;" /></kbd> Make Changes**  
Write your code, design your icon, or fix a typo! You can test it locally by running `npm run dev`.

↓

5. **<kbd><img src="https://api.iconify.design/lucide/upload-cloud.svg?color=white" width="16" style="vertical-align: middle;" /></kbd> Commit & Push**  
Save your changes (`git commit -m "add my new icon"`) and push them back to your fork (`git push origin feature/my-new-icon`).

↓

6. **<kbd><img src="https://api.iconify.design/lucide/git-pull-request.svg?color=white" width="16" style="vertical-align: middle;" /></kbd> Open a Pull Request**  
Come back to this repository and click "New Pull Request". We will review your code and merge it!

<br />

## <img src="https://api.iconify.design/lucide/scale.svg?color=white" width="24" style="vertical-align: text-bottom;" /> License

Iconary is proudly open-source and released under the [MIT License](./LICENSE). It is entirely free for both personal and commercial use.

<div align="center">
  <br/>
  Made with <img src="https://api.iconify.design/lucide/heart.svg?color=white" width="16" style="vertical-align: middle;" /> by the Open Source Community
</div>
