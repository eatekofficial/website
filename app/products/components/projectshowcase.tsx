'use client'
import React, { useState, useEffect } from 'react';
import { ProjectCard } from './project-slidshow';
import { projects } from '@/lib/projects';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function ProjectShowcase() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    // Animate cards in sequence
    const timer = setTimeout(() => {
      projects.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, index]);
        }, index * 200);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen  my-20">
      {/* Project Cards Container */}
      <div className="relative px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">``
          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isVisible={visibleCards.includes(index)}
                totalCards={projects.length}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
