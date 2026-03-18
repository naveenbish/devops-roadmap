"use client";

import { Topic } from "@/types/roadmap";
import { ResourceLink } from "./resource-link";
import { ChevronDown, ChevronRight, Play } from "lucide-react";
import { useState } from "react";

interface TopicCardProps {
  topic: Topic;
}

export function TopicCard({ topic }: TopicCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group">
      {/* Topic Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center gap-4 py-4 text-left group-hover:bg-stone-50 dark:group-hover:bg-stone-800/50 -mx-4 px-4 rounded-xl transition-colors cursor-pointer"
      >
        {/* Expand Icon */}
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center group-hover:bg-stone-200 dark:group-hover:bg-stone-700 transition-colors">
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 text-stone-500" />
          ) : (
            <ChevronRight className="w-4 h-4 text-stone-500" />
          )}
        </div>

        {/* Topic Info */}
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-stone-900 dark:text-stone-100">
            {topic.title}
          </h4>
          {topic.description && (
            <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5 line-clamp-1">
              {topic.description}
            </p>
          )}
        </div>

        {/* Resource Count */}
        {topic.resources.length > 0 && (
          <div className="flex items-center gap-1.5 text-xs font-medium text-stone-400 dark:text-stone-500">
            <Play className="w-3.5 h-3.5" />
            <span>{topic.resources.length}</span>
          </div>
        )}
      </button>

      {/* Resources List */}
      {isExpanded && topic.resources.length > 0 && (
        <div className="mt-2 ml-12 space-y-2">
          {topic.resources.map((resource) => (
            <ResourceLink key={resource.id} resource={resource} />
          ))}
        </div>
      )}
    </div>
  );
}
