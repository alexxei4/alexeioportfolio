import Head from 'next/head';

import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

console.log(ProjectCard, Navbar, Footer, ContactForm); // Check if components are imported correctly

const Home = () => {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="A showcase of my projects." />
      </Head>
      <section className="h-screen bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white text-center">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm John Doe
        </motion.h1>
        <motion.p
          className="text-xl mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Web Developer and Designer
        </motion.p>
      </section>
      <section className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ProjectCard title="Project 1" description="Description of project 1" link="#" />
          <ProjectCard title="Project 2" description="Description of project 2" link="#" />
          <ProjectCard title="Project 3" description="Description of project 3" link="#" />
        </motion.div>
      </section>
      <ContactForm /> {/* Include your ContactForm here */}
      <Footer /> {/* Include Footer */}
    </>
  );
};

export default Home;



