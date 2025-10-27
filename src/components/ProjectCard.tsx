import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}
interface ProjectCardProps {
  project: Project;
  index: number;
}
export function ProjectCard({
  project,
  index
}: ProjectCardProps) {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6,
    delay: index * 0.1
  }} whileHover={{
    y: -8
  }} className="group relative">
      <Link to={`/project/${project.id}`}>
        <div className="relative overflow-hidden rounded-2xl bg-white/70 border border-stone-200 hover:border-stone-300 hover:shadow-xl transition-all">
          <div className="relative h-64 overflow-hidden">
            <motion.img src={project.image} alt={project.title} className="w-full h-full object-cover" whileHover={{
            scale: 1.1
          }} transition={{
            duration: 0.6
          }} />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-stone-700 text-white backdrop-blur-sm rounded-full text-xs font-medium">
                {project.category}
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-700 group-hover:text-stone-700 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-500 text-sm mb-4 line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag, i) => <span key={i} className="px-2 py-1 bg-stone-100 text-stone-700 rounded text-xs">
                  {tag}
                </span>)}
            </div>
            <div className="flex items-center gap-2 text-stone-700 text-sm font-medium group-hover:gap-3 transition-all">
              View Case Study
              <ArrowRightIcon size={16} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>;
}