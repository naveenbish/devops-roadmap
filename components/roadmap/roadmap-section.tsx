"use client";

import { Section } from "@/types/roadmap";
import { TopicCard } from "./topic-card";

interface RoadmapSectionProps {
  section: Section;
  sectionNumber: number;
}

export function RoadmapSection({ section, sectionNumber }: RoadmapSectionProps) {
  // Determine difficulty level from description
  const isIntermediate = section.description?.toLowerCase().includes("intermediate");
  
  return (
    <div className="relative">
      {/* Section Header */}
      <div className="flex items-start gap-5 mb-8">
        {/* Number badge - clean, minimal */}
        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center">
          <span className="font-display text-xl font-bold text-stone-600 dark:text-stone-300">
            {String(sectionNumber).padStart(2, "0")}
          </span>
        </div>

        <div className="pt-1 flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="font-display text-2xl font-semibold text-stone-900 dark:text-stone-100">
              {section.title}
            </h2>
            {/* Difficulty Badge */}
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              isIntermediate 
                ? "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300"
                : "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
            }`}>
              {isIntermediate ? "Intermediate" : "Beginner"}
            </span>
          </div>
          {section.description && (
            <p className="text-stone-500 dark:text-stone-400 mt-2 leading-relaxed">
              {section.description}
            </p>
          )}
        </div>
      </div>

      {/* Topics */}
      <div className="ml-9 pl-6 border-l-2 border-dashed border-stone-200 dark:border-stone-800 space-y-4">
        {section.topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
}
