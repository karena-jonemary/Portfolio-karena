import React from 'react';
import { ArrowRight, FileText, Mail, Github, Linkedin, Sparkles, Code, Cpu, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 dark:bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Main Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Internships & Graduate Developer Roles</span>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-400 to-cyan-500 dark:from-indigo-400 dark:via-indigo-300 dark:to-cyan-400">{personalInfo.name}</span>
              </h1>
              <h2 className="text-lg sm:text-xl font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-500" />
                {personalInfo.title}
              </h2>
            </div>

            {/* Summary Text */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Computer Science student driven by problem-solving and technical innovation. Passionate about building practical full-stack software applications and exploring Generative AI solutions.
            </p>

            {/* Key Skill Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/80">
                Full-Stack Web
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/80">
                Generative AI
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/80">
                Computer Vision & Voice
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/80">
                Data Science
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Karena_Jonemary_J_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800/80 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileText className="w-4 h-4 text-indigo-500" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-800/80">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Connect:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-sky-500" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Visual Card Component */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-600 opacity-30 blur-xl animate-pulse-slow" />
              
              {/* Main Visual Frame */}
              <div className="relative rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow-2xl space-y-6">
                
                {/* Code Window Header */}
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs font-mono text-gray-400">developer.profile.js</span>
                </div>

                {/* Profile Photo */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 blur-sm opacity-70" />
                    <img
                      src={personalInfo.profilePhoto}
                      alt={`Portrait of ${personalInfo.name}`}
                      className="relative h-44 w-44 rounded-full object-cover object-top border-4 border-white dark:border-gray-900 shadow-lg"
                    />
                  </div>
                </div>

                {/* Simulated Code Snippet */}
                <div className="font-mono text-xs leading-relaxed space-y-2 text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-[#0b0f19] p-4 rounded-xl border border-gray-200/50 dark:border-gray-800/50">
                  <p><span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-indigo-600 dark:text-indigo-300">developer</span> = &#123;</p>
                  <p className="pl-4"><span className="text-indigo-500">name</span>: <span className="text-emerald-600 dark:text-emerald-400">"Karena Jonemary J"</span>,</p>
                  <p className="pl-4"><span className="text-indigo-500">degree</span>: <span className="text-emerald-600 dark:text-emerald-400">"B.E. Computer Science"</span>,</p>
                  <p className="pl-4"><span className="text-indigo-500">cgpa</span>: <span className="text-amber-600 dark:text-amber-400">7.8</span>,</p>
                  <p className="pl-4"><span className="text-indigo-500">passions</span>: [<span className="text-emerald-600 dark:text-emerald-400">"Full Stack"</span>, <span className="text-emerald-600 dark:text-emerald-400">"Gen AI"</span>],</p>
                  <p className="pl-4"><span className="text-indigo-500">ieeePublication</span>: <span className="text-cyan-600 dark:text-cyan-400">true</span>,</p>
                  <p className="pl-4"><span className="text-indigo-500">azureCertified</span>: <span className="text-cyan-600 dark:text-cyan-400">true</span></p>
                  <p>&#125;;</p>
                </div>

                {/* Stat Highlights */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 text-center">
                    <span className="block text-2xl font-bold text-indigo-600 dark:text-indigo-400">7.8</span>
                    <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Engineering CGPA</span>
                  </div>
                  <div className="p-3 rounded-xl bg-cyan-50/50 dark:bg-cyan-950/30 border border-cyan-100 dark:border-cyan-900/50 text-center">
                    <span className="block text-2xl font-bold text-cyan-600 dark:text-cyan-400">IEEE</span>
                    <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Published Paper</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
