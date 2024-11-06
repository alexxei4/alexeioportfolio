// src/app/projects/page.js
import Head from 'next/head';
import Link from 'next/link';
import ProjectCard from '../../components/ProjectCard';
import MeshGradientBackground from '../../components/MeshGradientBackground'; // Import the gradient

import '../../styles/globals.css';

const Projects = () => {
  return (
    <>
    <MeshGradientBackground />
      <Head>
        <title>My Projects</title>
        <meta name="description" content="A showcase of my projects." />
      </Head>
      <section className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
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
        </div>
      </section>
    </>
  );
};
//console.log(ProjectCard, Navbar, Footer, ContactForm);


export default Projects;
