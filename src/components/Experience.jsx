import React, { useState } from 'react';
import { Briefcase, Calendar, Building2, CheckCircle, Award, Eye, ExternalLink, X, ShieldCheck } from 'lucide-react';
import { internships } from '../data/portfolioData';

export default function Experience() {
  const [activeCertificate, setActiveCertificate] = useState(null);

  return (
    <section id="experience" className="py-20 relative bg-gray-50/50 dark:bg-gray-900/40 border-y border-gray-200/60 dark:border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work History & Verified Certificates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Internship Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl">
            Practical hands-on roles delivering UI/UX design, software development, and data science solutions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Bar */}
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-indigo-600 -translate-x-1/2 opacity-30" />

          <div className="space-y-12">
            {internships.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.id} className="relative flex flex-col sm:flex-row items-center group">
                  
                  {/* Timeline Dot */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-900 border-2 border-indigo-500 items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-md group-hover:scale-110 group-hover:border-cyan-400 transition-all z-10">
                    <Briefcase className="w-4 h-4" />
                  </div>

                  {/* Content Box */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] ${isEven ? 'sm:mr-auto' : 'sm:ml-auto'}`}>
                    <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/80 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all duration-200 space-y-4">
                      
                      {/* Header info */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
                          <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                          <span>{item.year}</span>
                        </span>
                        <div className="flex items-center gap-1 text-xs font-semibold text-gray-500 dark:text-gray-400">
                          <Building2 className="w-3.5 h-3.5 text-cyan-500" />
                          <span>{item.company}</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {item.role}
                        </h3>
                        {item.duration && (
                          <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                            {item.duration}
                          </p>
                        )}
                      </div>

                      {/* Bullet list */}
                      <ul className="space-y-2.5 pt-1 border-t border-gray-100 dark:border-gray-700/60">
                        {item.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Certificate Preview Card / CTA Button */}
                      {item.certificateUrl && (
                        <div className="pt-3 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Verified Certificate</span>
                          </div>

                          <button
                            onClick={() => setActiveCertificate(item)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-sm hover:shadow-md transition-all active:scale-95"
                          >
                            <Award className="w-3.5 h-3.5" />
                            <span>View Certificate</span>
                          </button>
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Certificate Viewer Modal Popup */}
      {activeCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-200 dark:border-gray-800 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                    {activeCertificate.role} Certificate
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Issued by {activeCertificate.company} ({activeCertificate.year})
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeCertificate.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  title="Open image in new tab"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <button
                  onClick={() => setActiveCertificate(null)}
                  className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                  title="Close viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Certificate Image Frame */}
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-2 shadow-inner group">
              <img
                src={activeCertificate.certificateUrl}
                alt={`${activeCertificate.company} Internship Certificate`}
                className="w-full h-auto max-h-[65vh] object-contain rounded-xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Verified Certificate of Completion • {activeCertificate.company}</span>
              </span>
              <button
                onClick={() => setActiveCertificate(null)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
