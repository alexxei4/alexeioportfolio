"use client"; // Mark this as client-side

import { useState } from "react";
import { motion } from "framer-motion";

const WorkSection = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  const handleClick = (index) => {
    setClickedItem(index); // Store which item was clicked
    setIsZoomed(true); // Trigger zoom effect
  };

  const handleClose = () => {
    setIsZoomed(false); // Close the zoomed item view
    setClickedItem(null); // Reset clicked item
  };

  return (
    <section className="py-16 bg-gray-50 relative z-10 w-full flex items-center justify-center">
      <motion.div
        className="glass-effect p-6 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-lg"
        initial={{ opacity: 0, y: -50 }}  // Animation starts with opacity 0 and y offset
        animate={{ opacity: 1, y: 0 }}    // Animation ends with opacity 1 and no y offset
        transition={{ duration: 0.5 }}    // Animation lasts for 0.5 seconds
      >
        <h2 className="text-4xl font-bold text-black mb-6">Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Work Item 1 */}
          <motion.div
            className="work-item group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundImage: `url(/path/to/image1.jpg)`,
            }}
            onClick={() => handleClick(1)}
            animate={isZoomed && clickedItem === 1 ? { scale: 1.5 } : { scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-cover bg-center bg-opacity-60 group-hover:bg-opacity-80"></div>
            <div className="relative z-10 text-black p-4">
              <h3 className="text-xl font-semibold">DevOps Support Engineer / Software Support</h3>
              <p className="text-sm text-gray-600">Palomino Inc. , Hamilton | <span className="text-sm text-gray-400">Dec 2024 - Present</span></p>
            </div>
          </motion.div>

          {/* Work Item 2 */}
          <motion.div
            className="work-item group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundImage: `url(/path/to/image2.jpg)`,
            }}
            onClick={() => handleClick(2)}
            animate={isZoomed && clickedItem === 2 ? { scale: 1.5 } : { scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-cover bg-center bg-opacity-60 group-hover:bg-opacity-80"></div>
            <div className="relative z-10 text-black p-4">
              <h3 className="text-xl font-semibold">FullStack Software Developer</h3>
              <p className="text-sm text-gray-600">Taindeen, Warsaw| <span className="text-sm text-gray-400">Nov 2021 - Jan 2024</span></p>
            </div>
          </motion.div>

          {/* Work Item 3 */}
          <motion.div
            className="work-item group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundImage: `url(/path/to/image3.jpg)`,
            }}
            onClick={() => handleClick(3)}
            animate={isZoomed && clickedItem === 3 ? { scale: 1.5 } : { scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-cover bg-center bg-opacity-60 group-hover:bg-opacity-80"></div>
            <div className="relative z-10 text-black p-4">
              <h3 className="text-xl font-semibold">Coding Tutor</h3>
              <p className="text-sm text-gray-600">Code Ninjas, Hamilton | <span className="text-sm text-gray-400">Jan 2024 - Dec 2024</span></p>
            </div>
          </motion.div>

          <motion.div
            className="work-item group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundImage: `url(/path/to/image3.jpg)`,
            }}
            onClick={() => handleClick(4)}
            animate={isZoomed && clickedItem === 4 ? { scale: 1.5 } : { scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-cover bg-center bg-opacity-60 group-hover:bg-opacity-80"></div>
            <div className="relative z-10 text-black p-4">
              <h3 className="text-xl font-semibold">Software Developer Coop</h3>
              <p className="text-sm text-gray-600"> SUSK: Ukrainian Canadian Students' Union, Hamilton | <span className="text-sm text-gray-400">May 2022 - Aug 2022</span></p>
            </div>
          </motion.div>

          <motion.div
            className="work-item group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundImage: `url(/path/to/image3.jpg)`,
            }}
            onClick={() => handleClick(5)}
            animate={isZoomed && clickedItem === 5 ? { scale: 1.5 } : { scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-cover bg-center bg-opacity-60 group-hover:bg-opacity-80"></div>
            <div className="relative z-10 text-black p-4">
              <h3 className="text-xl font-semibold">Software Developer Coop</h3>
              <p className="text-sm text-gray-600">Patway Solutions, Hamilton | <span className="text-sm text-gray-400">Jan 2022 - May 2022</span></p>
            </div>
          </motion.div>

          <motion.div
            className="work-item group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundImage: `url(/path/to/image3.jpg)`,
            }}
            onClick={() => handleClick(6)}
            animate={isZoomed && clickedItem === 6 ? { scale: 1.5 } : { scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-cover bg-center bg-opacity-60 group-hover:bg-opacity-80"></div>
            <div className="relative z-10 text-black p-4">
              <h3 className="text-xl font-semibold">IT Help Desk</h3>
              <p className="text-sm text-gray-600">Mohawk College, Hamilton | <span className="text-sm text-gray-400">Jan 2020 - Apr 2020</span></p>
            </div>
          </motion.div>
          

          {/* Add more Work Items here if needed */}
        </div>

        {/* Modal / Zoomed In Detail View */}
        {isZoomed && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-20 flex items-center justify-center"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full relative"
              animate={isZoomed ? { scale: 1.5 } : { scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-semibold mb-4">
                 {clickedItem === 1 ? "DevOps Support Engineer / Software Support" :
                 clickedItem === 2 ? "FullStack Software Developer" :
                 clickedItem === 3 ? "Coding Tutor" : 
                 clickedItem === 4 ? "Web Developer Internship" : 
                 clickedItem === 5 ? "Web Developer Coop" : 
                 clickedItem === 6 ? "IT Helpdesk Coop" : "" }
              </h2>
              <p className="text-sm mb-6">
                
                {/* For item 1 */}
                {clickedItem === 1 && (
                  <div>
                  <p><strong>Web Development:</strong></p>
                  <div>
                    <ul>
                      <li>Designed, developed, and maintained websites using Laravel and WordPress.</li>
                      <li>Customized themes and plugins to meet specific client requirements.</li>
                      <li>Ensured the responsiveness and performance of web applications.</li>
                    </ul>
                  </div>
                  <p><strong>Systems Administration:</strong></p>
                  <div>
                    <ul>
                      <li>Managed and maintained servers, networks, and IT infrastructure.</li>
                      <li>Performed regular system updates, backups, and security checks.</li>
                      <li>Answered tickets and dealt with clients' web hosting concerns.</li>
                    </ul>
                  </div>
                </div>
                )}

                {/* For item 2 */}
                {clickedItem === 2 && (
                  <div>
                    <p><strong>FullStack Development:</strong></p>
                    <div>
                        <ul>
                        <li>Developed both front-end and back-end features for web applications.</li>
                        <li>Worked with databases, API integration, and cloud-based hosting platforms.</li>
                        </ul>
                    </div>
                  </div>
                )}

                {/* For item 3 */}
                {clickedItem === 3 && (
                  <div>
                    <p><strong>Teaching and Mentoring:</strong></p>
                    <div>
                        <ul>
                        <li>Instructed students on the fundamentals of coding using Python ,JavaScript, C# , Swift and C++.</li>
                        <li>Created interactive learning modules to enhance student engagement.</li>
                        </ul>
                    </div>
                    
                  </div>
                )}

                {clickedItem === 4 && (
                  <div>
                    <p><strong>Web Development:</strong></p>
                    <div>
                        <ul>
                        <li>Maintained websites with Wordpress, Shopify and Wix.</li>
                        <li>Ocassionally woudl use Figma and Photoshop</li>
                        </ul>
                    </div>
                    
                  </div>
                )}
                {clickedItem === 5 && (
                  <div>
                    <p><strong>Web Development:</strong></p>
                    <div>
                        <ul>
                        <li>Made frontend changes to the website in Angular , implemented bootstrap.</li>
                        <li>This was part of a software engineering project for college.</li>
                        </ul>
                    </div>
                  </div>
                )}
                {clickedItem === 6 && (
                  <div>
                    <p><strong>IT Helpdesk:</strong></p>
                    <div>
                        <ul>
                        <li>Would respond to tickets regarding PC issues for Mohawk employees.</li>
                        <li>Would also be responsible for lending out laptops for laptop rentals.</li>
                        </ul>
                    </div>
                    
                  </div>
                )}
              </p>
              <button
                className="absolute top-2 right-2 text-xl text-red-500"
                onClick={handleClose}
              >
                X
              </button>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default WorkSection;
