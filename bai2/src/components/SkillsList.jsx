export default function SkillsList({ skills }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {skills.map((skill, index) => (
        <div key={index} className="p-4 bg-white border border-gray-200 rounded-xl text-center shadow-sm hover:shadow-md transition">
          <div className="text-3xl mb-2">{skill.icon}</div>
          <h4 className="font-bold text-sm text-gray-800">{skill.name}</h4>
          <p className="text-xs text-gray-500 mt-1">{skill.desc}</p>
        </div>
      ))}
    </div>
  );
}