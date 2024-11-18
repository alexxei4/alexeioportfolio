"use client"; // Mark this as client-side

import { motion } from 'framer-motion';
import Image from 'next/image';
import { gsap } from 'gsap';


export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Main container for all sections */}
      <div className="flex flex-col items-center justify-start space-y-16">

        {/* About Section */}
        <section id="about" className="h-screen w-full flex flex-col items-center justify-center text-center relative bg-black overflow-hidden py-16">
          {/* Background gradient blobs */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <motion.div
            className="glass-effect relative z-10 max-w-lg p-8 rounded-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <h2 className="text-4xl font-bold text-#FFFCE1 mb-4 font-asfalt">About Me</h2>
            <p className="text-300 text-[#FFFCE1] mb-2">I am a passionate programmer based in Hamilton, Canada, with a comprehensive background in software development. </p>
            <p className="text-300 text-[#FFFCE1] mb-2"> I graduated from Mohawk College in 2024 with both a standard diploma in Software Support and an advanced diploma in Software Development. </p>
            <p className="text-300 text-[#FFFCE1] mb-2">My expertise lies in web development, where I excel in frameworks and languages such as Laravel, React, Vue, Angular, Next.js, and ASP.NET.</p>
            <p className="text-300 text-[#FFFCE1] mb-2">Much of my practical experience was gained through my placement with Taindeen, a company in Poland, where I honed my skills in real-world projects. Additionally, I have experience with iOS and Android app development and am currently expanding my knowledge in DevOps to further diversify my skill set.</p>
          </motion.div>

          {/* Image of You */}
          <motion.div
            className="relative z-10 mt-8 rounded-full overflow-hidden border-4 border-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/images/msn.jpg" alt="About Me Image" width={150} height={150} />
          </motion.div>
        </section>
      </div>
    </main>
  );
}
