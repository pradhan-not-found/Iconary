import React from 'react'
import { Toaster } from 'sonner'
import { IconGallery } from './components/IconGallery'
import registry from '../icons/registry.json'

export default function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-sans selection:bg-white/20">
      {/* Header */}
      <header className="flex items-stretch h-[60px] border-b border-white/5 bg-[#1a1a1a]">
        {/* Logo Area */}
        <div className="flex items-center px-6 border-r border-white/5 gap-3">
          <img src="/iconary.png" alt="Iconary Logo" className="h-8 object-contain" />
        </div>
        
        <div className="flex-1" />
        
        {/* Navigation Area */}
        <div className="flex items-stretch">
          <a href="/docs" className="flex items-center px-8 border-l border-white/5 text-[15px] text-[#a0a0a0] hover:text-white transition-colors">
            Docs
          </a>
          <a href="/changelog" className="flex items-center px-8 border-l border-white/5 text-[15px] text-[#a0a0a0] hover:text-white transition-colors">
            Changelog
          </a>
          <div className="flex items-center px-6 border-l border-white/5">
            <a href="https://github.com/pradhan-not-found/Iconary" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-3 py-1.5 bg-[#222222] hover:bg-[#333333] border border-white/10 rounded-xl transition-colors">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="#a0a0a0" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <div className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#fbbf24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                <span className="text-[#e5e5e5] text-sm font-medium">5</span>
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <div className="max-w-[1200px] mx-auto px-6 pt-32 pb-24 border-b border-white/5">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#a0a0a0] text-[15px]">
              Iconary — the icon set for the AI era .....
            </span>
          </div>

          <h1 className="text-[64px] md:text-[80px] font-medium tracking-tight text-white leading-[1.05] mb-8 max-w-[800px]">
            Open Source Icon Library
          </h1>

          <p className="text-[19px] text-[#a0a0a0] leading-relaxed max-w-[700px]">
            Beautifully crafted icons explicitly designed for AI, ML, and Data Tooling. <br className="hidden md:block" />
            Zero friction — available as raw SVGs or ready-to-use framework components.
          </p>
        </div>

        {/* What is Iconary Section */}
        <div className="pt-24 border-b border-white/5">
          <div className="max-w-[1200px] mx-auto px-6 mb-12">
            <h2 className="text-xl font-medium text-white mb-6">What is Iconary?</h2>
            <p className="text-[#a0a0a0] text-lg leading-relaxed max-w-[800px]">
              Iconary provides developers and designers with the visual primitives they need to build beautiful tooling. 
              With an ever-growing ecosystem of agents, vector databases, pipelines, and models, the AI/ML niche is currently underserved by existing icon sets.
            </p>
          </div>

          <div className="w-full border-t border-white/5 py-12">
            <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-x-12 gap-y-12">
              <div>
                <h3 className="text-white text-lg font-medium mb-3">AI & Data Niche</h3>
                <p className="text-[#a0a0a0] leading-relaxed text-sm pr-4">Icons specifically for pipelines, models, embeddings, agents, and vector databases.</p>
              </div>
              <div>
                <h3 className="text-white text-lg font-medium mb-3">Beautifully Designed</h3>
                <p className="text-[#a0a0a0] leading-relaxed text-sm pr-4">Consistent 1.5px stroke widths, 24x24 viewBox, and a premium aesthetic perfect for dark-mode data dashboards.</p>
              </div>
            </div>
          </div>
          
          <div className="w-full border-t border-white/5 py-12">
            <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-x-12 gap-y-12">
              <div>
                <h3 className="text-white text-lg font-medium mb-3">Tiny Contributions</h3>
                <p className="text-[#a0a0a0] leading-relaxed text-sm pr-4">One icon = one PR. The project never runs out of work, making it perfect for your first open-source contribution.</p>
              </div>
              <div>
                <h3 className="text-white text-lg font-medium mb-3">Developer Workflow</h3>
                <p className="text-[#a0a0a0] leading-relaxed text-sm pr-4">Includes icons for CI/CD, containers, git operations, terminals, and IDEs.</p>
              </div>
            </div>
          </div>
          
          <div className="w-full border-t border-white/5 py-12">
            <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-x-12 gap-y-12">
              <div>
                <h3 className="text-white text-lg font-medium mb-3">Web3 & Fintech</h3>
                <p className="text-[#a0a0a0] leading-relaxed text-sm pr-4">Expanding into wallets, chains, transactions, and staking representations.</p>
              </div>
              <div>
                <h3 className="text-white text-lg font-medium mb-3">Inclusive Design</h3>
                <p className="text-[#a0a0a0] leading-relaxed text-sm pr-4">Accessibility icons including sign language, screen readers, captions, and contrast modes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contribution Workflow */}
        <div className="max-w-[1200px] mx-auto px-6 py-24 border-b border-white/5">
          <div className="max-w-[800px]">
            <h2 className="text-3xl font-medium text-white mb-4">Contribution Workflow</h2>
            <p className="text-[#a0a0a0] text-lg mb-12 leading-relaxed">
              We love contributions! The easiest way to get started is to grab an issue tagged with `good first issue` or submit a new SVG icon.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center text-white font-mono shrink-0">1</div>
                <div>
                  <h4 className="text-white text-lg font-medium mb-2">Pick an Open Request</h4>
                  <p className="text-[#606060]">Find an open "icon request" issue or propose a new concept.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center text-white font-mono shrink-0">2</div>
                <div>
                  <h4 className="text-white text-lg font-medium mb-2">Draw the Icon</h4>
                  <p className="text-[#606060]">Follow the style guide: 24x24 viewBox, consistent 1.5px stroke width, monochrome by default.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center text-white font-mono shrink-0">3</div>
                <div>
                  <h4 className="text-white text-lg font-medium mb-2">Submit a PR</h4>
                  <p className="text-[#606060]">Add the SVG file and registry entry in a single PR. Automated lint checks will verify naming and size consistency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frameworks */}
        <div className="max-w-[1200px] mx-auto px-6 py-24 border-b border-white/5">
          <div className="text-xs font-bold text-[#606060] uppercase tracking-wider mb-4">Frameworks</div>
          <h2 className="text-4xl font-medium text-white mb-6 tracking-tight">Optimized Packages for Your Workflow</h2>
          <p className="text-[#a0a0a0] text-lg mb-16 leading-relaxed">
            Iconary auto-generates optimized components for modern frontend frameworks, ensuring seamless integration into your workflow. 
            No inconsistent scaling across environments — just validated SVGs that work out of the box. Choose from React, Vue, or Svelte.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l border-white/10 pl-6">
              <h3 className="text-white text-lg font-medium mb-2">React</h3>
              <p className="text-[#a0a0a0] text-sm mb-1">Typed React components</p>
              <p className="text-[#606060] text-xs">Primary integration</p>
            </div>
            <div className="border-l border-white/10 pl-6">
              <h3 className="text-white text-lg font-medium mb-2">Vue</h3>
              <p className="text-[#a0a0a0] text-sm mb-1">Native Vue 3 support</p>
              <p className="text-[#606060] text-xs">Alternative provider</p>
            </div>
            <div className="border-l border-white/10 pl-6">
              <h3 className="text-white text-lg font-medium mb-2">Svelte</h3>
              <p className="text-[#a0a0a0] text-sm mb-1">Svelte 5 snippets</p>
              <p className="text-[#606060] text-xs">Alternative provider</p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="max-w-[1200px] mx-auto px-6 py-24 border-b border-white/5">
          <h2 className="text-3xl font-medium text-white mb-12 text-center">Icon Showcase</h2>
          <IconGallery initialIcons={registry.icons} />
        </div>

        {/* FAQ */}
        <div className="max-w-[800px] mx-auto px-6 py-24">
          <h2 className="text-2xl font-medium text-white mb-6">FAQ</h2>
          <div className="border-t border-white/5">
            <details className="group border-b border-white/5 py-6" open>
              <summary className="flex cursor-pointer items-center justify-between text-white font-medium list-none outline-none [&::-webkit-details-marker]:hidden">
                What is Iconary?
                <span className="transition group-open:rotate-180 text-[#606060]">
                  <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="text-[#a0a0a0] mt-4 leading-relaxed pr-12">
                Iconary is an open-source, beautifully crafted icon library designed explicitly for the AI era. It provides developers and designers with the visual primitives needed to build tooling like data pipelines, models, embeddings, and agents into a single cohesive aesthetic.
              </div>
            </details>
            <details className="group border-b border-white/5 py-6">
              <summary className="flex cursor-pointer items-center justify-between text-white font-medium list-none outline-none [&::-webkit-details-marker]:hidden">
                Is Iconary free to use?
                <span className="transition group-open:rotate-180 text-[#606060]">
                  <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="text-[#a0a0a0] mt-4 leading-relaxed pr-12">
                Yes, Iconary is completely free and open source. You can use it in personal or commercial projects without attribution.
              </div>
            </details>
            <details className="group border-b border-white/5 py-6">
              <summary className="flex cursor-pointer items-center justify-between text-white font-medium list-none outline-none [&::-webkit-details-marker]:hidden">
                How can I contribute?
                <span className="transition group-open:rotate-180 text-[#606060]">
                  <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="text-[#a0a0a0] mt-4 leading-relaxed pr-12">
                Check our GitHub repository for issues labeled `good first issue` or submit a new SVG following our 24x24 viewBox and 1.5px stroke width style guide.
              </div>
            </details>
            <details className="group border-b border-white/5 py-6">
              <summary className="flex cursor-pointer items-center justify-between text-white font-medium list-none outline-none [&::-webkit-details-marker]:hidden">
                What frameworks are supported?
                <span className="transition group-open:rotate-180 text-[#606060]">
                  <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="text-[#a0a0a0] mt-4 leading-relaxed pr-12">
                We provide raw SVGs, alongside auto-generated, typed packages for React, Vue, and Svelte out of the box.
              </div>
            </details>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 max-w-[1200px] mx-auto px-6 w-full">
        <div className="flex border-t border-b border-white/5 text-sm text-[#a0a0a0]">
          <a href="https://github.com/pradhan-not-found/Iconary" className="px-6 py-5 border-r border-white/5 hover:text-white transition-colors">GitHub</a>
          <a href="/docs" className="px-6 py-5 border-r border-white/5 hover:text-white transition-colors">Docs</a>
          <a href="/changelog" className="px-6 py-5 border-r border-white/5 hover:text-white transition-colors">Changelog</a>
          <div className="flex-1"></div>
          <a href="/privacy" className="px-6 py-5 border-l border-white/5 hover:text-white transition-colors">Privacy</a>
          <a href="/terms" className="px-6 py-5 border-l border-white/5 hover:text-white transition-colors">Terms</a>
        </div>
        <div className="flex justify-between items-center py-8 text-xs text-[#606060]">
          <span>© 2026 Subham12r</span>
          <span>Iconary - The Icon Set for the AI Era</span>
        </div>
      </footer>

      <Toaster position="bottom-right" theme="dark" />
    </div>
  )
}
