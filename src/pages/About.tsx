import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, GraduationCapIcon, TrophyIcon, HeartIcon } from 'lucide-react';
export function About() {
  const highlights = [{
    icon: <GraduationCapIcon size={24} />,
    title: 'Education',
    description: 'Master of Engineering in Engineering Management at Stevens Institute of Technology'
  }, {
    icon: <BriefcaseIcon size={24} />,
    title: 'Experience',
    description: 'Product Management Intern at Chat360, Data Intern at CNBC, and more'
  }, {
    icon: <TrophyIcon size={24} />,
    title: 'Achievements',
    description: 'Published researcher, award-winning product developer, and tech leader'
  }, {
    icon: <HeartIcon size={24} />,
    title: 'Passion',
    description: 'Building products that solve real problems and create meaningful impact'
  }];
  const skills = ['Product Strategy', 'User Research', 'Data Analytics', 'Agile/Scrum', 'A/B Testing', 'Roadmap Planning', 'Stakeholder Management', 'SQL', 'Python', 'Figma', 'Jira', 'Power BI'];
  return <div className="relative min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
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
              About Me
            </span>
          </h1>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            I am a graduate student pursuing Engineering Management at Stevens
            Institute of Technology, with a passion for product management and
            creating user-centric solutions. My journey combines technical
            expertise with strategic thinking to build products that make a
            difference.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {highlights.map((item, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} whileHover={{
          scale: 1.02
        }} className="p-6 bg-white/50 backdrop-blur-sm border border-stone-200 rounded-2xl hover:border-stone-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-stone-600 to-stone-700 rounded-xl flex items-center justify-center mb-4 text-white">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                {item.title}
              </h3>
              <p className="text-gray-500">{item.description}</p>
            </motion.div>)}
        </div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
            Skills & Expertise
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => <motion.span key={index} initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.3,
            delay: index * 0.05
          }} whileHover={{
            scale: 1.1
          }} className="px-4 py-2 bg-white/70 border border-stone-200 rounded-full text-sm text-gray-600 hover:border-stone-300 hover:shadow-md transition-all cursor-default">
                {skill}
              </motion.span>)}
          </div>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.6
      }} className="p-8 bg-gradient-to-br from-stone-50/50 to-stone-100/50 border border-stone-200 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">My Approach</h2>
          <p className="text-gray-500 leading-relaxed">
            I believe in the power of data-driven decision making combined with
            empathy for users. My approach to product management involves
            understanding user needs deeply, collaborating with cross-functional
            teams, and iterating quickly based on feedback. I am passionate
            about creating products that not only meet business goals but also
            delight users and solve real problems.
          </p>
        </motion.div>
      </div>
    </div>;
}