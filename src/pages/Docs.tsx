import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

export function Docs() {
  return (
    <div className="w-full">
      <section className="border-b border-[#333] px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6">
            <span className="text-sm tracking-widest text-[#e7e7e7] font-display uppercase">
              <span className="text-black bg-white tracking-tight px-2 py-1 font-medium mr-4 normal-case">Live</span>
              Documentation
            </span>
          </div>
          <h1 className="mt-6 text-4xl font-normal leading-[1.1] tracking-tight md:text-5xl lg:text-6xl font-display text-white">
            Learn how to use and build with <span className="font-brand tracking-normal text-[1.1em]">Iconary</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#a3a3a3]">
            Everything you need to get started as a user or contribute as a developer. From dropping your first icon into React to modifying the SVG source files.
          </p>
        </div>
      </section>

      <section className="border-b border-[#333] px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-sm tracking-widest text-white font-display uppercase">Integration Guide</p>
            <h2 className="mt-4 text-2xl font-normal tracking-tight md:text-4xl font-display text-white">Using Iconary</h2>
            <p className="mt-6 max-w-3xl text-[0.95rem] leading-relaxed text-[#a3a3a3]">
              Iconary is designed to be dropped directly into modern JavaScript frameworks seamlessly.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3 className="mt-12 text-lg tracking-wide text-white font-display">Installation</h3>
            <p className="mt-6 max-w-3xl text-[0.95rem] leading-relaxed text-[#a3a3a3]">
              Install the package via npm, pnpm, or yarn. The React package includes full TypeScript definitions.
            </p>
            <pre className="mt-4 overflow-x-auto border border-[#333] bg-[#111] p-4 text-xs text-[#a3a3a3] font-mono leading-relaxed rounded-md">
              npx iconary-react
            </pre>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <h3 className="mt-12 text-lg tracking-wide text-white font-display">Usage</h3>
            <p className="mt-6 max-w-3xl text-[0.95rem] leading-relaxed text-[#a3a3a3]">
              Import the icons directly from the package. By default, they render as standard inline SVGs that inherit the current text color.
            </p>
            <pre className="mt-4 overflow-x-auto border border-[#333] bg-[#111] p-4 text-xs text-[#a3a3a3] font-mono leading-relaxed rounded-md">
{`import { Agent, Model, Embedding } from 'iconary-react';

export default function App() {
  return (
    <div className="flex gap-4 text-blue-500">
      <Agent />
      <Model />
      <Embedding />
    </div>
  );
}`}
            </pre>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h3 className="mt-12 text-lg tracking-wide text-white font-display">Three Styles</h3>
            <p className="mt-6 max-w-3xl text-[0.95rem] leading-relaxed text-[#a3a3a3]">
              Every icon comes in three distinct styles: <code className="text-[#ddd]">outline</code>, <code className="text-[#ddd]">filled</code>, and <code className="text-[#ddd]">duotone</code>. 
              The React components expose these styles via props (currently under development, standard SVGs are provided for now).
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
