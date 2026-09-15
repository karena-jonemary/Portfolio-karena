import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, School } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Education
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl">
            Formal education in Computer Science and Engineering with consistent academic excellence.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/80 shadow-sm hover:shadow-xl hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Header row */}
                <div className="flex items-center justify-between gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  
                  <div className="px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>{item.score}</span>
                  </div>
                </div>

                {/* Title & Institution */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 mt-2 text-sm text-indigo-600 dark:text-indigo-400 font-semibold">
                    <span className="flex items-center gap-1">
                      <School className="w-4 h-4" />
                      <span>{item.institution}</span>
                    </span>
                    <span className="text-gray-300 dark:text-gray-700">•</span>
                    <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400 font-normal">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Details */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.details}
                </p>

              </div>

              {/* Footer Year Tag */}
              <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between text-xs font-semibold text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-indigo-500" />
                  <span>Duration: {item.period}</span>
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
