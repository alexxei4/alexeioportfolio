import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import '../styles/globals.css';


const SkillCard = ({ title, skillLevel }) => {
  const numDots = 5; // Total dots per skill
  const filledDots = Math.floor(skillLevel * numDots); // Dots filled based on skill level

  return (
    <motion.div
      className="flex flex-col items-center mb-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      
  

      
      {/* Skill Title */}
      <h3
        className="text-center mb-2"
        style={{
          color: '#FFFCE1',
          fontFamily: 'Helvetica Neue, sans-serif',
          fontWeight: 300,
          fontSize: '2rem',
        }}
      >
        {title}
      </h3>

      {/* Dots for Skill Level */}
      <div className="flex space-x-1">
        {[...Array(numDots)].map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index < filledDots ? 'bg-[#07d3ba]' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section  id="skills" 
      className="py-16"
      style={{
        backgroundColor: 'black', // Adjust this color to match your last two sections
      }}
    >
      <h2
        className="text-center mb-8"
        style={{
          color: '#FFFCE1',
          fontFamily: 'Helvetica Neue, sans-serif',
          fontWeight: 300,
          fontSize: '2rem',
        }}
      >
        My Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        <SkillCard title="Laravel" skillLevel={0.8} />
        <SkillCard title="Next.js" skillLevel={0.7} />
        <SkillCard title="Vue" skillLevel={0.7} />
        <SkillCard title="ASP.Net" skillLevel={0.7} />
        <SkillCard title="React" skillLevel={0.7} />
        <SkillCard title="Angular" skillLevel={0.6} />
        <SkillCard title="Python" skillLevel={0.6} />
        <SkillCard title="Kotlin" skillLevel={0.5} />
        <SkillCard title="Swift" skillLevel={0.5} />
        <SkillCard title="DevOps" skillLevel={0.2} />
        <SkillCard title="AWS Fundamentals" skillLevel={0.2} />
      </div>
    </section>
  );
};

export default Skills;
