import React, { useState } from 'react';
import { FolderGit2, Star, Github, Sparkles, CheckCircle2, Eye, ExternalLink, Info, X } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [selectedGithubModal, setSelectedGithubModal] = useState(null);

  const handleGithubClick = (project) => {
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedGithubModal(project);
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Projects Showcase
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl">
            Real-world software applications built across Full-Stack Web, AI, Computer Vision, and Accessibility.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {projects.map((project) => {
            const isFeatured = project.isFeatured;
            return (
              <div
                key={project.id}
                className={`rounded-2xl bg-white dark:bg-gray-800 border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 ${
                  isFeatured
                    ? 'lg:col-span-12 border-indigo-500/50 dark:border-indigo-500/60 ring-1 ring-indigo-500/20'
                    : 'lg:col-span-6 border-gray-200 dark:border-gray-700/80'
                }`}
              >
                {/* Top Banner Accent */}
                <div className={`h-2 bg-gradient-to-r ${
                  isFeatured ? 'from-indigo-600 via-cyan-500 to-indigo-500' : 'from-indigo-500 to-cyan-400'
                }`} />

                <div className="p-6 sm:p-8 space-y-6 flex-1">
                  
                  {/* Category & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      {isFeatured && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-xs font-bold shadow-sm">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span>Featured Case Study & IEEE Published</span>
                        </span>
                      )}
                      {!isFeatured && (
                        <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold">
                          Project Case Study
                        </span>
                      )}
                    </div>
                    {project.connectedToPublication && (
                      <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>IEEE Xplore Paper</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-700/60">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-2">
                      Key Highlights:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tool Badges */}
                  <div className="pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-2">
                      Technologies & Tools:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/50"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Footer Action Bar */}
                <div className="px-6 py-4 sm:px-8 bg-gray-50/80 dark:bg-gray-900/60 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                    ID: {project.id}
                  </span>
                  
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleGithubClick(project)}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl transition-all shadow-sm"
                    >
                      <Github className="w-4 h-4 text-indigo-500" />
                      <span>Hub Link</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* GitHub URL Information Modal */}
      {selectedGithubModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-2xl space-y-4">
            
            <button
              onClick={() => setSelectedGithubModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400">
              <Info className="w-6 h-6 shrink-0" />
              <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                Add GitHub Link for {selectedGithubModal.title}
              </h4>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              No repository link was specified in the resume. You can easily add your live GitHub repository link by updating <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 font-mono text-xs text-indigo-600 dark:text-indigo-300">githubUrl</code> in <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 font-mono text-xs text-indigo-600 dark:text-indigo-300">src/data/portfolioData.js</code>.
            </p>

            <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 font-mono text-xs text-gray-700 dark:text-gray-300">
              githubUrl: "https://github.com/{project => 'karena-jonemary/your-repo'}"
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedGithubModal(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors"
              >
                Got it
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
