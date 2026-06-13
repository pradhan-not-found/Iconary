import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Toaster } from 'sonner';



export function Layout() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/pradhan-not-found/Iconary')
      .then(res => res.json())
      .then(data => {
        if (typeof data.stargazers_count === 'number') {
          setStars(data.stargazers_count);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className="w-full">
      <Toaster theme="dark" position="bottom-right" toastOptions={{ style: { background: '#111', border: '1px solid #333', color: '#fff' } }} />
      <header className="sticky top-0 z-50 w-full h-[80px] border-b border-[#333] bg-[#1a1a1a]">
        <nav className="max-w-6xl mx-auto w-full h-full flex items-stretch justify-between border-l border-r border-[#333]">
          <div className="flex items-stretch border-r border-[#333]">
            <Link to="/" className="flex items-center px-6 py-3.5 text-[2.75rem] leading-none mt-1 text-white font-brand tracking-normal">
              Iconary
            </Link>
          </div>
          
          <div className="hidden md:flex items-stretch border-l border-[#333]">
            <Link to="/browse" className="flex items-center px-6 py-3.5 text-[1.25rem] text-[#a3a3a3] transition-colors hover:text-white border-r border-[#333] font-display">Browse</Link>
            <Link to="/docs" className="flex items-center px-6 py-3.5 text-[1.25rem] text-[#a3a3a3] transition-colors hover:text-white border-r border-[#333] font-display">Docs</Link>
            <a href="/#contribute" className="flex items-center px-6 py-3.5 text-[1.25rem] text-[#a3a3a3] transition-colors hover:text-white border-r border-[#333] font-display">Contribute</a>
            <a href="/#faq" className="flex items-center px-6 py-3.5 text-[1.25rem] text-[#a3a3a3] transition-colors hover:text-white border-r border-[#333] font-display">FAQ</a>
            <a href="https://github.com/pradhan-not-found/Iconary" target="_blank" rel="noopener noreferrer" className="flex items-stretch px-8 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-colors text-white group shadow-[inset_1px_0_0_0_rgba(255,255,255,0.05)]">
              <div className="flex items-center gap-4">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="group-hover:scale-110 transition-transform"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <div className="flex items-center gap-2 font-display tracking-widest text-[1rem]">
                  <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="text-[#eab308]"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path></svg>
                  <span className="mt-0.5 font-bold">{stars !== null ? stars : '-'}</span>
                </div>
              </div>
            </a>
          </div>
          
          <div className="px-4 py-3 flex items-center md:hidden">
            <button className="flex h-full flex-col justify-center gap-2" aria-label="Toggle menu">
              <span className="block h-px w-5 bg-white transition-transform duration-200"></span>
              <span className="block h-px w-5 bg-white transition-all duration-200"></span>
            </button>
          </div>
        </nav>
      </header>
      
      <main className="w-full [&>*+*]:-mt-px">
        <Outlet />
      </main>

      <footer className="w-full border-t border-[#333] bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-stretch border-l border-r border-[#333]">
            <a href="https://github.com/pradhan-not-found/Iconary" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-4 text-[0.95rem] tracking-wide font-display font-medium text-[#a3a3a3] transition-colors hover:text-white border-b md:border-b-0 border-[#333] md:border-r">GitHub</a>
            <Link to="/docs" className="flex items-center px-6 py-4 text-[0.95rem] tracking-wide font-display font-medium text-[#a3a3a3] transition-colors hover:text-white border-b md:border-b-0 border-[#333] md:border-r">Docs</Link>
            <Link to="/changelog" className="flex items-center px-6 py-4 text-[0.95rem] tracking-wide font-display font-medium text-[#a3a3a3] transition-colors hover:text-white border-b md:border-b-0 border-[#333] md:border-r">Changelog</Link>
            <div className="flex-1 hidden md:block"></div>
            <a href="#" className="flex items-center px-6 py-4 text-[0.95rem] tracking-wide font-display font-medium text-[#a3a3a3] transition-colors hover:text-white border-b md:border-b-0 border-[#333] md:border-l">Privacy</a>
            <a href="#" className="flex items-center px-6 py-4 text-[0.95rem] tracking-wide font-display font-medium text-[#a3a3a3] transition-colors hover:text-white border-[#333] md:border-l">Terms</a>
          </div>
          <div className="flex flex-col gap-4 border border-[#333] px-6 py-6 md:flex-row md:items-center md:justify-between">
            <p className="text-[0.9rem] font-display font-normal text-[#555]">
              © 2026 Iconary
            </p>
            <div className="flex items-center gap-2 text-[0.9rem] font-display font-normal text-[#555]">
              Made by <img src="/contributors/sp.png" alt="Souradeep" className="w-5 h-5 rounded-full object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" /> <a href="https://souradeep.me" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">souradeep.me</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
