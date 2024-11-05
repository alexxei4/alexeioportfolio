// src/components/ProjectCard.js
import React from 'react';
import Link from 'next/link';

const ProjectCard = ({ title, description, link }) => {
    return (
        <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2">{description}</p>
            <a href={link} className="text-blue-500 underline">View Project</a>
        </div>
    );
};

console.log(ProjectCard);


export default ProjectCard;
