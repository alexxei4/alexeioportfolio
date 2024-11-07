// src/app/contact/page.js
import Head from 'next/head';
import Link from 'next/link';
import ContactForm from '../../components/ContactForm';
import MeshGradientBackground from '../../components/MeshGradientBackground'; // Import the gradient

const Contact = () => {
  return (
    <>
    <MeshGradientBackground />
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact form for inquiries." />
      </Head>
      <section className="py-16 bg-gray-50">
        <h1>Contact Me</h1>
        <ContactForm />
      </section>
    </>
  );
};
//console.log(ProjectCard, Navbar, Footer, ContactForm);

export default Contact;
