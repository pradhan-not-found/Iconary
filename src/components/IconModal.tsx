import React, { useState } from 'react';

export interface IconDef {
  id: string;
  name: string;
  pathIndex: number;
}

interface IconModalProps {
  icon: IconDef | null;
  svgPath: React.ReactNode;
  onClose: () => void;
}

export function IconModal({ icon, svgPath, onClose }: IconModalProps) {
  const [size, setSize] = useState('24');
  const [stroke, setStroke] = useState('1.5');
  const [color, setColor] = useState('currentColor');
  const [activeTab, setActiveTab] = useState('React');

  if (!icon) return null;

  const iconComponentName = icon.name
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('')
    .replace(/[^a-zA-Z0-9]/g, '') + 'Icon';

  const handleCopySvg = () => {
    // Basic copy to clipboard functionality for demonstration
    navigator.clipboard.writeText(`<svg viewBox="0 0 24 24" width="${size}" height="${size}" stroke="${color}" stroke-width="${stroke}" fill="none" stroke-linecap="round" stroke-linejoin="round">...</svg>`);
  };

  const handleCopyCode = () => {
    const code = `import { ${iconComponentName} } from "@iconary/react";\n\n<${iconComponentName} size={${size}} />`;
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="w-full max-w-4xl bg-[#141414] border border-[#2a2a2a] rounded-2xl flex flex-col shadow-2xl overflow-hidden text-[#ececec]"
        onClick={(e) => e.stopPropagation()}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#2a2a2a]">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold tracking-tight">{iconComponentName}</h2>
            <span className="bg-[#2a2a2a] text-[#a1a1a1] text-xs font-semibold px-2 py-0.5 rounded-full">V1.0.0</span>
          </div>
          <button onClick={onClose} className="text-[#a1a1a1] hover:text-white transition-colors">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col md:flex-row gap-8">
          {/* Left Preview */}
          <div className="flex-shrink-0 w-full md:w-[340px] aspect-square bg-[#0a0a0a] rounded-xl border border-[#2a2a2a] flex items-center justify-center">
            <svg 
              viewBox="0 0 24 24" 
              className="w-32 h-32" 
              stroke={color} 
              fill="none" 
              strokeWidth={stroke} 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {svgPath}
            </svg>
          </div>

          {/* Right Controls */}
          <div className="flex flex-col flex-1 gap-8">
            
            {/* Top Controls */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2 text-sm cursor-pointer hover:border-[#444] transition-colors">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
                <span>{stroke}</span>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
              
              <div className="flex items-center gap-2 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2 text-sm cursor-pointer hover:border-[#444] transition-colors">
                <span>{size}px</span>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>

              <div className="flex items-center gap-2 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2 text-sm cursor-pointer hover:border-[#444] transition-colors">
                <div className="w-3.5 h-3.5 bg-white rounded-[3px]"></div>
                <span>{color}</span>
              </div>

              <button 
                className="p-2.5 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-[#a1a1a1] hover:text-white hover:border-[#444] transition-colors"
                onClick={() => { setSize('24'); setStroke('1.5'); setColor('currentColor'); }}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 bg-[#0a0a0a] hover:bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg py-2.5 text-sm font-semibold transition-colors" onClick={handleCopySvg}>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                Download SVG
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-[#0a0a0a] hover:bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg py-2.5 text-sm font-semibold transition-colors" onClick={handleCopySvg}>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                Copy SVG
              </button>
            </div>

            {/* Framework Tabs */}
            <div className="flex items-center gap-6 border-b border-[#2a2a2a] overflow-x-auto scrollbar-hide text-sm text-[#a1a1a1]">
              {['Web', 'React', 'React native', 'Vue', 'Svelte', 'Flutter', 'Angular'].map(tab => (
                <button
                  key={tab}
                  className={\`pb-3 whitespace-nowrap \${activeTab === tab ? 'text-white font-medium border-b-2 border-white' : 'hover:text-[#d1d1d1]'}\`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Code Snippet */}
            <div className="border border-[#2a2a2a] rounded-xl flex flex-col bg-[#0a0a0a] overflow-hidden -mt-2">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#2a2a2a] bg-[#111]">
                <span className="text-[10px] text-[#888] font-bold tracking-widest uppercase">Code Snippet</span>
                <button 
                  className="flex items-center gap-1.5 text-xs text-[#888] hover:text-white transition-colors"
                  onClick={handleCopyCode}
                >
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" transform="scale(0.5) translate(-4.5, -4.5)"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" transform="scale(0.5) translate(-4.5, -4.5)"/></svg>
                  Copy
                </button>
              </div>
              <div className="p-5 text-sm font-mono text-[#d1d1d1] overflow-x-auto">
                <div><span className="text-[#c678dd]">import</span> {'{'} {iconComponentName} {'}'} <span className="text-[#c678dd]">from</span> <span className="text-[#98c379]">"@iconary/react"</span>;</div>
                <br />
                <div><span className="text-[#61afef]">&lt;{iconComponentName}</span> <span className="text-[#d19a66]">size</span>={'{'}24{'}'} <span className="text-[#61afef]">/&gt;</span></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
