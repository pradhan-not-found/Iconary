import React, { useState, useEffect, useCallback, useRef } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { toast } from 'sonner';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface IconDef {
  id: string;
  name: string;
  icon: any;
}

type Framework = 'Web' | 'React' | 'React Native' | 'Vue' | 'Svelte' | 'Flutter' | 'Angular';

interface IconModalProps {
  icon: IconDef | null;
  initialVariant?: 'stroke' | 'solid' | 'duotone';
  onClose: () => void;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const FRAMEWORKS: Framework[] = ['Web', 'React', 'React Native', 'Vue', 'Svelte', 'Flutter', 'Angular'];

const STROKE_OPTIONS = ['1', '1.5', '2', '2.5'];
const VARIANT_OPTIONS = ['stroke', 'solid', 'duotone'];
const SIZE_OPTIONS = ['16', '20', '24', '32', '48', '64'];
const COLOR_OPTIONS = [
  { label: 'currentColor', value: 'currentColor', swatch: '#ffffff' },
  { label: '#ffffff', value: '#ffffff', swatch: '#ffffff' },
  { label: '#000000', value: '#000000', swatch: '#000000' },
  { label: '#6366f1', value: '#6366f1', swatch: '#6366f1' },
  { label: '#f59e0b', value: '#f59e0b', swatch: '#f59e0b' },
  { label: '#10b981', value: '#10b981', swatch: '#10b981' },
];

// ─── Code Generators ──────────────────────────────────────────────────────────

function getCode(framework: Framework, iconId: string, size: string, color: string, variant: string, stroke: string): string {
  const colorProp = color === 'currentColor' ? '' : ` color="${color}"`;
  const variantProp = variant === 'stroke' ? '' : ` variant="${variant}"`;
  const strokeProp = stroke === '1.5' ? '' : ` strokeWidth={${stroke}}`;
  const strokePropStr = stroke === '1.5' ? '' : ` strokeWidth="${stroke}"`;
  
  switch (framework) {
    case 'React':
      return `import { ${iconId} } from "iconary-react";\n\n<${iconId} size={${size}}${colorProp}${variantProp}${strokeProp} />`;
    case 'React Native':
      return `import { ${iconId} } from "iconary-react-native";\n\n<${iconId} size={${size}}${colorProp}${variantProp}${strokeProp} />`;
    case 'Vue':
      return `import { ${iconId} } from "iconary-vue";\n\n<${iconId} :size="${size}"${colorProp}${variantProp}${strokePropStr} />`;
    case 'Svelte':
      return `<script>\n  import { ${iconId} } from "iconary-svelte";\n</script>\n\n<${iconId} size={${size}}${colorProp}${variantProp}${strokeProp} />`;
    case 'Flutter':
      return `Iconary(\n  Iconary.${iconId},\n  size: ${size},\n  color: Colors.white,\n  variant: IconaryVariant.${variant},\n)`;
    case 'Angular':
      return `import { ${iconId} } from "@iconary/angular";\n\n<iconary-${iconId.toLowerCase()} size="${size}"${variantProp}${strokePropStr}></iconary-${iconId.toLowerCase()}>`;
    case 'Web':
      return `<script src="https://cdn.iconary.ai/web.js"></script>\n\n<i class="iconary-${iconId.toLowerCase()}"\n   data-size="${size}"\n   data-variant="${variant}">\n</i>`;
    default:
      return '';
  }
}

// ─── Syntax Highlighter ───────────────────────────────────────────────────────

function SyntaxHighlight({ code }: { code: string }) {
  const lines = code.split('\n');

  return (
    <pre
      style={{
        margin: 0,
        padding: '1.25rem 1.5rem',
        fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', monospace",
        fontSize: '0.8rem',
        lineHeight: 1.75,
        color: '#abb2bf',
        overflowX: 'auto',
        minHeight: '90px',
        whiteSpace: 'pre',
      }}
    >
      {lines.map((line, i) => (
        <HighlightedLine key={i} line={line} />
      ))}
    </pre>
  );
}

function HighlightedLine({ line }: { line: string }) {
  // Simple tokenizer for import/JSX snippets
  const tokens: { text: string; color?: string }[] = [];
  let rest = line;

  // keywords: import, from, export
  let matched = rest.match(/^(import|from|export)(\s)/);
  if (matched) {
    tokens.push({ text: matched[1], color: '#c678dd' });
    tokens.push({ text: matched[2] });
    rest = rest.slice(matched[0].length);
  }

  // strings "..."
  const stringRegex = /"([^"]*)"/g;
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  const parts: { text: string; color?: string }[] = [];
  while ((m = stringRegex.exec(rest)) !== null) {
    if (m.index > lastIndex) parts.push({ text: rest.slice(lastIndex, m.index) });
    parts.push({ text: `"${m[1]}"`, color: '#98c379' });
    lastIndex = stringRegex.lastIndex;
  }
  if (lastIndex < rest.length) parts.push({ text: rest.slice(lastIndex) });

  const allTokens = [...tokens, ...parts];

  return (
    <div>
      {allTokens.map((t, i) =>
        t.color ? (
          <span key={i} style={{ color: t.color }}>
            {t.text}
          </span>
        ) : (
          <span key={i}>{t.text}</span>
        ),
      )}
    </div>
  );
}

