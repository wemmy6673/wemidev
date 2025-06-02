import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import DeveloperTasks from './components/DeveloperTasks';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Skills />
      <DeveloperTasks />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
