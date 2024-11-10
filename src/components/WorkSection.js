"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import { gsap } from 'gsap';


const WorkSection = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  const handleClick = (index) => {
    setClickedItem(index);
    setIsZoomed(true);
  };

  const handleClose = () => {
    setIsZoomed(false);
    setClickedItem(null);
  };


  const workItems = [
    {
      title: "DevOps Support Engineer / Software Support",
      company: "Palomino Inc.",
      location: "Hamilton",
      date: "Dec 2024 - Present",
      logo: "/images/palomino.jpg",
      description: [
        { category: "Web Development", details: ["Designed, developed, and maintained websites using Laravel and WordPress.", "Customized themes and plugins to meet specific client requirements.", "Ensured the responsiveness and performance of web applications."] },
        { category: "Systems Administration", details: ["Managed and maintained servers, networks, and IT infrastructure.", "Performed regular system updates, backups, and security checks.", "Answered tickets and dealt with clients' web hosting concerns."] },
      ],
    },
    {
      title: "Full Stack Engineer",
      company: "Taindeen",
      location: "Warsaw",
      date: "Nov 2021 - Jan 2024",
      logo: "/images/taindeen.jpg",
      description: [
        { category: "Web Development", details: ["Developed and maintained responsive web applications using React, Laravel, and Angular. Created engaging front-ends and efficient server-side applications."] },
        { category: "Database Management", details: ["Managed and maintained servers, networks, and IT infrastructure.", "Performed regular system updates, backups, and security checks.", "Answered tickets and dealt with clients' web hosting concerns."] },
        { category: "Cloud Computing", details: ["Deployed serverless functions with AWS Lambda, improving performance and reducing infrastructure costs."] },
      ],
    },
    {
      title: "Coding Tutor",
      company: "Code Ninjas",
      location: "Hamilton, Canada (On-site)",
      date: "Jan 2023 - Dec 2023",
      logo: "/images/codeninjas_logo.jpg",
      description: [
        { category: "Instruction", details: ["Taught JavaScript, Python, Java, and C# through structured lessons."] },
        { category: "Project Oversight", details: ["Led students in end-to-end project development, covering requirements, design, testing, and deployment."] },
        { category: "Mentorship", details: ["Fostered problem-solving skills and computational thinking in young learners."] },
      ],
    },
    {
      title: "Web Developer",
      company: "SUSK: Ukrainian Canadian Students' Union (Internship)",
      location: "Hamilton, Canada (Remote)",
      date: "Jun 2022 - Aug 2022",
      logo: "/images/SUSK.jpg",
      description: [
        { category: "Frontend Enhancement", details: ["Improved website UI and user experience with design upgrades using JavaScript, PHP, and HTML."] },
        { category: "Feature Integration", details: ["Added new features for seamless interaction and maintained visual consistency with Adobe Photoshop as needed."] },
      ],
    },
    {
      title: "Web Developer",
      company: "Patway Solutions (Co-op)",
      location: "Beamsville, Canada (Remote)",
      date: "Jan 2022 - May 2022",
      description: [
        { category: "Team Collaboration", details: ["Collaborated in a team to develop a web application with Angular, designed to streamline administrative workflows in construction."] },
        { category: "Process Optimization", details: ["Enabled efficient document management, reducing bottlenecks and enhancing productivity."] },
      ],
    },
    {
      title: "IT Helpdesk Coop",
      company: "Mohawk College",
      location: "Hamilton",
      date: "Jan 2020 - May 2020",
      logo: "/images/mohawk.jpg",
      description: [
        { category: "Technical Support", details: ["Provided first-level support for hardware and software issues, resolving user problems across desktops, printers, and applications."] },
        { category: "Effective Communication", details: ["Ensured users were informed about issue status and solutions in a professional, user-friendly manner, minimizing downtime."] },
      ],
    },
  ];

  return (
    <section id="work" className="py-16 bg-black w-full flex justify-center items-center relative overflow-hidden">
      {/* Add gradient background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full sm:w-3/4 md:w-2/3 relative z-10">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workItems.map((item, index) => (
            <motion.div
              key={index}
              className="group flex items-center p-6 rounded-xl transition-all duration-300 cursor-pointer"
              onClick={() => handleClick(index)}
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
                {item.logo ? (
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white border-opacity-20 shadow-lg">
                    <Image
                      src={item.logo}
                      alt={`${item.company} logo`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover transform transition-transform group-hover:scale-110"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gray-600 flex items-center justify-center text-white text-2xl font-bold border-2 border-white border-opacity-20">
                    {item.company[0]}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <span className="text-sm text-gray-400">
                  {item.company}, {item.location} | <span className="text-gray-500">{item.date}</span>
                </span>
                <div className="text-sm text-gray-300 mt-2">
                  {item.description.map((desc) => (
                    <div key={desc.category} className="mb-2">
                      <span className="font-semibold text-white">{desc.category}:</span>
                      <ul className="ml-4 list-disc list-inside text-gray-400">
                        {desc.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal with glassmorphism effect */}
        {isZoomed && (
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
              {/* Modal content remains the same */}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WorkSection;
