"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, MailIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-16 bg-dark-bg border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold text-primary font-mono glow-text">
              &lt;ShivamRaj /&gt;
            </h3>
            <p className="text-gray-400 font-mono">
              Building digital experiences with passion and precision
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto md:mx-0"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="text-lg font-semibold mb-6 text-white font-mono">Connect</h4>
            <div className="flex flex-col gap-4">
              <a 
                href="https://github.com/Mtank10" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-all duration-300 group font-mono"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/shivamraj10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-all duration-300 group font-mono"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
              <a 
                href="mailto:rajshivam691@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-all duration-300 group font-mono"
              >
                <MailIcon size={20} className="group-hover:scale-110 transition-transform" />
                Email
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 font-mono"
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
            <div className="space-y-2">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                +91 8800804205
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                Delhi, India
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="border-t border-primary/20 mt-12 pt-8 text-center"
        >
          <p className="text-gray-500 font-mono">
            © 2024 Shivam Raj. Crafted with 
            <span className="text-primary mx-1">♥</span> 
            and lots of 
            <span className="text-secondary">coffee</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}