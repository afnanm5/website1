// components/ProjectCard.tsx
const ProjectCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default ProjectCard;
