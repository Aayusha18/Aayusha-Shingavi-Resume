import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCapIcon, AwardIcon, BookOpenIcon, TrophyIcon } from 'lucide-react';
export function Education() {
  const education = [{
    degree: 'Master of Engineering',
    field: 'Engineering Management',
    school: 'Stevens Institute of Technology',
    location: 'Hoboken, New Jersey',
    duration: '2023 - 2025',
    gpa: '3.8/4.0',
    coursework: ['Product Management', 'Data Analytics', 'Agile Project Management', 'Business Strategy', 'Innovation Management', 'Financial Engineering'],
    achievements: ['Graduate Research Assistant', 'Vice President, Product Management Club', 'Published researcher in product development']
  }, {
    degree: 'Bachelor of Engineering',
    field: 'Computer Engineering',
    school: 'Mumbai University',
    location: 'Mumbai, India',
    duration: '2019 - 2023',
    gpa: '3.7/4.0',
    coursework: ['Software Engineering', 'Database Management', 'Web Development', 'Mobile Application Development', 'Data Structures & Algorithms', 'Computer Networks'],
    achievements: ["Dean's List (4 semesters)", 'Best Project Award', 'Technical Club President']
  }];
  const certifications = [{
    title: 'Product Management Certificate',
    issuer: 'Product School',
    date: '2023'
  }, {
    title: 'Data Analytics Professional',
    issuer: 'Google',
    date: '2023'
  }, {
    title: 'Agile Certified Practitioner',
    issuer: 'PMI',
    date: '2024'
  }];
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
              Education
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </motion.div>
        {/* Education Cards */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: index * 0.2
        }} whileHover={{
          scale: 1.01
        }} className="p-8 bg-white border border-stone-300 rounded-2xl hover:border-stone-400 hover:shadow-xl transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-stone-700 to-stone-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                  <GraduationCapIcon size={32} />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    {edu.degree}
                  </h2>
                  <p className="text-xl text-stone-700 font-medium mb-2">
                    {edu.field}
                  </p>
                  <p className="text-gray-700 font-medium">{edu.school}</p>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span>{edu.duration}</span>
                    <span>•</span>
                    <span className="font-semibold text-stone-700">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpenIcon size={20} className="text-stone-700" />
                    Relevant Coursework
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, i) => <span key={i} className="px-3 py-1 bg-stone-100 text-stone-800 rounded-full text-sm">
                        {course}
                      </span>)}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <TrophyIcon size={20} className="text-stone-700" />
                    Achievements
                  </h3>
                  <div className="space-y-2">
                    {edu.achievements.map((achievement, i) => <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-stone-700 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-700">{achievement}</p>
                      </div>)}
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>
        {/* Certifications */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <AwardIcon size={32} className="text-stone-700" />
            Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.4,
            delay: 0.5 + index * 0.1
          }} whileHover={{
            scale: 1.05
          }} className="p-6 bg-gradient-to-br from-stone-50 to-stone-100 border border-stone-300 rounded-xl hover:border-stone-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-stone-700 to-stone-600 rounded-lg flex items-center justify-center mb-4 text-white">
                  <AwardIcon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {cert.title}
                </h3>
                <p className="text-stone-700 font-medium mb-1">{cert.issuer}</p>
                <p className="text-sm text-gray-600">{cert.date}</p>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </div>;
}