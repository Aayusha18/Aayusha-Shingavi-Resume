import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from 'lucide-react';
export function ExperienceLeadership() {
  const {
    scrollYProgress
  } = useScroll();
  const [activeIndex, setActiveIndex] = useState(0);
  const experiences = [{
    title: 'Product Management Intern',
    company: 'Chat360',
    location: 'Remote',
    duration: 'September 2023 - March 2024',
    description: 'Led product enhancements for omnichannel chatbot platform, defining requirements and collaborating with cross-functional teams.',
    achievements: ['Successfully delivered web and mobile applications on time', 'Created comprehensive user stories and product requirements', 'Collaborated with engineering, design, and business teams', 'Aligned product features with strategic business goals']
  }, {
    title: 'Data Intern',
    company: 'CNBC',
    location: 'Mumbai, India',
    duration: 'May 2023 - July 2023',
    description: 'Designed and executed PRISMA workflow for academic paper analysis and conducted market research on Metaverse adoption.',
    achievements: ['Analyzed 500+ survey responses for user insights', 'Designed surveys to gather data on Metaverse adoption', 'Provided recommendations for targeted marketing campaigns', 'Executed systematic literature review workflow']
  }, {
    title: 'Product Manager',
    company: 'PulsePoint',
    location: 'Stevens Institute of Technology',
    duration: 'January 2024 - May 2024',
    description: 'Built Power BI dashboard for real-time workforce insights, reducing processing time and enabling data-driven decisions.',
    achievements: ['Reduced data processing time by 50%', 'Created interactive dashboards with 15+ DAX measures', 'Enabled real-time workforce intelligence', 'Automated data transformation processes']
  }, {
    title: 'Vice President',
    company: 'Product Management Club',
    location: 'Stevens Institute of Technology',
    duration: '2023 - 2024',
    description: 'Led product management initiatives and organized events to enhance student learning and industry connections.',
    achievements: ['Organized workshops and speaker events', 'Built connections with industry professionals', 'Mentored aspiring product managers', 'Grew club membership and engagement']
  }, {
    title: 'Research Assistant',
    company: 'Stevens Institute of Technology',
    location: 'Hoboken, NJ',
    duration: '2023 - Present',
    description: 'Conducted research on product development and published findings in academic journals.',
    achievements: ['Published research papers', 'Presented at academic conferences', 'Collaborated with faculty on research projects', 'Contributed to product development literature']
  }];
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const index = Math.floor((scrollPosition - 200) / (windowHeight * 0.3));
      setActiveIndex(Math.max(0, Math.min(index, experiences.length - 1)));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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
      }} className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-stone-700 to-stone-600 bg-clip-text text-transparent">
              Experience & Leadership
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in product management and leadership roles
          </p>
        </motion.div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-stone-300">
            <motion.div className="absolute top-0 left-0 w-full bg-gradient-to-b from-stone-700 to-stone-600" style={{
            height: `${activeIndex / (experiences.length - 1) * 100}%`
          }} />
          </div>
          {/* Timeline items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <motion.div className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${index <= activeIndex ? 'bg-stone-700 border-stone-700 scale-125' : 'bg-white border-stone-400'}`} />
                </div>
                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <motion.div whileHover={{
                scale: 1.02
              }} className="p-6 bg-white border border-stone-300 rounded-2xl hover:border-stone-400 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-stone-700 to-stone-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                        <BriefcaseIcon size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">
                          {exp.title}
                        </h3>
                        <p className="text-stone-700 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <CalendarIcon size={14} />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPinIcon size={14} />
                        {exp.location}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-stone-700 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-sm text-gray-600">{achievement}</p>
                        </div>)}
                    </div>
                  </motion.div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </div>;
}