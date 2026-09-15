import React from 'react';
import { BookMarked, Award, ExternalLink, Sparkles, CheckCircle2, Cpu, Eye, Mic } from 'lucide-react';
import { publication } from '../data/portfolioData';

export default function Publication() {
  return (
    <section id="publication" className="py-20 relative bg-gradient-to-b from-indigo-950/20 via-gray-900/40 to-transparent border-y border-gray-200/60 dark:border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookMarked className="w-3.5 h-3.5" />
            <span>Academic Research & Publication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            IEEE Xplore Publication
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl">
            Peer-reviewed international research paper presenting innovative AI assistive technologies for accessibility.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Feature Publication Card */}
        <div className="max-w-4xl mx-auto relative rounded-3xl p-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 shadow-2xl glow-cyan">
          <div className="rounded-[22px] bg-white dark:bg-gray-900 p-8 sm:p-10 space-y-8">
            
            {/* Top Badges Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-6">
              <div className="flex items-center gap-3">
                <div className="px-4 py-1.5 rounded-xl bg-cyan-600 text-white font-extrabold text-xs tracking-wider uppercase shadow-md shadow-cyan-500/20">
                  {publication.publisher}
                </div>
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                  Paper • {publication.year}
                </span>
              </div>
              
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
                <Award className="w-4 h-4 text-indigo-500" />
                <span>Peer-Reviewed Conference Paper</span>
              </div>
            </div>

            {/* Title & Conference */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-snug">
                "{publication.title}"
              </h3>
              
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700/60 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-900 dark:text-white">Presented at: </span>
                  {publication.conference}
                </div>
              </div>
            </div>

            {/* Summary */}
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {publication.description}
            </p>

            {/* Core Tech Stack Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-800 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-sm text-gray-900 dark:text-white">Computer Vision</span>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400">Fruit & Veg Identification</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-800 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-sm text-gray-900 dark:text-white">OCR & ML</span>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400">TensorFlow Lite Engine</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-800 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400">
                  <Mic className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-sm text-gray-900 dark:text-white">Voice Guidance</span>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400">TTS Audio Feedback</span>
                </div>
              </div>
            </div>

            {/* Highlights List & CTA */}
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                  Key Publication Contributions:
                </h4>
                <div className="space-y-2">
                  {publication.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {publication.url && (
                <div className="shrink-0 pt-2 sm:pt-0">
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Show Publication</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
