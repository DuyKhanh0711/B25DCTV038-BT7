export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 flex flex-col justify-between shadow-sm hover:shadow-lg transition">
      <div>
        <img src={project.img} alt={project.title} className="w-full h-40 object-cover" />
        <div className="p-5">
          <div className="flex gap-2 mb-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-xs px-2 py-0.5 bg-red-100 text-red-600 rounded font-medium">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-bold text-lg text-gray-800 mb-2">{project.title}</h3>
          <p className="text-gray-600 text-sm">{project.desc}</p>
        </div>
      </div>
      <div className="p-5 pt-0 flex gap-2">
        <button className="flex-1 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700">Demo</button>
        <button className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50">Code</button>
      </div>
    </div>
  );
}