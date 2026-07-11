# <img src="https://api.iconify.design/lucide/heart-handshake.svg?color=white" width="24" style="vertical-align: text-bottom;" /> Contributing to Iconary

First off, thank you for considering contributing to Iconary! It's people like you that make Iconary a world-class tool for the AI and ML community.

Iconary welcomes contributors of all skill levels. We have issues ranging from `easy` (fixing typos) to `hard` (building WebGL renderers).

## <img src="https://api.iconify.design/lucide/sprout.svg?color=white" width="20" style="vertical-align: text-bottom;" /> First-Time Contributor Flowchart

If you are new to open-source or Git, follow this step-by-step process:

<br />

1. **<kbd><img src="https://api.iconify.design/lucide/git-fork.svg?color=white" width="16" style="vertical-align: middle;" /></kbd> Fork it**  
Click "Fork" at the top right of the repository to copy it to your account.

↓

2. **<kbd><img src="https://api.iconify.design/lucide/download-cloud.svg?color=white" width="16" style="vertical-align: middle;" /></kbd> Clone & Install**  
Clone your forked repository locally (`git clone https://github.com/YOUR_NAME/Iconary.git`) and run `npm install`.

↓

3. **<kbd><img src="https://api.iconify.design/lucide/git-branch.svg?color=white" width="16" style="vertical-align: middle;" /></kbd> Create a Branch**  
Create a new branch for your work (`git checkout -b feature/my-new-icon`).

↓

4. **<kbd><img src="https://api.iconify.design/lucide/code.svg?color=white" width="16" style="vertical-align: middle;" /></kbd> Make Changes**  
Write code, design an icon, or fix a typo! Test locally by running `npm run dev`.

↓

5. **<kbd><img src="https://api.iconify.design/lucide/upload-cloud.svg?color=white" width="16" style="vertical-align: middle;" /></kbd> Commit & Push**  
Save your changes (`git commit -m "add my new icon"`) and push to your fork (`git push origin feature/my-new-icon`).

> **Note on Authorship:** To ensure you show up in the GitHub Contributors list, make sure your local Git email matches the email on your GitHub account! You can set it by running: `git config --global user.email "your_email@example.com"`

↓

6. **<kbd><img src="https://api.iconify.design/lucide/git-pull-request.svg?color=white" width="16" style="vertical-align: middle;" /></kbd> Open a Pull Request**  
Go to the original repository and click "New Pull Request".

<br />

## <img src="https://api.iconify.design/lucide/layers.svg?color=white" width="20" style="vertical-align: text-bottom;" /> Tech Stack

Iconary's website and core tooling are built with:
- **React 18**
- **Vite**
- **Tailwind CSS** (for styling the sleek dark mode UI)
- **TypeScript**

## <img src="https://api.iconify.design/lucide/monitor.svg?color=white" width="20" style="vertical-align: text-bottom;" /> Local Development Setup

To run the Iconary website locally and test your changes:

```bash
# 1. Clone your fork
git clone https://github.com/YOUR_USERNAME/Iconary.git
cd Iconary

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app will be running at `http://localhost:5173`. Any changes you make to the UI in `src/` will automatically hot-reload!

## <img src="https://api.iconify.design/lucide/paint-bucket.svg?color=white" width="20" style="vertical-align: text-bottom;" /> How to Contribute

There are many ways you can contribute to Iconary:

### 1. Draw a New Icon (Designers & Devs)
- **Format:** All icons must be highly optimized SVGs.
- **Style Guide:**
  - `viewBox` must be `0 0 24 24`.
  - Use `currentColor` for strokes or fills.
  - Default `stroke-width` should be `2`.
  - `stroke-linecap="round"` and `stroke-linejoin="round"`.
- **Submission:** Place your new SVG in the `icons/` folder and add an entry in the JSON registry.
- *Tip: If you're designing a duotone variant, ensure the secondary paths use `opacity="0.4"` or a secondary CSS class.*

### 2. Grab an Open Issue (Developers)
- We have a massive backlog of highly impactful issues. Check the [Issues tab](https://github.com/pradhan-not-found/Iconary/issues).
- Look for tags like `easy`, `medium`, `hard`, `good first issue`, or `hacktoberfest`.
- When you find one you want to work on, drop a comment saying *"I'd like to work on this!"* so we can assign it to you.
- **Areas of need:** UI polish in `src/components/`, accessibility improvements, performance optimizations, and building new CLI tools.

### 3. Improve the Website UI
- The website lives inside the `src/` directory.
- We pride ourselves on a professional, sleek, dark-themed aesthetic. If you're adding new UI components, please ensure they match the existing design language (glassmorphism, subtle borders, accessible contrast).
- We use Tailwind CSS for all styling.

### 4. Write Concept Explainers
- Every icon in Iconary has a 1-2 sentence explainer for the AI concept it represents (e.g., "RAG", "Embeddings").
- If you spot an explanation that could be clearer, submit a PR to improve it!

## <img src="https://api.iconify.design/lucide/git-pull-request.svg?color=white" width="20" style="vertical-align: text-bottom;" /> Pull Request Process

1. Fork the repo and create your branch from `main`.
2. Name your branch something descriptive (e.g., `feat/add-neural-net-icon`, `fix/modal-accessibility`).
3. Make your changes and test them locally (`npm run dev`).
4. Ensure your code is formatted (we use Prettier/ESLint).
5. Open a Pull Request. Provide a clear description and attach screenshots or screen recordings if you changed the UI.
6. A maintainer will review your PR, suggest changes if needed, and merge it!

## <img src="https://api.iconify.design/lucide/crown.svg?color=white" width="20" style="vertical-align: text-bottom;" /> Official Maintainer

Iconary is proudly maintained and curated by:
- **Name:** Souradeep Pradhan
- **GitHub:** [@pradhan-not-found](https://github.com/pradhan-not-found)
- **Website:** [souradeep.me](https://souradeep.me)

If you get stuck or have questions about the architecture, feel free to open a Discussion on GitHub or tag the maintainer in your Pull Request. We provide mentorship for our `mentorship-available` issues and love helping first-time contributors!

Thank you for building Iconary with us! <img src="https://api.iconify.design/lucide/heart.svg?color=white" width="16" style="vertical-align: middle;" />
