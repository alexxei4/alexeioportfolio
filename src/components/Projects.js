import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'tween', duration: 0.3 }}
    >
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
      <div className="p-4">
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is a description of Project 1.',
      imageUrl: '/project1.jpg',
    },
    {
      title: 'Project 2',
      description: 'This is a description of Project 2.',
      imageUrl: '/project2.jpg',
    },
    {
      title: 'Project 3',
      description: 'This is a description of Project 3.',
      imageUrl: '/project3.jpg',
    },
    {
      title: 'Project 4',
      description: 'This is a description of Project 4.',
      imageUrl: '/project4.jpg',
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;