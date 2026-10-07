export default function Section({ title, children }) {
  return (
    <section className="py-12 max-w-6xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <div className="w-16 h-1 bg-red-600 mx-auto mt-2 rounded-full"></div>
      </div>
      {children}
    </section>
  );
}