import React from 'react';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="font-semibold text-lg tracking-tight">StudentHub</span>
            </div>
            <p className="mt-3 text-sm text-slate-600 max-w-sm">
              A simple space to organize your studies, connect with peers, and grow every day.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Quick links</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#features" className="hover:text-slate-900">Features</a></li>
              <li><a href="#resources" className="hover:text-slate-900">Resources</a></li>
              <li><a href="#events" className="hover:text-slate-900">Events</a></li>
              <li><a href="#community" className="hover:text-slate-900">Community</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@studenthub.app</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 012-3456</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Anywhere, Earth</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-xs text-slate-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} StudentHub. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
