import React, { useState, useEffect, useMemo } from 'react';
import { HugeiconsIcon } from "@hugeicons/react";
import * as AllIcons from "@hugeicons/core-free-icons";

const ICONS = [
  {
    name: 'Agent',
    outline: <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7"/></>,
    filled: <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7z" className="fill-white stroke-none"/></>,
    duotone: <><circle cx="12" cy="8" r="4" className="fill-white opacity-20 stroke-none"/><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7z" className="fill-white opacity-20 stroke-none"/><circle cx="12" cy="8" r="4" className="fill-none stroke-white stroke-[1.5px]"/><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" className="fill-none stroke-white stroke-[1.5px]"/></>
  },
  {
    name: 'Model',
    outline: <><rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="9" cy="10" r="1.5"/><circle cx="15" cy="10" r="1.5"/><path d="M8 16c1.5 1.5 6.5 1.5 8 0"/></>,
    filled: <rect x="4" y="4" width="16" height="16" rx="2" className="fill-white stroke-none"/>,
    duotone: <><rect x="4" y="4" width="16" height="16" rx="2" className="fill-white opacity-20 stroke-none"/><rect x="4" y="4" width="16" height="16" rx="2" className="fill-none stroke-white stroke-[1.5px]"/><circle cx="9" cy="10" r="1.5" className="fill-[#1a1a1a] stroke-white stroke-[1.5px]"/><circle cx="15" cy="10" r="1.5" className="fill-[#1a1a1a] stroke-white stroke-[1.5px]"/><path d="M8 16c1.5 1.5 6.5 1.5 8 0" className="fill-none stroke-white stroke-[1.5px]"/></>
  },
  {
    name: 'Pipeline',
    outline: <><path d="M4 6h16M4 12h10M4 18h13"/></>,
    filled: <><rect x="4" y="5" width="16" height="2" className="fill-white stroke-none"/><rect x="4" y="11" width="10" height="2" className="fill-white stroke-none"/><rect x="4" y="17" width="13" height="2" className="fill-white stroke-none"/></>,
    duotone: <><rect x="4" y="5" width="16" height="14" className="fill-white opacity-20 stroke-none"/><path d="M4 6h16M4 12h10M4 18h13" className="fill-none stroke-white stroke-[1.5px]"/></>
  },
  {
    name: 'Embedding',
    outline: <><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M6 8v3a3 3 0 003 3h0a3 3 0 003-3V8M18 8v3a3 3 0 01-3 3"/></>,
    filled: <><circle cx="6" cy="6" r="2.5" className="fill-white stroke-none"/><circle cx="18" cy="6" r="2.5" className="fill-white stroke-none"/><circle cx="12" cy="18" r="2.5" className="fill-white stroke-none"/></>,
    duotone: <><circle cx="12" cy="10" r="8" className="fill-white opacity-20 stroke-none"/><circle cx="6" cy="6" r="2" className="fill-none stroke-white stroke-[1.5px]"/><circle cx="18" cy="6" r="2" className="fill-none stroke-white stroke-[1.5px]"/><circle cx="12" cy="18" r="2" className="fill-none stroke-white stroke-[1.5px]"/><path d="M6 8v3a3 3 0 003 3h0a3 3 0 003-3V8M18 8v3a3 3 0 01-3 3" className="fill-none stroke-white stroke-[1.5px]"/></>
  },
  {
    name: 'Fine-tuning',
    outline: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><circle cx="12" cy="12" r="5"/></>,
    filled: <><circle cx="12" cy="12" r="6" className="fill-white stroke-none"/><rect x="11" y="1" width="2" height="4" className="fill-white stroke-none"/><rect x="11" y="19" width="2" height="4" className="fill-white stroke-none"/><rect x="1" y="11" width="4" height="2" className="fill-white stroke-none"/><rect x="19" y="11" width="4" height="2" className="fill-white stroke-none"/></>,
    duotone: <><circle cx="12" cy="12" r="8" className="fill-white opacity-20 stroke-none"/><circle cx="12" cy="12" r="5" className="fill-none stroke-white stroke-[1.5px]"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4" className="fill-none stroke-white stroke-[1.5px]"/></>
  },
  {
    name: 'RAG',
    outline: <><path d="M4 12a8 8 0 0114.93-4M20 12a8 8 0 01-14.93 4"/><path d="M18.5 4v4h-4M5.5 20v-4h4"/></>,
    filled: <path d="M4 12a8 8 0 0114.93-4M20 12a8 8 0 01-14.93 4" stroke="white" strokeWidth="3" fill="none"/>,
    duotone: <><circle cx="12" cy="12" r="9" className="fill-white opacity-20 stroke-none"/><path d="M4 12a8 8 0 0114.93-4M20 12a8 8 0 01-14.93 4" className="fill-none stroke-white stroke-[1.5px]"/><path d="M18.5 4v4h-4M5.5 20v-4h4" className="fill-none stroke-white stroke-[1.5px]"/></>
  }
];

