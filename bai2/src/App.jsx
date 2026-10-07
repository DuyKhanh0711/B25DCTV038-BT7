import Header from './components/Header';
import Section from './components/Section';
import SkillsList from './components/SkillsList';
import ProjectCard from './components/ProjectCard';
import { skillsData, projectsData } from './data/cvData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header />

      <Section title="Giới thiệu bản thân">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center max-w-2xl mx-auto shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900">Phạm Văn Duy Khánh</h1>
          <p className="text-red-600 font-semibold mb-3">Sinh viên năm 2 - PTIT</p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Đam mê phát triển ứng dụng Web, tư duy thuật toán và xây dựng các phần mềm tối ưu trải nghiệm người dùng.
          </p>
        </div>
      </Section>

      <Section title="Kỹ năng chuyên môn">
        <SkillsList skills={skillsData} />
      </Section>

      <Section title="Dự án cá nhân">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsData.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      </Section>
    </div>
  );
}

export default App;