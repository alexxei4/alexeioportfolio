import { motion } from 'framer-motion';

const SkillCard = ({ title, skillLevel }) => {
  const numDots = 5;
  const filledDots = Math.floor(skillLevel * numDots);

  return (
    <motion.div
      className="bg-gray-900 text-white rounded-lg shadow-lg p-6 w-48 h-48 flex flex-col items-center justify-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'tween', duration: 0.3 }}
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="flex space-x-2">
        {[...Array(numDots)].map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index < filledDots ? 'bg-green-500' : 'bg-gray-500'
            }`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'tween', duration: 0.3, delay: index * 0.1 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">
        <SkillCard title="Laravel" skillLevel={0.8} />
        <SkillCard title="Next.Js" skillLevel={0.7} />
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