export function Home() {
  const [style, setStyle] = useState<'outline' | 'filled' | 'duotone'>('outline');
  const [heroStyle, setHeroStyle] = useState<'outline' | 'filled' | 'duotone'>('outline');
  
  const hugeIconsList = useMemo(() => {
    return Object.entries(AllIcons)
      .filter(([key, value]) => key.endsWith('Icon') && typeof value === 'object')
      .map(([key, value]) => value as any);
  }, []);

  const [iconOffset, setIconOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIconOffset(prev => (prev + 6) % Math.max(1, hugeIconsList.length - 6));
    }, 1500);
    return () => clearInterval(interval);
  }, [hugeIconsList.length]);

  const displayedIcons = hugeIconsList.slice(iconOffset, iconOffset + 6);
  const LABELS = ['AGENT', 'MODEL', 'PIPELINE', 'EMBEDDING', 'FINE-TUNING', 'RAG'];

  useEffect(() => {
    const styles: ('outline' | 'filled' | 'duotone')[] = ['outline', 'filled', 'duotone'];
    const interval = setInterval(() => {
      setStyle(prev => styles[(styles.indexOf(prev) + 1) % styles.length]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="[&>*+*]:-mt-px">
      
      {/* Hero */}
      <section className="w-full border-b border-[#333]">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="bg-white text-black px-2 py-0.5 text-xs font-medium tracking-wide">Live</span>
                <span className="text-[0.95rem] text-[#a3a3a3]">The open-source icon library for modern AI applications <span className="typing-dots"></span></span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal font-display tracking-tighter leading-[1.05] text-white">
                Icons for the<br/>AI era.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#a3a3a3]">
                Open source icons for AI, ML & data tooling — every icon ships in outline, filled, and duotone, and comes with a plain-English explanation of the concept it represents. MIT licensed, framework-ready, and always growing.
              </p>
              <div className="mt-8 flex flex-wrap gap-px">
                <a href="#browse" className="bg-white text-black px-6 py-3 text-sm font-bold border border-[#333] transition-colors hover:bg-[#e5e5e5]">Browse icons</a>
                <a href="#docs" className="bg-transparent text-white px-6 py-3 text-sm font-bold border border-[#333] transition-colors hover:bg-[#222]">Read the docs</a>
              </div>
            </div>

            <div className="lg:col-span-5 w-full lg:ml-auto max-w-md lg:-mt-8">
              <div className="text-xl font-medium text-white mb-4 font-display">Usage</div>
              <div className="border border-[#333] rounded-xl bg-[#0a0a0a] p-1.5 overflow-hidden">
                <div className="flex items-center justify-between pl-4 pr-3 py-3.5 bg-[#111] rounded-lg border border-[#333]">
                  <code className="text-[0.9rem] text-[#e5e5e5] font-mono tracking-wide">npm install @iconary/react</code>
                  <button onClick={() => navigator.clipboard.writeText('npm install @iconary/react')} className="text-[#606060] hover:text-white transition-colors ml-4 p-1.5 rounded-md hover:bg-[#222]" aria-label="Copy command">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  </button>
                </div>
                <p className="px-3 pt-4 pb-3 text-[0.85rem] leading-relaxed text-[#a3a3a3]">
                  Run this command from your project root, then import icons directly into your React components.
                </p>
              </div>

              <div className="flex items-center gap-3 mt-3">
                <div className="flex-1 flex items-center justify-between px-4 py-3 border border-[#333] rounded-lg bg-[#0a0a0a]">
                  <span className="text-[0.7rem] uppercase tracking-wider text-[#a3a3a3] font-mono">INSTALLS</span>
                  <span className="text-[0.85rem] font-bold text-white font-mono">2.5K</span>
                </div>
                <div className="flex-1 flex items-center justify-between px-4 py-3 border border-[#333] rounded-lg bg-[#0a0a0a]">
                  <span className="text-[0.7rem] uppercase tracking-wider text-[#a3a3a3] font-mono">BOOKMARKED</span>
                  <span className="text-[0.85rem] font-bold text-white font-mono">343</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-6 gap-px bg-[#333] border border-[#333]">
            {LABELS.map((label, index) => (
              <div key={label} className="bg-[#1a1a1a] aspect-square flex flex-col gap-4 items-center justify-center transition-all duration-500">
                <div className="w-12 h-12 flex items-center justify-center">
                  <HugeiconsIcon icon={displayedIcons[index] || displayedIcons[0]} size={42} className="text-white transition-opacity duration-300" />
                </div>
                <span className="text-[0.7rem] uppercase tracking-[0.15em] text-[#606060] font-display font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes it different */}
      <section id="features" className="w-full border-b border-[#333]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 border-b border-[#333]">
          <span className="text-[#a3a3a3] uppercase tracking-widest text-xs font-normal font-display block mb-2">Why Iconary</span>
          <h2 className="text-2xl md:text-3xl font-normal font-display tracking-tight text-white mt-1">Not just icons</h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed max-w-2xl text-[#a3a3a3]">
            Most icon sets give you a shape and a name. Iconary gives you the shape, the name, and the meaning — built for products where the audience is still learning the vocabulary.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="px-6 md:px-12 py-16 md:border-r border-[#333]">
            <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-white fill-none stroke-[1.5px] mb-5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            <span className="text-[#606060] uppercase tracking-widest text-xs font-normal font-display block mb-2">AI / ML FOCUSED</span>
            <h3 className="text-xl font-normal font-display text-white mb-2">Built for this exact moment</h3>
            <p className="text-[0.95rem] leading-relaxed text-[#a3a3a3]">
              Agents, embeddings, fine-tuning, RAG, vector databases, tokens — concepts that general-purpose icon sets weren't designed to cover.
            </p>
          </div>
          <div className="px-6 md:px-12 py-16 border-t border-[#333] md:border-t-0">
            <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-white fill-none stroke-[1.5px] mb-5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            <span className="text-[#606060] uppercase tracking-widest text-xs font-normal font-display block mb-2">THREE STYLES</span>
            <h3 className="text-xl font-normal font-display text-white mb-2">Outline, filled, duotone</h3>
            <p className="text-[0.95rem] leading-relaxed text-[#a3a3a3]">
              Every icon is generated in all three styles from a single source file, so your design system stays consistent across contexts.
            </p>
          </div>
          <div className="px-6 md:px-12 py-16 border-t border-[#333] md:border-r border-[#333]">
            <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-white fill-none stroke-[1.5px] mb-5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
            <span className="text-[#606060] uppercase tracking-widest text-xs font-normal font-display block mb-2">CONCEPT EXPLAINERS</span>
            <h3 className="text-xl font-normal font-display text-white mb-2">A glossary, built in</h3>
            <p className="text-[0.95rem] leading-relaxed text-[#a3a3a3]">
              Each icon includes a one or two sentence explanation of the term it represents — useful for tooltips, onboarding, and docs.
            </p>
          </div>
          <div className="px-6 md:px-12 py-16 border-t border-[#333]">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-lg backdrop-blur-md shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img src="/logo/react.png" alt="React" className="w-5 h-5 object-contain drop-shadow-md" />
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-lg backdrop-blur-md shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img src="/logo/vue.png" alt="Vue" className="w-5 h-5 object-contain drop-shadow-md" />
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-lg backdrop-blur-md shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img src="/logo/Svelte.png" alt="Svelte" className="w-5 h-5 object-contain drop-shadow-md" />
              </div>
            </div>
            <span className="text-[#606060] uppercase tracking-widest text-xs font-normal font-display block mb-2">FRAMEWORK READY</span>
            <h3 className="text-xl font-normal font-display text-white mb-2">Drop into your stack</h3>
            <p className="text-[0.95rem] leading-relaxed text-[#a3a3a3]">
              Published as packages for React, Vue, and Svelte, with raw SVG and a Figma library available for design work.
            </p>
          </div>
        </div>
      </section>

      {/* Style demo */}
      <section className="w-full border-b border-[#333]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 border-b border-[#333]">
          <span className="text-[#a3a3a3] uppercase tracking-widest text-xs font-normal font-display block mb-2">Preview</span>
          <h2 className="text-2xl md:text-3xl font-normal font-display tracking-tight text-white mt-1">One icon, three styles</h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed max-w-2xl text-[#a3a3a3]">
            Switch between outline, filled, and duotone — the same source file generates all three automatically.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-10">
          <div className="flex items-center justify-between mb-8">
            <div className="inline-flex border border-[#333]">
              <button onClick={() => setStyle('outline')} className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest border-r border-[#333] transition-colors ${style === 'outline' ? 'bg-white text-black' : 'bg-transparent text-[#a3a3a3] hover:bg-[#222] hover:text-white'}`}>Outline</button>
              <button onClick={() => setStyle('filled')} className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest border-r border-[#333] transition-colors ${style === 'filled' ? 'bg-white text-black' : 'bg-transparent text-[#a3a3a3] hover:bg-[#222] hover:text-white'}`}>Filled</button>
              <button onClick={() => setStyle('duotone')} className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors ${style === 'duotone' ? 'bg-white text-black' : 'bg-transparent text-[#a3a3a3] hover:bg-[#222] hover:text-white'}`}>Duotone</button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-[#333] border border-[#333]">
            {ICONS.map((icon) => (
              <div key={icon.name} className="bg-[#1a1a1a] aspect-square flex flex-col items-center justify-center gap-4 transition-all duration-500">
                <svg viewBox="0 0 24 24" className="w-12 h-12 stroke-white fill-none stroke-[1.5px] transition-all duration-300" strokeLinecap="round" strokeLinejoin="round">
                  {style === 'outline' && icon.outline}
                  {style === 'filled' && icon.filled}
                  {style === 'duotone' && icon.duotone}
                </svg>
                <span className="text-[0.65rem] uppercase tracking-[0.15em] text-[#606060] font-display font-medium">{icon.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get started */}
      <section id="docs" className="w-full border-b border-[#333]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 border-b border-[#333]">
          <span className="text-[#a3a3a3] uppercase tracking-widest text-xs font-normal font-display block mb-2">Get started</span>
          <h2 className="text-2xl md:text-3xl font-normal font-display tracking-tight text-white mt-1">From install to icon, in minutes</h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y divide-[#333] md:divide-y-0 md:divide-x md:divide-[#333]">
          <div className="px-6 md:px-12 py-16">
            <span className="text-[#606060] uppercase tracking-[0.2em] text-[0.8rem] block font-display font-normal mb-3">01 — INSTALL</span>
          <h3 className="text-[1.1rem] font-normal font-display text-white mb-2">Add the package</h3>
          <p className="text-[0.9rem] leading-relaxed text-[#a3a3a3]">Pick your framework and install the matching package.</p>
          <pre className="mt-3 bg-[#111] border border-[#333] px-3 py-2 text-[0.75rem] text-[#a3a3a3] overflow-x-auto">npm install @iconary/react</pre>
        </div>
        <div className="px-6 md:px-12 py-16">
          <span className="text-[#606060] uppercase tracking-[0.2em] text-[0.8rem] block font-display font-normal mb-3">02 — IMPORT</span>
          <h3 className="text-[1.1rem] font-normal font-display text-white mb-2">Import an icon</h3>
          <p className="text-[0.9rem] leading-relaxed text-[#a3a3a3]">Every icon is a named export — searchable on the gallery.</p>
          <pre className="mt-3 bg-[#111] border border-[#333] px-3 py-2 text-[0.75rem] text-[#a3a3a3] overflow-x-auto">import &#123; Agent &#125; from "@iconary/react"</pre>
        </div>
        <div className="px-6 md:px-12 py-16">
          <span className="text-[#606060] uppercase tracking-[0.2em] text-[0.8rem] block font-display font-normal mb-3">03 — STYLE</span>
          <h3 className="text-[1.1rem] font-normal font-display text-white mb-2">Pick a style</h3>
          <p className="text-[0.9rem] leading-relaxed text-[#a3a3a3]">Pass a style prop to switch between outline, filled, and duotone.</p>
          <pre className="mt-3 bg-[#111] border border-[#333] px-3 py-2 text-[0.75rem] text-[#a3a3a3] overflow-x-auto">&lt;Agent style="duotone" size=&#123;24&#125; /&gt;</pre>
        </div>
        </div>
      </section>

      {/* Contribute */}
      <section id="contribute" className="w-full border-b border-[#333]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 border-b border-[#333] flex flex-col md:flex-row md:items-center justify-between gap-12">
          <div className="max-w-2xl">
            <span className="text-[#a3a3a3] uppercase tracking-widest text-xs font-normal font-display block mb-2">Open source</span>
            <h2 className="text-2xl md:text-3xl font-normal font-display tracking-tight text-white mt-1">Built by contributors</h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-[#a3a3a3]">
              Draw an icon, write a concept explainer, build a framework package, or translate the docs — every contribution type has its own "good first issue" label.
            </p>
          </div>
          
          <div className="w-full md:max-w-[320px]">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-white font-medium text-[1.05rem]">Contributors</h3>
              <span className="bg-[#333] text-[#e5e5e5] text-[0.7rem] font-medium px-2 py-0.5 rounded-full">22</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "/contributors/founder.jpeg",
                "https://avatars.githubusercontent.com/u/9919?v=4",
                "https://avatars.githubusercontent.com/u/810438?v=4",
                "https://avatars.githubusercontent.com/u/6820?v=4",
                "https://avatars.githubusercontent.com/u/1024025?v=4",
                "https://avatars.githubusercontent.com/u/1?v=4",
                "https://avatars.githubusercontent.com/u/2?v=4",
                "https://avatars.githubusercontent.com/u/3?v=4",
                "https://avatars.githubusercontent.com/u/4?v=4",
                "https://avatars.githubusercontent.com/u/5?v=4",
                "https://avatars.githubusercontent.com/u/6?v=4",
              ].map((src, i) => (
                <img 
                  key={i} 
                  src={src} 
                  alt={`Contributor ${i + 1}`} 
                  className="w-8 h-8 rounded-full border border-[#444] object-cover hover:scale-110 transition-transform duration-200 cursor-pointer" 
                />
              ))}
            </div>
            <a href="https://github.com/pradhan-not-found/Iconary/graphs/contributors" target="_blank" rel="noopener noreferrer" className="text-[#2f81f7] hover:underline text-[0.85rem] font-medium transition-colors">
              + 11 contributors
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 divide-y divide-[#333] md:divide-y-0 md:divide-x md:divide-[#333]">
          <div className="px-6 md:px-12 py-16">
            <span className="text-[#606060] uppercase tracking-widest text-xs font-normal font-display block mb-2">DRAW</span>
            <h3 className="text-xl font-normal font-display text-white mb-2">Submit an icon</h3>
            <p className="text-[0.95rem] leading-relaxed text-[#a3a3a3]">Follow the style guide, add your SVG and a registry entry, and open a PR. Most submissions are reviewed within days.</p>
          </div>
          <div className="px-6 md:px-12 py-16">
            <span className="text-[#606060] uppercase tracking-widest text-xs font-normal font-display block mb-2">EXPLAIN</span>
            <h3 className="text-xl font-normal font-display text-white mb-2">Write a definition</h3>
            <p className="text-[0.95rem] leading-relaxed text-[#a3a3a3]">Know AI/ML well? Help write or refine the plain-English explanations attached to each icon.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="w-full border-b border-[#333]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24">
          <div className="">
            <p className="text-xl tracking-widest text-[#ffffff] font-display">FAQ</p>
          </div>
          <div className="mt-4">
            <div className="border-t border-[#333]">
              <details className="group">
                <summary className="cursor-pointer list-none flex items-center justify-between py-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="text-lg tracking-wide font-display text-white">Is Iconary free to use?</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-[#a3a3a3] transition-transform duration-200 group-open:rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                </summary>
                <p className="pb-5 text-[0.95rem] leading-relaxed max-w-2xl text-[#a3a3a3]">Yes. Iconary is MIT licensed and free for personal and commercial projects.</p>
              </details>
            </div>
            <div className="border-t border-[#333]">
              <details className="group">
                <summary className="cursor-pointer list-none flex items-center justify-between py-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="text-lg tracking-wide font-display text-white">What if the icon I need doesn't exist yet?</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-[#a3a3a3] transition-transform duration-200 group-open:rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                </summary>
                <p className="pb-5 text-[0.95rem] leading-relaxed max-w-2xl text-[#a3a3a3]">Open an "Icon Request" issue on GitHub describing the concept — anyone in the community, including you, can pick it up.</p>
              </details>
            </div>
            <div className="border-t border-[#333]">
              <details className="group">
                <summary className="cursor-pointer list-none flex items-center justify-between py-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="text-lg tracking-wide font-display text-white">Which frameworks are supported?</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-[#a3a3a3] transition-transform duration-200 group-open:rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                </summary>
                <p className="pb-5 text-[0.95rem] leading-relaxed max-w-2xl text-[#a3a3a3]">React, Vue, and Svelte packages are available now, alongside raw SVG. A Figma plugin is on the roadmap.</p>
              </details>
            </div>
            <div className="border-t border-[#333]">
              <details className="group">
                <summary className="cursor-pointer list-none flex items-center justify-between py-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="text-lg tracking-wide font-display text-white">How do the three styles stay consistent?</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-[#a3a3a3] transition-transform duration-200 group-open:rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                </summary>
                <p className="pb-5 text-[0.95rem] leading-relaxed max-w-2xl text-[#a3a3a3]">Each icon starts as a single source file. A build script generates the outline, filled, and duotone variants automatically, following the project's style guide.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
