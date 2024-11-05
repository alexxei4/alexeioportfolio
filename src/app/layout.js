// src/app/layout.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import '../styles/globals.css';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body style={{ fontFamily: 'Inter, sans-serif' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

//console.log(ProjectCard, Navbar, Footer, ContactForm);

export default Layout;
