import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLinkIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

export default function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-dark-card border border-primary/20 rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 glow-border"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-60"></div>
        
        {/* Overlay buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-dark-bg/80 backdrop-blur-sm rounded-lg text-primary hover:bg-primary hover:text-dark-bg transition-all duration-300"
          >
            <ExternalLinkIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300 font-mono">
          {project.title}
        </h3>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 text-xs bg-primary/10 text-primary border border-primary/30 rounded-full font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Project Description */}
        <ul className="space-y-2 text-gray-300">
          {project.points.slice(0, 3).map((point: string, i: number) => (
            <li key={i} className="flex items-start text-sm">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              {point}
            </li>
          ))}
        </ul>

        {/* View Project Link */}
        <div className="mt-6 pt-4 border-t border-primary/20">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors duration-300 font-mono text-sm"
          >
            <CodeBracketIcon className="w-4 h-4" />
            View Project
          </a>
        </div>
      </div>
    </motion.div>
  );
}