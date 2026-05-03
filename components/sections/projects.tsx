import Image from 'next/image';

import { PROJECTS } from '@/constants/projects';

export const Projects = () => {
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
              <div className="relative aspect-video">
                <Image
                  className="object-cover"
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
