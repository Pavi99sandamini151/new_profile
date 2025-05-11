const projects = [
  { title: 'Portfolio Website', description: 'Personal site built with React and Tailwind.' },
  { title: 'Task Tracker', description: 'Full-stack CRUD app with Express & MongoDB.' }
];

const Projects = () => (
  <section id="projects" className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, i) => (
        <div key={i} className="p-6 bg-white rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;