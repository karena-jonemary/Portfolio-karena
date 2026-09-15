import React from 'react';
import { User, Code, Brain, Target, Users, BookOpen, Award } from 'lucide-react';
import { personalInfo, areasOfInterest } from '../data/portfolioData';

export default function About() {
  const corePillars = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building responsive, modern web applications utilizing React, Supabase, and JavaScript frameworks."
    },
    {
      icon: Brain,
      title: "Generative AI & Computer Vision",
      description: "Creating intelligent solutions integrating Vercel AI SDK, TensorFlow Lite, OCR, and OpenCV."
    },
    {
      icon: Target,
      title: "Problem Solving & Logic",
      description: "Translating real-world problems into clean, efficient, and reliable software architectures."
    },
    {
      icon: Users,
      title: "Teamwork & Adaptability",
      description: "Thriving in collaborative team environments with quick adaptability to emerging tech stacks."
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-gray-50/50 dark:bg-gray-900/40 border-y border-gray-200/60 dark:border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Passionate Developer & AI Enthusiast
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Summary */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-snug">
              Driven by curiosity, building efficient & accessible software solutions.
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {personalInfo.summary}
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Currently pursuing a B.E. in Computer Science and Engineering at M. Kumarasamy College of Engineering (2023–2027), I combine solid theoretical foundations with practical hands-on experience gained through internships in UI/UX development at MITA IT Automations and Data Science at Prodigy Infotech.
            </p>

            {/* Areas of Interest Tags */}
            <div className="pt-2">
              <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Core Areas of Interest:
              </span>
              <div className="flex flex-wrap gap-3">
                {areasOfInterest.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm text-sm font-semibold text-indigo-600 dark:text-indigo-400"
                  >
                    <BookOpen className="w-4 h-4 text-cyan-500" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Core Pillars Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {corePillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base text-gray-900 dark:text-white mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