// ─── SelectDropdown ───────────────────────────────────────────────────────────

interface SelectDropdownProps {
  value: string;
  options: string[];
  onChange: (v: string) => void;
  prefix?: React.ReactNode;
  label: string;
}

function SelectDropdown({ value, options, onChange, prefix, label }: SelectDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const btnBase: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 10px',
    background: '#0d0d0d',
    border: '1px solid #2a2a2a',
    borderRadius: '8px',
    color: '#e0e0e0',
    fontSize: '0.8rem',
    cursor: 'pointer',
    whiteSpace: 'nowrap' as const,
  };

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        aria-label={label}
        onClick={() => setOpen((o) => !o)}
        style={btnBase}
      >
        {prefix}
        <span>{value}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            left: 0,
            zIndex: 999,
            minWidth: '100%',
            background: '#141414',
            border: '1px solid #2a2a2a',
            borderRadius: '10px',
            padding: '4px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.7)',
          }}
        >
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '7px 12px',
                background: opt === value ? '#222' : 'transparent',
                border: 'none',
                borderRadius: '7px',
                color: opt === value ? '#fff' : '#a0a0a0',
                fontSize: '0.8rem',
                cursor: 'pointer',
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Reusable Icons ───────────────────────────────────────────────────────────

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const CopyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const ResetIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const StrokeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

// ─── ActionButton ─────────────────────────────────────────────────────────────

interface ActionButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  variant: 'primary' | 'secondary';
}

