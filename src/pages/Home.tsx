import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Journey from '../components/sections/Journey';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}
