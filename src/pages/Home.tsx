import type { ReactNode } from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Journey from '../components/sections/Journey';
import Credentials from '../components/sections/Credentials';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

const sections: Record<string, () => ReactNode> = {
  home: () => <Hero />,
  projects: () => <Projects />,
  skills: () => <Skills />,
  journey: () => <Journey />,
  credentials: () => <Credentials />,
  about: () => <About />,
  contact: () => <Contact />,
};

/** En développement, `?section=skills` monte une seule section pour la relire sans défiler. */
function devSection(): string | null {
  if (!import.meta.env.DEV) return null;
  const s = new URLSearchParams(window.location.search).get('section');
  return s && s in sections ? s : null;
}

export default function Home() {
  const only = devSection();
  return (
    <Layout>
      {only ? sections[only]() : Object.entries(sections).map(([id, render]) => <div key={id}>{render()}</div>)}
    </Layout>
  );
}
