import { lazy, Suspense, useState } from 'react';
import Home from './pages/Home';
import BootSequence from './components/ui/BootSequence';
import { useHashRoute } from './lib/router';

// La fiche projet n'est chargée que lorsqu'on l'ouvre
const ProjectPage = lazy(() => import('./pages/ProjectPage'));

const BOOT_KEY = 'mf-portfolio-booted';

function hasBooted() {
  try {
    return sessionStorage.getItem(BOOT_KEY) === '1';
  } catch {
    return false;
  }
}

export default function App() {
  const route = useHashRoute();
  // Pas de séquence de démarrage quand on arrive directement sur une fiche partagée
  const [booted, setBooted] = useState(() => hasBooted() || route.kind === 'project');

  const finishBoot = () => {
    try {
      sessionStorage.setItem(BOOT_KEY, '1');
    } catch {
      /* stockage indisponible : on affiche quand même */
    }
    setBooted(true);
  };

  return (
    <>
      <div className="grain" aria-hidden />
      {!booted && <BootSequence onDone={finishBoot} />}
      {booted &&
        (route.kind === 'project' ? (
          <Suspense fallback={<div className="min-h-[100dvh] bg-background" aria-busy="true" />}>
            <ProjectPage id={route.id} />
          </Suspense>
        ) : (
          <Home />
        ))}
    </>
  );
}
