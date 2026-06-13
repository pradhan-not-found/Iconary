import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

export function Changelog() {
  return (
    <div className="w-full">
      <section className="border-b border-[#333] px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6">
            <span className="text-sm tracking-widest text-[#e7e7e7] font-display uppercase">
              <span className="text-black bg-white tracking-tight px-2 py-1 font-medium mr-4 normal-case">v1.0.0</span>
              Changelog
            </span>
          </div>
          <h1 className="mt-6 text-4xl font-normal leading-[1.1] tracking-tight md:text-5xl lg:text-6xl font-display text-white">
            What's new in Iconary
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#a3a3a3]">
            Track the latest updates, new icon releases, and framework support additions.
          </p>
        </div>
      </section>

      <section className="border-b border-[#333] px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-48 shrink-0">
                <span className="text-sm text-[#a3a3a3] font-display uppercase tracking-widest sticky top-24">June 2026</span>
              </div>
              <div className="border-l border-[#333] pl-8 pb-16">
                <h2 className="text-2xl font-normal tracking-tight font-display text-white">Initial Release: AI & ML Core</h2>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-[#a3a3a3]">
                  The official launch of Iconary, focusing heavily on modern AI and machine learning concepts that are missing from standard icon sets.
                </p>
                <ul className="mt-6 space-y-3 text-[0.95rem] text-[#a3a3a3]">
                  <li className="flex items-start gap-3">
                    <span className="text-white mt-1">•</span>
                    Added 6 core AI concepts: Agent, Model, Pipeline, Embedding, Fine-Tuning, and RAG.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white mt-1">•</span>
                    Released official React package <code className="text-[#ddd]">iconary-react</code> on npm.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white mt-1">•</span>
                    Launched the interactive documentation and browsing site.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white mt-1">•</span>
                    Finalized the 3-style generation system (Outline, Filled, Duotone) for consistent exports.
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
