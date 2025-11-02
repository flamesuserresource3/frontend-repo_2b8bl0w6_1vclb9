import React from 'react';
import { GraduationCap, BookOpen, Calendar, Users } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="font-semibold text-lg tracking-tight">StudentHub</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition">Features</a>
            <a href="#resources" className="hover:text-slate-900 transition flex items-center gap-1"><BookOpen className="h-4 w-4" />Resources</a>
            <a href="#events" className="hover:text-slate-900 transition flex items-center gap-1"><Calendar className="h-4 w-4" />Events</a>
            <a href="#community" className="hover:text-slate-900 transition flex items-center gap-1"><Users className="h-4 w-4" />Community</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">Sign in</button>
            <button className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 shadow-sm">Join free</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
