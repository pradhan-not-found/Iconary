import React from 'react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-8xl md:text-9xl font-display font-medium text-white mb-4 tracking-tighter">404</h1>
      <h2 className="text-2xl md:text-3xl font-display text-white mb-4">Page not found</h2>
      <p className="text-[#888] text-lg mb-10 max-w-md mx-auto">
        We couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
      </p>
      <Link 
        to="/" 
        className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-[0.8rem] rounded-lg hover:bg-[#e5e5e5] transition-colors shadow-lg"
      >
        Return Home
      </Link>
    </div>
  );
}
