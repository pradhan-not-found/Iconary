import { useState } from "react"
import { toast } from "sonner"
import { HugeiconsIcon } from "@hugeicons/react"
import { Copy01Icon, Search01Icon } from "@hugeicons/core-free-icons"

interface IconRegistryEntry {
  name: string;
  category: string;
  tags: string[];
  author: string;
}

export function IconGallery({ initialIcons }: { initialIcons: IconRegistryEntry[] }) {
  const [search, setSearch] = useState("")

  const filteredIcons = initialIcons.filter((icon) => 
    icon.name.toLowerCase().includes(search.toLowerCase()) ||
    icon.tags.some(t => t.toLowerCase().includes(search.toLowerCase())) ||
    icon.category.toLowerCase().includes(search.toLowerCase())
  )

  const copyToClipboard = (iconName: string) => {
    const reactSnippet = `<HugeiconsIcon icon={${iconName}} />`
    navigator.clipboard.writeText(reactSnippet)
    toast.success(`Copied React snippet for ${iconName}`)
  }

  return (
    <div className="w-full flex flex-col gap-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
      <div className="relative w-full max-w-xl mx-auto">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <HugeiconsIcon icon={Search01Icon} className="text-[#606060]" />
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search icons (e.g., 'pipeline', 'model', 'agent')"
          className="w-full h-14 pl-12 pr-4 bg-[#111111] border border-white/10 rounded-xl shadow-sm text-white placeholder:text-[#606060] focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredIcons.map((icon) => (
          <div 
            key={icon.name}
            onClick={() => copyToClipboard(icon.name)}
            className="group relative flex flex-col items-center justify-center p-6 bg-[#111111] border border-white/5 rounded-xl cursor-pointer hover:bg-white/5 hover:border-white/10 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
          >
            <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-[#606060] mb-4 group-hover:scale-110 group-hover:text-white transition-all">
              <span className="text-[10px] font-mono opacity-50">SVG</span>
            </div>
            <span className="text-xs font-medium text-[#a0a0a0] text-center truncate w-full group-hover:text-white transition-colors">
              {icon.name}
            </span>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <HugeiconsIcon icon={Copy01Icon} size={16} className="text-[#606060]" />
            </div>
          </div>
        ))}
      </div>

      {filteredIcons.length === 0 && (
        <div className="py-20 text-center flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-[#111111] flex items-center justify-center text-[#606060]">
            <HugeiconsIcon icon={Search01Icon} size={32} />
          </div>
          <p className="text-[#a0a0a0]">No icons found for "{search}"</p>
        </div>
      )}
    </div>
  )
}
