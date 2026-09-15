import React, { useState } from 'react';
import { Cpu, Terminal, Layout, Wrench, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: Cpu },
    { id: 'programming', label: 'Programming', icon: Terminal },
    { id: 'web', label: 'Web Development', icon: Layout },
    { id: 'aiData', label: 'AI & Data Science', icon: Cpu },
    { id: 'tools', label: 'Tools & Tech', icon: Wrench },
    { id: 'soft', label: 'Soft Skills', icon: HeartHandshake },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl">
            A comprehensive overview of programming languages, web frameworks, AI tools, and soft skills.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Programming Languages */}
          {(activeTab === 'all' || activeTab === 'programming') && (
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 shadow-sm hover:border-indigo-500/50 transition-all">
              <div className="flex items-center gap-3 mb-5 border-b border-gray-100 dark:border-gray-700/60 pb-3">
                <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">Programming</h3>
              </div>
              <div className="space-y-3">
                {skillsData.programming.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800">
                    <span className="font-medium text-sm text-gray-800 dark:text-gray-200">{item.name}</span>
                    <span className="text-xs px-2.5 py-1 rounded-full font-semibold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Web Development */}
          {(activeTab === 'all' || activeTab === 'web') && (
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 shadow-sm hover:border-indigo-500/50 transition-all">
              <div className="flex items-center gap-3 mb-5 border-b border-gray-100 dark:border-gray-700/60 pb-3">
                <div className="p-2 rounded-lg bg-cyan-50 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400">
                  <Layout className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">Web Development</h3>
              </div>
              <div className="space-y-3">
                {skillsData.webDevelopment.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800">
                    <span className="font-medium text-sm text-gray-800 dark:text-gray-200">{item.name}</span>
                    <span className="text-xs px-2.5 py-1 rounded-full font-semibold bg-cyan-100 dark:bg-cyan-900/60 text-cyan-700 dark:text-cyan-300">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI / Data Science */}
          {(activeTab === 'all' || activeTab === 'aiData') && (
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 shadow-sm hover:border-indigo-500/50 transition-all">
              <div className="flex items-center gap-3 mb-5 border-b border-gray-100 dark:border-gray-700/60 pb-3">
                <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">AI & Data Science</h3>
              </div>
              <div className="space-y-3">
                {skillsData.aiData.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800">
                    <span className="font-medium text-sm text-gray-800 dark:text-gray-200">{item.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Technologies */}
          {(activeTab === 'all' || activeTab === 'tools') && (
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 shadow-sm hover:border-indigo-500/50 transition-all">
              <div className="flex items-center gap-3 mb-5 border-b border-gray-100 dark:border-gray-700/60 pb-3">
                <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">Tools & Technologies</h3>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {skillsData.toolsTech.map((item, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 flex flex-col">
                    <span className="font-semibold text-xs text-gray-800 dark:text-gray-200">{item.name}</span>
                    <span className="text-[10px] text-gray-500 dark:text-gray-400">{item.category}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Soft Skills */}
          {(activeTab === 'all' || activeTab === 'soft') && (
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 shadow-sm hover:border-indigo-500/50 transition-all md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-5 border-b border-gray-100 dark:border-gray-700/60 pb-3">
                <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">Soft Skills</h3>
              </div>
              <div className="space-y-3">
                {skillsData.softSkills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-semibold text-sm text-gray-800 dark:text-gray-200">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
