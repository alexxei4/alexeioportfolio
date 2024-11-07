"use client"; // Mark this as client-side

import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Main container for all sections */}
      <div className="flex flex-col items-center justify-start space-y-16">

        {/* About Section */}
        <section className="h-screen flex flex-col items-center justify-center text-center relative z-10">
          <motion.div
            className="glass-effect"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>About Me</h2>
            <p>- I am a programmer based out of Hamilton, Canada. I went to Mohawk College from 2018 to 2024 and obtained two diplomas during that time.</p>
            <p>- I received a standard diploma in Software Support and an advanced diploma in Software Development.</p>
            <p>- I specialize in Web Development, with primary strengths in Laravel, React, Vue, Angular, Next.js, and ASP.NET.</p>
            <p>- Most of my Web Development experience came from my placement with Taindeen, a Polish company.</p>
            <p>- I also have some experience with iOS and Android app development, and I am currently trying to learn DevOps to diversify my skill set.</p>
          </motion.div>
        </section>

    

        
        
      </div>
    </main>
  );
}


