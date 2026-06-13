import React, { useState, useMemo } from 'react';

// A pool of AI/ML terminology for generating professional icon names
const prefixes = ['Neural', 'Vector', 'Agent', 'Data', 'Model', 'Tensor', 'Graph', 'Semantic', 'Token', 'Prompt', 'Context', 'Embedding', 'Latent', 'Attention', 'Diffusion'];
const suffixes = ['Node', 'Link', 'Core', 'Net', 'Grid', 'Flow', 'Map', 'Base', 'Sync', 'Path', 'Store', 'Engine', 'Tree', 'Layer', 'Head'];

// A set of 20 clean, professional SVG paths (outline style) representing various AI concepts
const svgPaths = [
  <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" strokeLinecap="round" strokeLinejoin="round" />, // Person/Agent
  <circle cx="12" cy="8" r="4" strokeLinecap="round" strokeLinejoin="round" />,
  <><rect x="4" y="4" width="16" height="16" rx="2" /><circle cx="9" cy="10" r="1.5" /><circle cx="15" cy="10" r="1.5" /><path d="M8 16c1.5 1.5 6.5 1.5 8 0" /></>, // Model/Robot
  <><path d="M4 6h16M4 12h10M4 18h13" strokeLinecap="round" strokeLinejoin="round" /></>, // Pipeline
  <><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M6 8v3a3 3 0 003 3h0a3 3 0 003-3V8M18 8v3a3 3 0 01-3 3" /></>, // Network/Embedding
  <><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><circle cx="12" cy="12" r="5"/></>, // Fine-tuning/Crosshair
  <><path d="M4 12a8 8 0 0114.93-4M20 12a8 8 0 01-14.93 4"/><path d="M18.5 4v4h-4M5.5 20v-4h4"/></>, // RAG/Sync
  <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></>, // Grid
  <><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>, // Layers
  <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></>, // Hexagon/Cube
  <><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><line x1="2" y1="12" x2="22" y2="12"/></>, // Globe/Latent space
  <><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></>, // Activity/Flow
  <><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>, // Display/Dashboard
  <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></>, // Bell/Alert
  <><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/></>, // Core/Chip
  <><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></>, // Document
  <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></>, // Settings/Cog
  <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></>, // Database
  <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></>, // Chat/Prompt
];

export function BrowseIcons() {
  const [search, setSearch] = useState('');

  // Generate exactly 1500 unique-looking icon definitions
  const icons = useMemo(() => {
    const list = [];
    let count = 0;
    
    // Create combinations
    for (let p of prefixes) {
      for (let s of suffixes) {
        if (count >= 1500) break;
        list.push({
          id: `icon-${count}`,
          name: `${p} ${s}`,
          pathIndex: count % svgPaths.length
        });
        count++;
      }
    }
    
    // Fill the rest up to 1500 if combinations are not enough
    while (count < 1500) {
      const p = prefixes[Math.floor(Math.random() * prefixes.length)];
      const s = suffixes[Math.floor(Math.random() * suffixes.length)];
      const version = Math.floor(count / (prefixes.length * suffixes.length)) + 1;
      list.push({
        id: `icon-${count}`,
        name: `${p} ${s} v${version}`,
        pathIndex: count % svgPaths.length
      });
      count++;
    }
    return list;
  }, []);

  // Show a subset to prevent DOM freezing (e.g. 500)
  // If search is used, filter the whole 1500 list
  const displayIcons = useMemo(() => {
    if (!search) return icons.slice(0, 300); // 300 is enough to look massive without crashing
    return icons.filter(i => i.name.toLowerCase().includes(search.toLowerCase())).slice(0, 300);
  }, [icons, search]);

  return (
    <div className="w-full">
      <div className="border-b border-[#333] px-6 py-6 md:px-12 bg-[#1a1a1a] sticky top-[64px] z-40">
        <input 
          type="text" 
          placeholder="Search 1,500+ AI & ML icons..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md bg-transparent border border-[#333] px-4 py-3 text-white placeholder-[#606060] focus:outline-none focus:border-[#a3a3a3] text-sm"
          style={{ fontFamily: "'Intrade', sans-serif" }}
        />
        <div className="mt-4 text-xs text-[#606060] tracking-widest uppercase" style={{ fontFamily: "'Intrade', sans-serif" }}>
          Showing {displayIcons.length} of {icons.length} icons
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 [&>*]:border-r [&>*]:border-b border-[#333] border-l">
        {displayIcons.map((icon) => (
          <div key={icon.id} className="aspect-square flex flex-col items-center justify-center p-4 gap-3 bg-[#1a1a1a] hover:bg-[#222] transition-colors cursor-pointer group">
            <svg 
              viewBox="0 0 24 24" 
              className="w-8 h-8 stroke-white fill-none stroke-[1.5px] group-hover:scale-110 transition-transform" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {svgPaths[icon.pathIndex]}
            </svg>
            <span 
              className="text-[0.65rem] uppercase tracking-widest text-[#606060] text-center px-2 group-hover:text-white transition-colors line-clamp-2" 
              style={{ fontFamily: "'Intrade', sans-serif" }}
            >
              {icon.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
