export default function Header() {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="text-xl font-bold text-red-600">&lt;DuyKhánh.PTIT /&gt;</span>
        <nav className="flex space-x-6 text-sm font-medium text-gray-600">
          <a href="#about" className="hover:text-red-600">Giới thiệu</a>
          <a href="#skills" className="hover:text-red-600">Kỹ năng</a>
          <a href="#projects" className="hover:text-red-600">Dự án</a>
        </nav>
      </div>
    </header>
  );
}