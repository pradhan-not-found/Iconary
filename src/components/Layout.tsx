import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';



export function Layout() {
  const [stars, setStars] = useState<number | null>(null);
  const [forks, setForks] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to a section, navigating home first if needed
  const scrollToSection = (id: string) => {
    const doScroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(doScroll, 300);
    } else {
      doScroll();
    }
  };

  useEffect(() => {
    fetch('https://api.github.com/repos/pradhan-not-found/Iconary')
      .then(res => res.json())
      .then(data => {
        if (typeof data.stargazers_count === 'number') {
          setStars(data.stargazers_count);
        }
        if (typeof data.forks_count === 'number') {
          setForks(data.forks_count);
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
            <a href="https://github.com/pradhan-not-found/Iconary/issues" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-3.5 text-[1.25rem] text-[#a3a3a3] transition-colors hover:text-white border-r border-[#333] font-display">Contribute</a>
            <button onClick={() => scrollToSection('faq')} className="flex items-center px-6 py-3.5 text-[1.25rem] text-[#a3a3a3] transition-colors hover:text-white border-r border-[#333] font-display cursor-pointer bg-transparent border-t-0 border-b-0 border-l-0">FAQ</button>
            <div className="flex items-center px-6">
              <a href="https://github.com/pradhan-not-found/Iconary" target="_blank" rel="noopener noreferrer" className="flex items-stretch h-[38px] bg-[#1a1a1a] hover:bg-[#222] border border-[#333] rounded-md transition-all text-[#a3a3a3] hover:text-white shadow-sm overflow-hidden group">
                <div className="flex items-center gap-2 px-3 bg-[#2a2a2a]/40 border-r border-[#333] group-hover:bg-[#2a2a2a]/60 transition-colors">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  <span className="font-display font-medium text-sm">GitHub</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 border-r border-[#333] group-hover:bg-white/5 transition-colors">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" className="text-[#eab308]"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path></svg>
                  <span className="font-display font-medium text-sm">{stars !== null ? stars : '-'}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 group-hover:bg-white/5 transition-colors">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path></svg>
                  <span className="font-display font-medium text-sm">{forks !== null ? forks : '-'}</span>
                </div>
              </a>
            </div>
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
            <Link to="/privacy" className="flex items-center px-6 py-4 text-[0.95rem] tracking-wide font-display font-medium text-[#a3a3a3] transition-colors hover:text-white border-b md:border-b-0 border-[#333] md:border-l">Privacy</Link>
            <Link to="/terms" className="flex items-center px-6 py-4 text-[0.95rem] tracking-wide font-display font-medium text-[#a3a3a3] transition-colors hover:text-white border-[#333] md:border-l">Terms</Link>
          </div>
          <div className="flex flex-col gap-4 border border-[#333] px-6 py-6 md:flex-row md:items-center md:justify-between">
            <p className="text-[0.9rem] font-display font-normal text-[#555]">
              © 2026 Iconary
            </p>
            <div className="flex items-center gap-1.5 text-[0.9rem] font-display font-normal text-[#555]">
              Made by <a href="https://souradeep.me" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">souradeep.me</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
