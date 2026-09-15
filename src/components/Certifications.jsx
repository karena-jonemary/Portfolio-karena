import React, { useState } from 'react';
import { ShieldCheck, Award, Calendar, CheckCircle2, Cloud, Globe, Sparkles, Eye, ExternalLink, X } from 'lucide-react';
import { professionalCertifications, generalCertifications } from '../data/portfolioData';

export default function Certifications() {
  const [activeCertificateModal, setActiveCertificateModal] = useState(null);

  return (
    <section id="certifications" className="py-20 relative bg-gray-50/50 dark:bg-gray-900/40 border-y border-gray-200/60 dark:border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials & Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Certifications
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl">
            Validated technical certifications across Microsoft Azure AI, AI Prompting, and Language Proficiency.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Dual Section Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Professional Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Professional Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {professionalCertifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/80 shadow-sm hover:shadow-md hover:border-indigo-400 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-md shadow-sky-500/20">
                      {cert.issuer.includes('Japanese') ? (
                        <Globe className="w-5 h-5" />
                      ) : (
                        <Cloud className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-gray-900 dark:text-white">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-indigo-500" />
                      <span>{cert.year}</span>
                    </span>

                    {cert.certificateUrl && (
                      <button
                        onClick={() => setActiveCertificateModal(cert)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-600 dark:text-indigo-300 text-xs font-semibold transition-colors border border-indigo-200 dark:border-indigo-800/60"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Technical Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {generalCertifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/80 shadow-sm hover:shadow-md hover:border-purple-400 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950 border border-purple-100 dark:border-purple-900/60 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-gray-900 dark:text-white">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold">
                      {cert.year}
                    </span>

                    {cert.certificateUrl && (
                      <button
                        onClick={() => setActiveCertificateModal(cert)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 hover:bg-purple-100 dark:hover:bg-purple-900/60 text-purple-600 dark:text-purple-300 text-xs font-semibold transition-colors border border-purple-200 dark:border-purple-800/60"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Certification Image Viewer Modal */}
      {activeCertificateModal && (
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
                    {activeCertificateModal.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Issued by {activeCertificateModal.issuer} ({activeCertificateModal.year})
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeCertificateModal.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  title="Open image in new tab"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <button
                  onClick={() => setActiveCertificateModal(null)}
                  className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                  title="Close viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Certificate Image Display */}
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-2 shadow-inner">
              <img
                src={activeCertificateModal.certificateUrl}
                alt={`${activeCertificateModal.title} Certificate`}
                className="w-full h-auto max-h-[65vh] object-contain rounded-xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between pt-2 text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Official Verified Credential</span>
              </span>
              <button
                onClick={() => setActiveCertificateModal(null)}
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
