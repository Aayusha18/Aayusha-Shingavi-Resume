import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
export function ProjectsCaseStudies() {
  const projects = [{
    id: 'chat360',
    title: 'Chat360 - Omnichannel Chatbot',
    category: 'Product Management',
    description: 'Led product enhancements for omnichannel chatbot platform, defining requirements and collaborating with cross-functional teams.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
    tags: ['Product Strategy', 'Cross-functional', 'User Stories']
  }, {
    id: 'cnbc-prisma',
    title: 'CNBC - PRISMA Workflow',
    category: 'Data Analytics',
    description: 'Designed and executed PRISMA workflow for academic paper analysis, conducting market research on Metaverse adoption.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Data Analysis', 'Market Research', 'Survey Design']
  }, {
    id: 'ultrasonic-pest',
    title: 'Smart Ultrasonic Pest Repellent',
    category: 'Product Development',
    description: 'Developed MVP for IoT pest control device focusing on environmental sustainability and wildlife management.',
    image: 'https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?w=800&h=600&fit=crop',
    tags: ['IoT', 'MVP', 'Arduino', 'Sustainability']
  }, {
    id: 'campus-compass',
    title: 'Campus Compass',
    category: 'Product Management',
    description: 'Designed MVP for campus navigation app with video content and interactive features to enhance student engagement.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop',
    tags: ['MVP', 'User Research', 'Instagram Integration']
  }, {
    id: 'pulsepoint',
    title: 'PulsePoint - Workforce Intelligence',
    category: 'Product Analytics',
    description: 'Built Power BI dashboard for real-time workforce insights, reducing processing time and enabling data-driven decisions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Power BI', 'DAX', 'Analytics', 'Automation']
  }, {
    id: 'metaverse-study',
    title: 'Metaverse Adoption Research',
    category: 'Research',
    description: 'Analyzed 500+ survey responses to identify user preferences and provide recommendations for targeted campaigns.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    tags: ['User Research', 'Data Analysis', 'Insights']
  }];
  return <div className="relative min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-stone-700 to-stone-600 bg-clip-text text-transparent">
              Projects & Case Studies
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my product management journey through real-world projects
            and case studies
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </div>
      </div>
    </div>;
}