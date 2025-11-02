import React from 'react';
import { BookOpen, CheckCircle, Calendar, Users } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-700">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-semibold text-slate-900">{title}</h3>
    </div>
    <p className="mt-3 text-sm text-slate-600">{desc}</p>
  </div>
);

const Features = () => {
  const items = [
    {
      icon: BookOpen,
      title: 'Curated study resources',
      desc: 'Hand-picked notes, videos, and practice sets matched to your courses.',
    },
    {
      icon: Calendar,
      title: 'Smart planner',
      desc: 'Visualize deadlines, plan your week, and balance study with life.',
    },
    {
      icon: Users,
      title: 'Peer community',
      desc: 'Study with classmates, share tips, and form accountability groups.',
    },
    {
      icon: CheckCircle,
      title: 'Progress tracking',
      desc: 'Celebrate milestones and stay motivated with gentle reminders.',
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Built for students, by students</h2>
          <p className="mt-3 text-slate-600">
            Everything you need to stay organized, learn effectively, and enjoy the journey.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>

        <div id="resources" className="mt-14 rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-900">Starter pack</p>
              <p className="text-sm text-slate-600">Download free study templates to kickstart your semester.</p>
            </div>
            <div className="flex gap-3">
              <a href="#" className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-white text-sm font-medium hover:bg-slate-800">Weekly planner</a>
              <a href="#" className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white text-sm font-medium hover:bg-indigo-700">Notes template</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
