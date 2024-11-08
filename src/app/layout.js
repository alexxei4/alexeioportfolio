"use client"; // Mark this as client-side

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import MeshGradientBackground from '@/components/MeshGradientBackground';
import WorkSection from '@/components/WorkSection'; // Import gradient component
import '../styles/globals.css';
import ContactForm from '@/components/ContactForm';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Helvetica+Neue:wght@400;700&family=Editorial+New&display=swap" 
        />
      </head>

      <body>
        {/* Navbar and gradient background */}
        <Navbar />
        <MeshGradientBackground />

        {/* Main content */}
        <main className="relative z-10">

          <div className="main-content">
            
            {children}
            {/* Move WorkSection after the About Me and before the Footer */}
            <WorkSection />
            <Projects />
            <Skills />
            <ContactForm/>
          </div>

        </main>

      
      </body>
    </html>
  );
}
