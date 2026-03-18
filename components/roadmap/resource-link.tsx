"use client";

import { Resource } from "@/types/roadmap";
import { ExternalLink, Youtube } from "lucide-react";

interface ResourceLinkProps {
  resource: Resource;
}

export function ResourceLink({ resource }: ResourceLinkProps) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 p-4 rounded-xl bg-stone-50 dark:bg-stone-800/50 hover:bg-stone-100 dark:hover:bg-stone-800 border border-transparent hover:border-stone-200 dark:hover:border-stone-700 transition-all cursor-pointer"
    >
      {/* YouTube Icon */}
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center group-hover:bg-red-100 dark:group-hover:bg-red-900/30 transition-colors">
        <Youtube className="w-5 h-5 text-red-500 dark:text-red-400" />
      </div>

      {/* Resource Info */}
      <div className="flex-1 min-w-0">
        <p className="font-medium text-stone-800 dark:text-stone-200 line-clamp-1 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
          {resource.title}
        </p>
        <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">
          {resource.channel}
          {resource.duration && (
            <span className="text-stone-300 dark:text-stone-600"> • </span>
          )}
          {resource.duration}
        </p>
      </div>

      {/* External Link */}
      <ExternalLink className="w-4 h-4 text-stone-300 dark:text-stone-600 group-hover:text-stone-500 dark:group-hover:text-stone-400 group-hover:translate-x-0.5 transition-all" />
    </a>
  );
}
