import React, { useState, useMemo } from 'react';
import { HugeiconsIcon } from "@hugeicons/react";
import * as AllIcons from "@hugeicons/core-free-icons";
import { toast } from 'sonner';

export function Browse() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<{id: string, name: string, icon: any} | null>(null);
  const [activeTab, setActiveTab] = useState<'Web' | 'React' | 'React native' | 'Vue' | 'Svelte' | 'Flutter' | 'Angular' | 'SVG'>('React');

  const handleCopy = (iconId: string) => {
    let code = '';
    if (activeTab === 'React') {
      code = `import { ${iconId} } from "@iconary/react";\n\n<${iconId} size={24} />`;
    } else if (activeTab === 'Vue') {
      code = `import { ${iconId} } from "iconary-vue";\n\n<${iconId} :size="24" />`;
    } else {
      code = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"\n  stroke="currentColor" strokeWidth="1.5"\n  strokeLinecap="round" strokeLinejoin="round">\n  <!-- paths... -->\n</svg>`;
    }
    navigator.clipboard.writeText(code);
    toast.success(`Copied ${activeTab} code for ${iconId}`);
  };

  // Extract exactly 1500 unique icons from the library
  const icons = useMemo(() => {
    return Object.entries(AllIcons)
      .filter(([key, value]) => key.endsWith('Icon') && typeof value === 'object')
      .slice(0, 1500)
      .map(([key, value]) => ({ 
        id: key, 
        name: key.replace('Icon', '').replace(/([A-Z])/g, ' $1').trim(), // Format name
        icon: value as any
      }));
  }, []);

  // Show a subset to prevent DOM freezing when not searching
  const displayIcons = useMemo(() => {
    let filtered = icons;
    
    // Category filtering
    if (category === 'AI / ML') {
      const aiTerms = ['ai', 'robot', 'brain', 'network', 'node', 'link', 'cloud', 'chip', 'code', 'data', 'smart', 'bot', 'tech', 'api'];
      filtered = filtered.filter(i => aiTerms.some(term => i.name.toLowerCase().includes(term) || i.id.toLowerCase().includes(term)));
    } else if (category === 'UI') {
      const uiTerms = ['menu', 'user', 'home', 'arrow', 'setting', 'check', 'close', 'search', 'bell', 'heart', 'star', 'grid', 'list', 'edit', 'delete'];
      filtered = filtered.filter(i => uiTerms.some(term => i.name.toLowerCase().includes(term) || i.id.toLowerCase().includes(term)));
    } else if (category === 'Data') {
      const dataTerms = ['database', 'server', 'chart', 'graph', 'file', 'folder', 'list', 'table', 'pie', 'line', 'bar', 'analytics', 'stat'];
      filtered = filtered.filter(i => dataTerms.some(term => i.name.toLowerCase().includes(term) || i.id.toLowerCase().includes(term)));
    }

    // Search filtering
    if (search) {
      const term = search.toLowerCase();
      filtered = filtered.filter(i => i.name.toLowerCase().includes(term) || i.id.toLowerCase().includes(term));
    }
    
    return filtered.slice(0, 300);
  }, [icons, search, category]);

  return (
    <div className="w-full min-h-[80vh]">
      <div className="w-full border-b border-[#333] bg-[#1a1a1a] sticky top-[64px] z-40">
        <div className="max-w-6xl mx-auto px-6 py-8 md:px-12">
          <span className="text-[#a3a3a3] uppercase tracking-widest text-xs font-normal font-display block mb-2">Browse Iconary</span>
          <h2 className="text-2xl md:text-4xl font-normal font-display tracking-tight text-white mt-1 mb-8">Search 1,500+ unique AI, ML & UI icons...</h2>
          
          <div className="flex flex-col md:flex-row gap-4 mb-4 relative">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-[#888] fill-none stroke-[2px]" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <input 
                type="text" 
                placeholder="Search icons (e.g., 'Agent', 'Token', 'Model')..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#111] border border-[#222] text-[#e5e5e5] placeholder-[#888] pl-11 pr-4 py-3.5 rounded-lg focus:outline-none focus:border-[#444] transition-colors text-[0.95rem]"
              />
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border rounded-lg transition-colors font-bold uppercase tracking-widest text-[0.65rem] ${showFilters ? 'border-[#666] text-white' : 'border-[#222] text-[#888] hover:text-[#bbb] hover:border-[#444]'}`}
            >
              <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] stroke-current fill-none stroke-[2px]" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
              Add Filters
            </button>
            
            {showFilters && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-[#1a1a1a] border border-[#333] rounded-lg shadow-xl py-2 z-50">
                <div className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#666] mb-1">Style</div>
                <button className="w-full text-left px-4 py-2 text-[0.9rem] text-[#e5e5e5] hover:bg-[#222] flex items-center justify-between">Outline <span className="w-1.5 h-1.5 rounded-full bg-white"></span></button>
                <button className="w-full text-left px-4 py-2 text-[0.9rem] text-[#888] hover:bg-[#222]">Filled</button>
                <button className="w-full text-left px-4 py-2 text-[0.9rem] text-[#888] hover:bg-[#222]">Duotone</button>
              </div>
            )}
          </div>
          
          <div className="flex items-center justify-between text-[#666] text-[0.85rem]">
            <span>Showing {displayIcons.length} of {icons.length} icons</span>
            <div className="flex items-center gap-5 hidden sm:flex">
              <button onClick={() => setCategory(category === 'AI / ML' ? null : 'AI / ML')} className={`transition-colors ${category === 'AI / ML' ? 'text-white' : 'hover:text-[#aaa]'}`}>AI / ML</button>
              <button onClick={() => setCategory(category === 'UI' ? null : 'UI')} className={`transition-colors ${category === 'UI' ? 'text-white' : 'hover:text-[#aaa]'}`}>UI</button>
              <button onClick={() => setCategory(category === 'Data' ? null : 'Data')} className={`transition-colors ${category === 'Data' ? 'text-white' : 'hover:text-[#aaa]'}`}>Data</button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 border-l border-t border-[#333]">
            {displayIcons.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedIcon(item)}
              title="View icon details"
              className="aspect-square flex flex-col items-center justify-center p-4 gap-3 border-r border-b border-[#333] bg-transparent hover:bg-[#1a1a1a] transition-all duration-200 cursor-pointer group relative"
            >
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] stroke-[#888] group-hover:stroke-white fill-none stroke-[2px]" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </div>
              <HugeiconsIcon icon={item.icon} size={36} className="text-[#a3a3a3] group-hover:text-white group-hover:-translate-y-1 transition-all duration-300" />
              <span 
                className="text-[0.6rem] uppercase tracking-widest text-[#606060] text-center px-2 group-hover:text-white transition-colors line-clamp-2" 
              >
                {item.name}
              </span>
            </div>
            ))}
          </div>
        </div>
      </div>

      {selectedIcon && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setSelectedIcon(null)}>
          <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#333]">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-display font-medium text-white">{selectedIcon.id}</h3>
                <span className="bg-[#333] text-[#e5e5e5] text-[0.65rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">v1.0.0</span>
              </div>
              <button onClick={() => setSelectedIcon(null)} className="text-[#888] hover:text-white transition-colors p-1 rounded-md hover:bg-[#333]">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            
            <div className="p-8 flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0 bg-[#0a0a0a] border border-[#333] rounded-xl w-48 h-48 flex items-center justify-center">
                 <HugeiconsIcon icon={selectedIcon.icon} size={80} className="text-white" />
              </div>
              
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <div className="flex items-center border border-[#333] rounded-lg bg-[#111] px-3 py-1.5 gap-2">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="#a3a3a3" strokeWidth="2" fill="none"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    <select className="bg-transparent text-[#e5e5e5] text-[0.85rem] focus:outline-none appearance-none" defaultValue="1.5">
                      <option value="1">1</option>
                      <option value="1.5">1.5</option>
                      <option value="2">2</option>
                    </select>
                    <svg viewBox="0 0 24 24" width="12" height="12" stroke="#a3a3a3" strokeWidth="2" fill="none"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                  
                  <div className="flex items-center border border-[#333] rounded-lg bg-[#111] px-3 py-1.5 gap-2">
                    <select className="bg-transparent text-[#e5e5e5] text-[0.85rem] focus:outline-none appearance-none" defaultValue="24px">
                      <option value="16px">16px</option>
                      <option value="24px">24px</option>
                      <option value="32px">32px</option>
                      <option value="48px">48px</option>
                    </select>
                    <svg viewBox="0 0 24 24" width="12" height="12" stroke="#a3a3a3" strokeWidth="2" fill="none"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>

                  <div className="flex items-center border border-[#333] rounded-lg bg-[#111] px-3 py-1.5 gap-2">
                    <div className="w-3 h-3 rounded-sm bg-white border border-[#333]"></div>
                    <select className="bg-transparent text-[#e5e5e5] text-[0.85rem] focus:outline-none appearance-none" defaultValue="currentColor">
                      <option value="currentColor">currentColor</option>
                      <option value="#ffffff">#ffffff</option>
                      <option value="#000000">#000000</option>
                    </select>
                  </div>
                  
                  <button className="p-2 border border-[#333] rounded-lg bg-[#111] text-[#a3a3a3] hover:text-white transition-colors">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none"><path d="M23 4v6h-6"></path><path d="M1 20v-6h6"></path><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                  </button>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <button onClick={() => handleCopy(selectedIcon.id)} className="flex items-center justify-center gap-2 flex-1 border border-[#333] rounded-lg bg-[#111] hover:bg-[#222] transition-colors py-2.5 text-[0.8rem] font-bold text-[#e5e5e5]">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    SVG STROKED
                  </button>
                  <button onClick={() => handleCopy(selectedIcon.id)} className="flex items-center justify-center gap-2 flex-1 border border-[#333] rounded-lg bg-[#111] hover:bg-[#222] transition-colors py-2.5 text-[0.8rem] font-bold text-[#e5e5e5]">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    SVG STROKED
                  </button>
                </div>
                
                <div className="flex items-center gap-1 border-b border-[#333] mb-5 overflow-x-auto pb-1 scrollbar-hide">
                  {(['Web', 'React', 'React native', 'Vue', 'Svelte', 'Flutter', 'Angular'] as const).map(tab => (
                    <button 
                      key={tab}
                      onClick={() => setActiveTab(tab as any)}
                      className={`px-4 py-2.5 text-[0.8rem] font-medium transition-colors border-b-2 -mb-px whitespace-nowrap ${activeTab === tab ? 'border-white text-white' : 'border-transparent text-[#888] hover:text-[#bbb]'}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                
                <div className="bg-[#0a0a0a] border border-[#333] rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-[#333] bg-[#111]">
                    <span className="text-[0.65rem] uppercase tracking-widest text-[#606060] font-bold">Code snippet</span>
                    <button onClick={() => handleCopy(selectedIcon.id)} className="flex items-center gap-1.5 text-[0.75rem] font-bold text-[#a3a3a3] hover:text-white transition-colors">
                      <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                      Copy
                    </button>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <code className="text-[0.85rem] text-[#e5e5e5] font-mono whitespace-pre">
                      {activeTab === 'React' && `import { ${selectedIcon.id} } from "@iconary/react";\n\n<${selectedIcon.id} size={24} />`}
                      {activeTab === 'React native' && `import { ${selectedIcon.id} } from "@iconary/react-native";\n\n<${selectedIcon.id} size={24} />`}
                      {activeTab === 'Vue' && `import { ${selectedIcon.id} } from "iconary-vue";\n\n<${selectedIcon.id} :size="24" />`}
                      {activeTab === 'Svelte' && `<script>\n  import { ${selectedIcon.id} } from "iconary-svelte";\n</script>\n\n<${selectedIcon.id} size={24} />`}
                      {activeTab === 'Flutter' && `Iconary(Iconary.${selectedIcon.id}, size: 24, color: Colors.white)`}
                      {activeTab === 'Angular' && `import { ${selectedIcon.id} } from "@iconary/angular";\n\n<iconary-${selectedIcon.id.toLowerCase()} size="24"></iconary-${selectedIcon.id.toLowerCase()}>`}
                      {activeTab === 'Web' && `<script src="https://cdn.iconary.ai/web.js"></script>\n\n<i class="iconary-${selectedIcon.id.toLowerCase()}"></i>`}
                      {activeTab === 'SVG' && `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"\n  stroke="currentColor" strokeWidth="1.5"\n  strokeLinecap="round" strokeLinejoin="round">\n  <!-- paths... -->\n</svg>`}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
