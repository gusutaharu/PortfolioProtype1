'use client';

import Image from 'next/image';

import { PROJECTS } from '@/constants/projects';
import { useVideoZoom } from '@/hooks/useVideoZoom';

export const Projects = () => {
  useVideoZoom('.project-item', '.project-video');

  return (
    <section id="projects-section">
      <h2 className="section-title">Projects</h2>
      <div>
        <ul className="projects-list">
          {PROJECTS.map((project) => (
            <li key={project.name} className="project-item">
              <div className="project-text">
                <p className="project-name">{project.name}</p>
                <p className="project-description">{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech}>/ {tech} &nbsp;</span>
                  ))}
                </div>
              </div>
              <div className="video-wrapper">
                <Image
                  className="project-video object-cover"
                  fill
                  src={project.video}
                  alt={project.name}
                  unoptimized
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
