import Head from 'next/head';
import ContactForm from '@/components/ContactForm';
import { gsap } from 'gsap';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact form for inquiries." />
      </Head>
      <div className="min-h-screen bg-black flex justify-center items-center px-4">
        <div className="w-full max-w-6xl text-center">
          
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
