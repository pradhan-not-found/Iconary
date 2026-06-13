<div align="center">
  <img src="public/iconary.png" alt="Iconary Logo" width="150" />
  <h1>Iconary</h1>
  <p><strong>Open Source Icon Library for AI/ML & Data Tooling</strong></p>
  
  <p>
    <a href="https://github.com/pradhan-not-found/Iconary/stargazers"><img src="https://img.shields.io/github/stars/pradhan-not-found/Iconary?style=for-the-badge&color=yellow" alt="Stars Badge"/></a>
    <a href="https://github.com/pradhan-not-found/Iconary/network/members"><img src="https://img.shields.io/github/forks/pradhan-not-found/Iconary?style=for-the-badge&color=orange" alt="Forks Badge"/></a>
    <a href="https://github.com/pradhan-not-found/Iconary/issues"><img src="https://img.shields.io/github/issues/pradhan-not-found/Iconary?style=for-the-badge&color=red" alt="Issues Badge"/></a>
    <a href="https://github.com/pradhan-not-found/Iconary/blob/main/LICENSE"><img src="https://img.shields.io/github/license/pradhan-not-found/Iconary?style=for-the-badge&color=blue" alt="License Badge"/></a>
  </p>
</div>

---

## 🌟 About Iconary

**Iconary** is a meticulously crafted, open-source icon set designed explicitly for the AI era. With an ever-growing ecosystem of agents, vector databases, machine learning pipelines, and language models, Iconary provides developers and designers with the high-quality visual primitives they need to build beautiful, modern data tooling.

Say goodbye to generic icons. Iconary focuses on exactly what you need to represent complex modern AI infrastructure, ensuring your dashboard looks premium out-of-the-box.

---

## ✨ Key Features

- ⚡️ **Zero Friction:** Available as raw SVGs, or ready-to-use components for React, Vue, and Svelte.
- 🎨 **Beautifully Designed:** Consistent 1.5px stroke widths, sleek corner radii, and a premium aesthetic tuned perfectly for dark-mode interfaces.
- 🧩 **Comprehensive Coverage:** From Neural Networks to RAG, from LLMs to Vector Embeddings.
- 🔧 **Highly Customizable:** Easily override colors, stroke widths, and sizes via CSS or props.
- 📦 **Tree-Shakable:** Only ship the icons you actually use in your bundle.
- 🤝 **Community Driven:** Anyone can request an icon. Tiny contributions (1 icon = 1 PR) are highly encouraged!

---

## 🚀 Installation

Iconary is designed to be a drop-in solution for modern front-end stacks. 

### React
```bash
npm install @iconary/react
# or
yarn add @iconary/react
# or
pnpm add @iconary/react
```

### Vue
```bash
npm install @iconary/vue
```

### Svelte
```bash
npm install @iconary/svelte
```

---

## 💻 Basic Usage

### React Example

```tsx
import { Brain, VectorDatabase, Agent } from '@iconary/react';

function Dashboard() {
  return (
    <div className="flex gap-4">
      {/* Default size is 24x24 */}
      <Brain />
      
      {/* Customize colors and sizes with Tailwind CSS or standard classes */}
      <VectorDatabase className="text-blue-500" size={32} />
      
      {/* Override stroke width */}
      <Agent strokeWidth={2} color="#8b5cf6" />
    </div>
  );
}
```

### Vue Example

```vue
<script setup>
import { NeuralNet, ModelPipeline } from '@iconary/vue';
</script>

<template>
  <div>
    <NeuralNet />
    <ModelPipeline color="#10b981" :size="48" />
  </div>
</template>
```

### Raw SVG

If you aren't using a framework, you can grab the raw SVGs directly from the `icons/` directory in this repository or via a CDN.

---

## 🎨 The Iconary Design Philosophy

We believe that data tooling doesn't have to be boring. The Iconary set is built around a rigorous grid system and design guidelines:

1. **24x24 Viewbox:** Every icon is built on a standard 24x24 pixel grid.
2. **1.5px Stroke:** Ensures a modern, slightly refined look that doesn't feel heavy but remains perfectly legible on high DPI displays.
3. **Rounded Caps & Joins:** Softens the aggressive nature of technical diagrams, making interfaces feel more approachable.
4. **Metaphor Clarity:** We strive to find recognizable metaphors for highly abstract concepts like "Latent Space" and "Embeddings".

---

## 📂 Categories & Included Concepts

Here is a glimpse of what Iconary covers:

- **Machine Learning:** `Brain`, `NeuralNet`, `Layer`, `Tensor`, `Epoch`
- **Data Infrastructure:** `VectorDatabase`, `GraphDatabase`, `DataPipeline`, `ETL`
- **AI Agents & LLMs:** `Agent`, `Prompt`, `Completion`, `Token`, `RAG`
- **Cloud & DevOps:** `Container`, `Serverless`, `Cluster`, `Deploy`
- **UI & Navigation:** `Settings`, `User`, `Dashboard`, `Search`, `Menu`

*Check out our [Icon Gallery Website](#) for a searchable index of all available icons.*

---

## 🛠 Project Structure

Our open source monorepo uses Vite for a lightning-fast showcase gallery:

```text
Iconary/
├── icons/            # The raw SVG source files and registry.json database
├── packages/         # Framework specific wrappers (React, Vue, Svelte)
├── src/              # Our gorgeous showcase gallery built on React + Tailwind CSS v4 + Vite
└── scripts/          # Automation scripts to build components from SVGs
```

---

## 🤝 Contributing

We love contributions! The easiest way to get started is to grab an issue tagged with `good first issue` or submit a new SVG icon for a missing AI/Data concept.

### How to contribute an icon:
1. Check the [Issues](https://github.com/pradhan-not-found/Iconary/issues) for open icon requests.
2. Fork the repository.
3. Draw the icon using our style guide (24x24 viewBox, 1.5px stroke, no fills unless intentional).
4. Add the raw `.svg` file to the `icons/` directory.
5. Run `npm run build:icons` to generate the components.
6. Submit a Pull Request!

For more detailed instructions, please read our [Contributing Guide](CONTRIBUTING.md).

---

## 📄 License

Iconary is proudly open source under the [MIT License](LICENSE). Feel free to use it in your commercial products, side projects, and enterprise tooling without any attribution required (though we always appreciate a shoutout!).

---

<div align="center">
  <p><i>Iconary — The visual language for the AI era.</i></p>
</div>
