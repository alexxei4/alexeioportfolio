"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import { gsap } from 'gsap';


const ProjectCard = ({ title, description, imageUrl, onClick }) => (
  <motion.div
    className="group flex items-center p-6 rounded-xl transition-all duration-300 cursor-pointer"
    onClick={onClick}
    style={{
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    }}
    whileHover={{
      boxShadow: '0 0 20px rgba(123, 192, 255, 0.3)',
      scale: 1.02,
      border: '1px solid rgba(255, 255, 255, 0.2)',
    }}
  >
    <div className="mr-6">
      <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-white border-opacity-20 shadow-lg">
        <Image src={imageUrl} alt={title} width={80} height={80} className="w-full h-full object-cover" />
      </div>
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-400 mt-2">{description}</p>
    </div>
  </motion.div>
);

const Projects = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [clickedProject, setClickedProject] = useState(null);

  const handleClick = (project) => {
    setClickedProject(project);
    setIsZoomed(true);
  };

  const handleClose = () => {
    setIsZoomed(false);
    setClickedProject(null);
  };

  const projects = [
    {
      title: 'KickOffKickBack',
      description: 'A soccer themed e commerce application. This was made with Laravel , Bootstrap and MySQL for the database. Features include: Role systems, email confirmation, changing profile pics, wishlists, admin/customer permissions',
      imageUrl: '/images/KOKB.png',
      youtubeUrl: 'https://www.youtube.com/embed/RP7l0yf9aFQ?si=IblUF5wzEydiClAv'
     
    },
    {
      title: 'React Music Blog',
      description: 'I made a music blog in React that implements the Bing Maps API back in 2020.',
      imageUrl: '/images/hamonmusic.png',
      youtubeUrl: 'https://www.youtube.com/embed/H1LXzDiSkGk?si=NYdxxKWecKpApVlj'
     
    },
    {
      title: 'BooksInBulk',
      description: 'A book themed e commerce application made in Asp.Net',
      imageUrl: '/images/book.png',

    },
    {
      title: 'Discord Color Calculator Bot',
      description: 'a discord bot via node.js that responds to certain commands, I used the x-colors api , it can generate random colours given a range, can convert RGB to HEX code etc.',
      imageUrl: '/images/discord.jpg',
      youtubeUrl: 'https://www.youtube.com/embed/iXGswZJ1aqU?si=kVGPTKUEmM0jLJb-'
      
    },
    // Add other projects here
  ];

  return (
    <section  id="projects" className="py-16 bg-black w-full flex justify-center items-center relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full sm:w-3/4 md:w-2/3 relative z-10">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              onClick={() => handleClick(project)}
            />
          ))}
        </div>

        {/* Modal with glassmorphism effect */}
        {isZoomed && clickedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 z-20 flex items-center justify-center backdrop-blur-sm"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="p-8 rounded-xl max-w-3xl w-full relative"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-white mb-4">{clickedProject.title}</h3>
              <p className="text-gray-300 mb-4">{clickedProject.description}</p>

              {clickedProject.youtubeUrl ? (
                <iframe
                  width="560"
                  height="315"
                  src={clickedProject.youtubeUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              ) : (
                <Image src={clickedProject.imageUrl} alt={clickedProject.title} width={400} height={300} className="rounded-lg" />
              )}
              
              <button onClick={handleClose} className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl">&times;</button>
            </motion.div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Projects;