function ActionButton({ onClick, icon, label, variant }: ActionButtonProps) {
  const base: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '10px 16px',
    fontSize: '0.8rem',
    fontWeight: 600,
    border: '1px solid',
    borderRadius: '9px',
    cursor: 'pointer',
    letterSpacing: '0.01em',
    transition: 'background 0.15s, color 0.15s, border-color 0.15s',
  };

  const normal: React.CSSProperties =
    variant === 'primary'
      ? { ...base, background: '#f5f5f5', borderColor: '#f5f5f5', color: '#0a0a0a' }
      : { ...base, background: '#0d0d0d', borderColor: '#2a2a2a', color: '#ccc' };

  return (
    <button
      onClick={onClick}
      style={normal}
      onMouseEnter={(e) => {
        const btn = e.currentTarget as HTMLButtonElement;
        if (variant === 'primary') { btn.style.background = '#e0e0e0'; btn.style.borderColor = '#e0e0e0'; }
        else { btn.style.background = '#1a1a1a'; btn.style.borderColor = '#383838'; btn.style.color = '#fff'; }
      }}
      onMouseLeave={(e) => {
        const btn = e.currentTarget as HTMLButtonElement;
        if (variant === 'primary') { btn.style.background = '#f5f5f5'; btn.style.borderColor = '#f5f5f5'; }
        else { btn.style.background = '#0d0d0d'; btn.style.borderColor = '#2a2a2a'; btn.style.color = '#ccc'; }
      }}
    >
      {icon}
      {label}
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function IconModal({ icon, initialVariant, onClose }: IconModalProps) {
  const [size, setSize] = useState('24');
  const [stroke, setStroke] = useState('1.5');
  const [variant, setVariant] = useState(initialVariant || 'stroke');
  const [color, setColor] = useState('currentColor');
  const [activeTab, setActiveTab] = useState<Framework>('React');
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const svgWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (icon) {
      requestAnimationFrame(() => setVisible(true));
      if (initialVariant) setVariant(initialVariant);
    }
    else setVisible(false);
  }, [icon, initialVariant]);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 220);
  }, [onClose]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleClose]);

  if (!icon) return null;

  const code = getCode(activeTab, icon.id, size, color, variant, stroke);
  const selectedColorOption = COLOR_OPTIONS.find((c) => c.value === color) ?? COLOR_OPTIONS[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      toast.success('Code copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const generateSvgString = () => {
    if (!svgWrapperRef.current) return '';
    let svgString = svgWrapperRef.current.innerHTML;
    
    // Resize
    svgString = svgString.replace(/width="[0-9]+"/, `width="${size}"`);
    svgString = svgString.replace(/height="[0-9]+"/, `height="${size}"`);
    
    // Inject exact variant styles directly into the SVG so the downloaded file matches the preview exactly
    if (variant === 'solid') {
      svgString = svgString.replace(/fill="none"/g, 'fill="currentColor"').replace(/stroke="currentColor"/g, 'stroke="none"');
    } else if (variant === 'duotone') {
      svgString = svgString.replace(/fill="none"/g, 'fill="currentColor" fill-opacity="0.2"');
    }
    
    if (!svgString.includes('xmlns="')) {
      svgString = svgString.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    return svgString.replace('</svg>', `<!-- ${icon.name} from Iconary (https://iconary.ai) --></svg>`);
  };

  const handleDownloadSVG = () => {
    const svgString = generateSvgString();
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `${icon.id}-${variant}.svg`;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
    toast.success(`Downloaded ${icon.id}-${variant}.svg`);
  };

  const handleCopySVG = () => {
    const svgString = generateSvgString();
    navigator.clipboard.writeText(svgString).then(() => toast.success('SVG copied to clipboard!'));
  };

  return (
    <div
      onClick={handleClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
        background: visible ? 'rgba(0,0,0,0.65)' : 'rgba(0,0,0,0)',
        backdropFilter: visible ? 'blur(8px)' : 'blur(0px)',
        transition: 'background 0.22s ease, backdrop-filter 0.22s ease',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: '920px', maxHeight: '92vh', overflowY: 'auto',
          background: '#111111', border: '1px solid #242424', borderRadius: '16px',
          boxShadow: '0 32px 80px rgba(0,0,0,0.8)',
          fontFamily: "'Geist', Inter, sans-serif",
          transform: visible ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(16px)',
          opacity: visible ? 1 : 0,
          transition: 'transform 0.22s cubic-bezier(0.16,1,0.3,1), opacity 0.22s ease',
          color: '#ececec',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '18px 24px', borderBottom: '1px solid #1f1f1f',
            position: 'sticky', top: 0, background: '#111111', zIndex: 10, borderRadius: '16px 16px 0 0',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600, letterSpacing: '-0.01em', margin: 0 }}>
              {icon.id}
            </h2>
            <span style={{ background: '#1e1e1e', border: '1px solid #2a2a2a', color: '#777', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', padding: '2px 8px', borderRadius: '999px', textTransform: 'uppercase' as const }}>
              v1.0.0
            </span>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close modal"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '34px', height: '34px', background: 'transparent', border: '1px solid #242424', borderRadius: '8px', color: '#888', cursor: 'pointer' }}
          >
            <CloseIcon />
          </button>
        </div>

        {/* Global Styles for Variant Preview */}
        <style>{`
          .icon-variant-solid svg path, .icon-variant-solid svg rect, .icon-variant-solid svg circle, .icon-variant-solid svg polygon {
            fill: currentColor !important;
            stroke: none !important;
          }
          .icon-variant-duotone svg path, .icon-variant-duotone svg rect, .icon-variant-duotone svg circle, .icon-variant-duotone svg polygon {
            fill: currentColor !important;
            fill-opacity: 0.2 !important;
            stroke: currentColor !important;
          }
        `}</style>

        {/* Body */}
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {/* Left preview */}
          <div style={{ flexShrink: 0, width: '240px', padding: '28px', borderRight: '1px solid #1f1f1f', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <div
              className={`icon-variant-${variant}`}
              style={{
                width: '100%', aspectRatio: '1',
                background: '#0a0a0a', border: '1px solid #1f1f1f', borderRadius: '14px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <div ref={svgWrapperRef} style={{ display: 'flex' }}>
                <HugeiconsIcon
                  icon={icon.icon}
                  size={80}
                  strokeWidth={Number(stroke)}
                  style={{ color: color === 'currentColor' ? '#fff' : color, position: 'relative', zIndex: 1 }}
                />
              </div>
            </div>
            <p style={{ margin: 0, fontSize: '0.7rem', color: '#444', letterSpacing: '0.06em', textAlign: 'center', textTransform: 'uppercase' as const, fontWeight: 600 }}>
              {icon.name}
            </p>
          </div>

          {/* Right controls */}
          <div style={{ flex: 1, padding: '28px 28px 0', display: 'flex', flexDirection: 'column', gap: '22px', minWidth: 0 }}>

            {/* Controls row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' as const }}>
              <SelectDropdown label="Variant" value={variant} options={VARIANT_OPTIONS} onChange={(v) => setVariant(v as 'stroke'|'solid'|'duotone')} prefix={<StrokeIcon />} />
              <SelectDropdown label="Stroke" value={stroke} options={STROKE_OPTIONS} onChange={setStroke} prefix={<StrokeIcon />} />
              <SelectDropdown label="Size" value={`${size}px`} options={SIZE_OPTIONS.map((s) => `${s}px`)} onChange={(v) => setSize(v.replace('px', ''))} />
              <SelectDropdown
                label="Icon color"
                value={selectedColorOption.label}
                options={COLOR_OPTIONS.map((c) => c.label)}
                onChange={(label) => { const found = COLOR_OPTIONS.find((c) => c.label === label); if (found) setColor(found.value); }}
                prefix={<span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '3px', background: selectedColorOption.swatch, border: '1px solid #3a3a3a', flexShrink: 0 }} />}
              />
              <button
                onClick={() => { setSize('24'); setStroke('1.5'); setColor('currentColor'); setVariant(initialVariant || 'stroke'); }}
                aria-label="Reset defaults"
                title="Reset to defaults"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px 10px', background: '#0d0d0d', border: '1px solid #2a2a2a', borderRadius: '8px', color: '#666', cursor: 'pointer' }}
              >
                <ResetIcon />
              </button>
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <ActionButton onClick={handleDownloadSVG} icon={<DownloadIcon />} label="Download SVG" variant="primary" />
              <ActionButton onClick={handleCopySVG} icon={<CopyIcon />} label="Copy SVG" variant="secondary" />
            </div>

            {/* Framework tabs */}
            <div style={{ display: 'flex', alignItems: 'flex-end', borderBottom: '1px solid #1f1f1f', overflowX: 'auto', scrollbarWidth: 'none' as const }}>
              {FRAMEWORKS.map((tab) => {
                const active = tab === activeTab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      padding: '9px 14px', fontSize: '0.78rem', fontWeight: active ? 600 : 400,
                      color: active ? '#fff' : '#555', background: 'transparent', border: 'none',
                      borderBottom: active ? '2px solid #fff' : '2px solid transparent',
                      cursor: 'pointer', whiteSpace: 'nowrap' as const, marginBottom: '-1px',
                      transition: 'color 0.15s',
                    }}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Code snippet */}
            <div style={{ border: '1px solid #1f1f1f', borderRadius: '10px', overflow: 'hidden', background: '#0a0a0a', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 16px', borderBottom: '1px solid #1a1a1a', background: '#0f0f0f' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#444' }}>Code Snippet</span>
                  <span style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#333', background: '#161616', border: '1px solid #222', padding: '2px 7px', borderRadius: '999px' }}>{activeTab}</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', fontWeight: 600, color: copied ? '#4ade80' : '#666', background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px 8px', borderRadius: '6px' }}
                >
                  {copied ? (
                    <>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Copied!
                    </>
                  ) : (
                    <><CopyIcon />Copy</>
                  )}
                </button>
              </div>
              <SyntaxHighlight code={code} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
