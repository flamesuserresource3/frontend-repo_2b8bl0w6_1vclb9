import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-indigo-200/50 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-pink-200/50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
              <Star className="h-3.5 w-3.5 text-yellow-500" />
              Empower your study journey
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Achieve more with your personal student companion
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Organize courses, plan assignments, and learn smarter with curated resources designed for students at every level.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-indigo-700">
                Get started
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#resources" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-slate-900 font-medium shadow-sm border border-slate-200 hover:bg-slate-50">
                Explore resources
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Course Planner', desc: 'Track classes & credits' },
                  { title: 'Study Timers', desc: 'Focus with Pomodoro' },
                  { title: 'Notes Sync', desc: 'Organize and find fast' },
                  { title: 'Campus Events', desc: 'Never miss what matters' },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate-200 p-4">
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 p-5 text-white">
                <p className="text-sm font-semibold">Tip</p>
                <p className="mt-1 text-sm opacity-90">Create a weekly plan and stick to short, focused sessions for better results.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
