import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from 'lucide-react';
export function ProjectDetail() {
  const {
    id
  } = useParams();
  const projectDetails: Record<string, any> = {
    chat360: {
      title: 'Chat360 - Omnichannel Chatbot Platform',
      duration: 'September 2023 - March 2024',
      role: 'Product Management Intern',
      overview: 'Led product enhancements for an omnichannel chatbot platform serving multiple industries. Focused on defining product requirements, creating user stories, and aligning features with business goals.',
      challenge: 'The platform needed to scale across multiple channels while maintaining consistency and meeting diverse customer needs across different industries.',
      solution: 'Collaborated with cross-functional teams to define clear requirements, created comprehensive user stories, and established a roadmap that balanced technical feasibility with business impact.',
      impact: ['Successfully delivered web and mobile applications on time', 'Enhanced customer engagement through improved features', 'Streamlined communication across cross-functional teams', 'Aligned product features with strategic business goals'],
      process: [{
        title: 'Discovery & Research',
        description: 'Conducted stakeholder interviews and analyzed user feedback to identify key pain points and opportunities.'
      }, {
        title: 'Requirements Definition',
        description: 'Created detailed product requirements and user stories, ensuring alignment with business objectives.'
      }, {
        title: 'Cross-functional Collaboration',
        description: 'Worked closely with engineering, design, and business teams using Jira for backlog management.'
      }, {
        title: 'Delivery & Iteration',
        description: 'Delivered features on schedule while maintaining high quality standards and incorporating user feedback.'
      }],
      technologies: ['Jira', 'Product Roadmapping', 'User Stories', 'Agile/Scrum'],
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=600&fit=crop'
    },
    'campus-compass': {
      title: 'Campus Compass - Student Engagement Platform',
      duration: 'Product Development Project',
      role: 'Product Manager',
      overview: 'Designed and developed an MVP for a campus navigation and engagement platform to address information overload and scattered communication on campus.',
      challenge: 'Students were missing important campus events and resources due to fragmented communication channels and information overload.',
      solution: 'Created a centralized platform with video content, interactive features, and Instagram integration to provide personalized campus information and enhance student engagement.',
      impact: ['Achieved 100+ followers and 3.2K profile views in 30 days', 'Generated 500+ reel views through engaging content', 'Validated student pain points through user research', 'Delivered actionable product recommendations'],
      process: [{
        title: 'User Research',
        description: 'Conducted surveys and interviews to understand student needs and validate problem space.'
      }, {
        title: 'MVP Design',
        description: 'Designed minimum viable product with focus on video content and social integration.'
      }, {
        title: 'Content Strategy',
        description: 'Developed content strategy leveraging Instagram to build initial user base.'
      }, {
        title: 'Iteration & Feedback',
        description: 'Gathered user feedback and iterated on features to improve engagement.'
      }],
      technologies: ['Instagram', 'MVP Development', 'User Research', 'Content Strategy'],
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=600&fit=crop'
    }
  };
  const project = projectDetails[id || ''] || projectDetails['chat360'];
  return <div className="relative min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <Link to="/projects">
          <motion.button initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} whileHover={{
          x: -5
        }} className="flex items-center gap-2 text-stone-700 mb-8 hover:text-stone-800 transition-colors">
            <ArrowLeftIcon size={20} />
            Back to Projects
          </motion.button>
        </Link>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="relative h-96 rounded-2xl overflow-hidden mb-12">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-gray-600">
            <span>{project.role}</span>
            <span>•</span>
            <span>{project.duration}</span>
          </div>
        </motion.div>
        <motion.section initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-stone-700">Overview</h2>
          <p className="text-gray-700 leading-relaxed">{project.overview}</p>
        </motion.section>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3
        }} className="p-6 bg-white border border-stone-300 rounded-2xl">
            <h3 className="text-xl font-bold mb-3 text-stone-700">Challenge</h3>
            <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }} className="p-6 bg-white border border-stone-300 rounded-2xl">
            <h3 className="text-xl font-bold mb-3 text-stone-700">Solution</h3>
            <p className="text-gray-700 leading-relaxed">{project.solution}</p>
          </motion.div>
        </div>
        <motion.section initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.5
      }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-stone-700">
            Product Development Process
          </h2>
          <div className="space-y-6">
            {project.process.map((step: any, index: number) => <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-stone-700 to-stone-600 rounded-full flex items-center justify-center font-bold text-white">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>)}
          </div>
        </motion.section>
        <motion.section initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.6
      }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-stone-700">
            Impact & Results
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.impact.map((item: string, index: number) => <div key={index} className="flex items-start gap-3 p-4 bg-stone-50 border border-stone-200 rounded-xl">
                <div className="w-2 h-2 bg-stone-700 rounded-full mt-2" />
                <p className="text-gray-700">{item}</p>
              </div>)}
          </div>
        </motion.section>
        <motion.section initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.7
      }}>
          <h2 className="text-2xl font-bold mb-6 text-stone-700">
            Technologies & Tools
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech: string, index: number) => <span key={index} className="px-4 py-2 bg-white border border-stone-300 rounded-full text-gray-700">
                {tech}
              </span>)}
          </div>
        </motion.section>
      </div>
    </div>;
}