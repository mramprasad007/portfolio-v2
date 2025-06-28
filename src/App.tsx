import Hero from './components/Hero';
import About from './components/About';
import Roles from './components/Roles';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function App() {
  return (
    <main className="font-sans scroll-smooth">
      <Hero />
      <About />
      <Roles />
      <Skills />
      <Experience />
      <Certifications />
      <Testimonials />
      <Contact />
    </main>
  );
}
