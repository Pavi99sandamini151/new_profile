import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans">
      <Header />
      <main className="px-4 md:px-16 py-8 space-y-20">
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;