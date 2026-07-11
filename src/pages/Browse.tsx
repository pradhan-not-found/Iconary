import React, { useState, useMemo } from 'react';
import { HugeiconsIcon } from "@hugeicons/react";
import * as AllIcons from "@hugeicons/core-free-icons";
import { toast } from 'sonner';
import { IconModal, type IconDef } from '../components/IconModal';

export function Browse() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<IconDef | null>(null);
  const [iconStyle, setIconStyle] = useState<'stroke' | 'solid' | 'duotone'>('stroke');



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
                <button onClick={() => setIconStyle('stroke')} className="w-full text-left px-4 py-2 text-[0.9rem] hover:bg-[#222] flex items-center justify-between transition-colors" style={{ color: iconStyle === 'stroke' ? '#e5e5e5' : '#888' }}>
                  Outline {iconStyle === 'stroke' && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                </button>
                <button onClick={() => setIconStyle('solid')} className="w-full text-left px-4 py-2 text-[0.9rem] hover:bg-[#222] flex items-center justify-between transition-colors" style={{ color: iconStyle === 'solid' ? '#e5e5e5' : '#888' }}>
                  Filled {iconStyle === 'solid' && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                </button>
                <button onClick={() => setIconStyle('duotone')} className="w-full text-left px-4 py-2 text-[0.9rem] hover:bg-[#222] flex items-center justify-between transition-colors" style={{ color: iconStyle === 'duotone' ? '#e5e5e5' : '#888' }}>
                  Duotone {iconStyle === 'duotone' && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                </button>
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
              <HugeiconsIcon icon={item.icon} variant={iconStyle} size={36} className="text-[#a3a3a3] group-hover:text-white group-hover:-translate-y-1 transition-all duration-300" />
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

      <IconModal icon={selectedIcon} initialVariant={iconStyle} onClose={() => setSelectedIcon(null)} />
    </div>
  );
}
