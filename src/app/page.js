// src/app/page.js
"use client";

import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main>
      <section className="animated-gradient h-screen flex flex-col items-center justify-center text-center relative">
        <motion.div
          className="glass-effect"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-gray-800">Hi, I'm Alexei Ougriniouk</h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl mt-4 text-gray-600">Web Developer</p>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Projects</h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectCard 
              title="Project 1" 
              description="Description of project 1" 
              link="#" 
            />
            <ProjectCard 
              title="Project 2" 
              description="Description of project 2" 
              link="#" 
            />
            <ProjectCard 
              title="Project 3" 
              description="Description of project 3" 
              link="#" 
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}