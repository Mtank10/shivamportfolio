"use client"
import Navbar from './components/Navbar'
import Header from "./components/Header";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectCard from "./components/ProjectCard";
import { PROFILE, PROJECTS, SKILLS } from "@/data/resume";
import { motion } from "framer-motion";
import { CodeBracketIcon, CpuChipIcon, CommandLineIcon, CircleStackIcon } from "@heroicons/react/24/outline";
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Navbar/>
      <Header />

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-dark-bg grid-pattern">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center text-white mb-16 font-mono"
          >
            <span className="text-primary">&lt;</span>
            Technical Arsenal
            <span className="text-primary"> /&gt;</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCategory 
              icon={<CodeBracketIcon className="w-8 h-8" />} 
              title="Languages" 
              items={SKILLS.languages}
              delay={0.1}
            />
            <SkillCategory
              icon={<CpuChipIcon className="w-8 h-8" />}
              title="Frameworks"
              items={SKILLS.frameworks}
              delay={0.2}
            />
            <SkillCategory
              icon={<CommandLineIcon className="w-8 h-8" />}
              title="Tools"
              items={SKILLS.tools}
              delay={0.3}
            />
            <SkillCategory
              icon={<CircleStackIcon className="w-8 h-8" />}
              title="Databases"
              items={SKILLS.databases}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      <ExperienceTimeline />

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-dark-bg">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center text-white mb-16 font-mono"
          >
            <span className="text-primary">&lt;</span>
            Featured Projects
            <span className="text-primary"> /&gt;</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark-card">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-8 font-mono"
          >
            <span className="text-primary">&lt;</span>
            Let's Connect
            <span className="text-primary"> /&gt;</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-mono"
          >
            I'm always interested in new opportunities and exciting projects. 
            Let's build something amazing together!
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <a 
              href={`mailto:${PROFILE.contact.email}`} 
              className="neon-button px-8 py-4 rounded-lg font-mono transition-all duration-300 inline-block"
            >
              Send Email
            </a>
            <a 
              href={`https://${PROFILE.contact.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 rounded-lg bg-transparent border border-gray-600 text-gray-300 hover:border-primary hover:text-primary transition-all duration-300 font-mono"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>
      </section>
      
      <Footer/>
    </div>
  );
}

function SkillCategory({ icon, title, items, delay }: { icon: any; title: string; items: string[]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className="bg-dark-card border border-primary/20 p-8 rounded-xl hover:border-primary/40 transition-all duration-300 group"
    >
      <div className="flex items-center mb-6">
        <span className="text-primary group-hover:scale-110 transition-transform duration-300">{icon}</span>
        <h3 className="text-xl font-semibold ml-4 text-white font-mono">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {items.map((item, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-lg text-sm font-mono hover:bg-primary/20 transition-colors duration-300"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}