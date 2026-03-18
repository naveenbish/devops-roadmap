"use client";

import { Roadmap as RoadmapType } from "@/types/roadmap";
import { RoadmapSection } from "./roadmap-section";
import { Compass, Sparkles, Clock, Play } from "lucide-react";

interface RoadmapViewProps {
  roadmap: RoadmapType;
}

export function RoadmapView({ roadmap }: RoadmapViewProps) {
  const totalResources = roadmap.sections.reduce(
    (acc, s) => acc + s.topics.reduce((tAcc, t) => tAcc + t.resources.length, 0),
    0
  );

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* Hero Header - warm, inviting, not generic */}
      <header className="relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-800" />

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/30 dark:bg-amber-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-200/20 dark:bg-rose-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-3xl mx-auto px-6 py-20 md:py-28">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 dark:bg-white/5 border border-amber-200/50 dark:border-amber-900/30 mb-6">
            <Compass className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="text-sm font-medium text-amber-700 dark:text-amber-300">
              Your Learning Journey
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-100 mb-4">
            {roadmap.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-xl leading-relaxed">
            {roadmap.description}
          </p>

          {/* Stats */}
          {roadmap.sections.length > 0 && (
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-stone-200/50 dark:border-stone-800">
              <div>
                <p className="text-3xl font-bold text-stone-900 dark:text-stone-100">
                  {roadmap.sections.length}
                </p>
                <p className="text-sm text-stone-500 dark:text-stone-500">
                  Phases
                </p>
              </div>
              <div className="w-px h-10 bg-stone-200 dark:bg-stone-800" />
              <div>
                <p className="text-3xl font-bold text-stone-900 dark:text-stone-100">
                  {totalResources}
                </p>
                <p className="text-sm text-stone-500 dark:text-stone-500">
                  Videos
                </p>
              </div>
              <div className="w-px h-10 bg-stone-200 dark:bg-stone-800" />
              <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">~9 months</span>
              </div>
            </div>
          )}

          {/* Beginner Note */}
          <div className="mt-8 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
            <p className="text-sm text-green-800 dark:text-green-200">
              <strong>Starting from zero?</strong> Begin with Phase 1. No prior experience needed. Phases 1-6 are beginner-friendly. Phases 7-9 are intermediate — tackle those after you've built some confidence.
            </p>
          </div>
        </div>
      </header>

      {/* Roadmap Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        {roadmap.sections.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-900/20 mb-6">
              <Sparkles className="w-8 h-8 text-amber-500 dark:text-amber-400" />
            </div>
            <h3 className="font-display text-xl font-semibold text-stone-900 dark:text-stone-100 mb-3">
              Ready to build your path
            </h3>
            <p className="text-stone-500 dark:text-stone-400 max-w-sm mx-auto">
              Add your first section and we'll fill it with the best learning resources.
            </p>
          </div>
        ) : (
          <div className="space-y-20">
            {roadmap.sections.map((section, index) => (
              <RoadmapSection
                key={section.id}
                section={section}
                sectionNumber={index + 1}
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 dark:border-stone-800 py-8">
        <div className="max-w-3xl mx-auto px-6 text-center text-sm text-stone-500 dark:text-stone-500">
          Built with intention. Learn with focus.
        </div>
      </footer>
    </div>
  );
}
