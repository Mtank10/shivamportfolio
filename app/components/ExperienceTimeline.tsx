import { motion } from "framer-motion";
import Image from "next/image";
import fullstack from '../../public/assets/fullstack.jpg'

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-white mb-16 font-mono"
        >
          <span className="text-primary">&lt;</span>
          Professional Journey
          <span className="text-primary"> /&gt;</span>
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary"></div>

          {/* Timeline items */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16 pl-20 relative"
          >
            {/* Timeline dot */}
            <div className="absolute w-6 h-6 bg-primary rounded-full -left-[11px] top-0 border-4 border-dark-bg animate-glow"></div>
            
            <div className="bg-dark-card border border-primary/20 rounded-xl p-8 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 relative rounded-lg overflow-hidden border-2 border-primary/30">
                  <Image
                    src={fullstack}
                    alt="Freelancing"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 font-mono">
                    Full Stack Developer
                  </h3>
                  <p className="text-primary mb-1 font-mono">
                    Freelancing • Self-Employed
                  </p>
                  <p className="text-gray-400 mb-4 font-mono text-sm">
                    May 2024 – Present
                  </p>
                  
                  <ul className="space-y-3 text-gray-300">
                    {[
                      "Develop full-stack applications for clients across e-commerce, productivity domains.",
                      "Architect RESTful APIs using Express.js and GraphQL with PostgreSQL/MongoDB backends.",
                      "Implement responsive UIs with React/Next.js and state management solutions.",
                      "Collaborate with clients through requirement analysis, sprint planning, and iterative delivery."
                    ].map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16 pl-20 relative"
          >
            {/* Timeline dot */}
            <div className="absolute w-6 h-6 bg-secondary rounded-full -left-[11px] top-0 border-4 border-dark-bg animate-glow"></div>
            
            <div className="bg-dark-card border border-secondary/20 rounded-xl p-8 hover:border-secondary/40 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 relative rounded-lg overflow-hidden border-2 border-secondary/30">
                  <Image
                    src={fullstack}
                    alt="Croptr"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 font-mono">
                    Backend Developer Intern
                  </h3>
                  <p className="text-secondary mb-1 font-mono">
                    Croptr Technology
                  </p>
                  <p className="text-gray-400 mb-4 font-mono text-sm">
                    Sept 2023 – Feb 2024
                  </p>
                  
                  <ul className="space-y-3 text-gray-300">
                    {[
                      "Developed and maintained backend APIs using Node.js",
                      "Implemented database solutions with MongoDB and MySQL",
                      "Conducted code reviews and wrote unit tests"
                    ].map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}