import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import MeshGradientBackground from '../components/MeshGradientBackground'; // Import the gradient
import { gsap } from 'gsap';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ success: false, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mwpkoprl', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ success: true, error: null });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({ success: false, error: 'Failed to send message. Please try again.' });
    }
  };

  return (
    
    <div className="min-h-screen bg-black flex justify-center items-center px-4">

      
      

    
      <div className="grid grid-cols-2 md:grid-cols-2 gap-12 max-w-6xl">
        <section id="contact" >
          {/* Left Column - Contact Info */}
          <div className="space-y-4">
            <p className="text-gray-400">Contact Me</p>
            <p className="text-gray-400">Email: alexougriniouk@gmail.com</p>
            <p className="text-gray-400">LinkedIn: <a href="https://www.linkedin.com/in/alexei-ougriniouk/">alexei-ougriniouk</a></p>
            <p className="text-gray-400">Github: <a href = "https://github.com/alexxei4" >github.com/alexxei4</a></p>
            <p className="text-gray-400 max-w-md">
              Feel free to reach out regarding any inquires
            </p>
            <br></br>
            <a href="/myresume.pdf" download>
              <button className="bg-black border border-white-800 text-white px-8 py-2 hover:bg-white-900 transition-colors">
                Download Resume
              </button>
            </a>
          </div>
        </section>

        {/* Right Column - Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-black border border-white-800  text-white p-3 w-full focus:outline-none focus:border-white-600"
            />
            
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-black border border-white-800 text-white  p-3 w-full focus:outline-none focus:border-white-600"
            />
            
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="bg-black border border-white-800 p-3 w-full text-white  focus:outline-none focus:border-white-600"
            />
            
            <button
              type="submit"
              className="bg-black border border-white-800 text-white px-8 py-2 hover:bg-white-900 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default ContactForm;
