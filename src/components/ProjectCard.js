const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer" 
        className="text-blue-500 hover:text-blue-700 underline mt-2 inline-block"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;