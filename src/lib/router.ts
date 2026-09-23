import { useEffect, useState } from 'react';

const PROJECT_PREFIX = '#projet/';
const FROM_HOME_KEY = 'mf-opened-from-home';

export type Route = { kind: 'home' } | { kind: 'project'; id: string };

function parse(hash: string): Route {
  if (hash.startsWith(PROJECT_PREFIX)) {
    const id = decodeURIComponent(hash.slice(PROJECT_PREFIX.length));
    if (id) return { kind: 'project', id };
  }
  return { kind: 'home' };
}

/** Routeur minimal sur le hash : chaque fiche projet a son adresse, le retour navigateur fonctionne. */
export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parse(window.location.hash));

  useEffect(() => {
    const onChange = () => setRoute(parse(window.location.hash));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}

export const projectHref = (id: string) => `${PROJECT_PREFIX}${id}`;

/** Ouvre une fiche depuis la page d'accueil (mémorise l'origine pour le retour). */
export function openProject(id: string) {
  try {
    sessionStorage.setItem(FROM_HOME_KEY, '1');
  } catch {
    /* stockage indisponible */
  }
  window.location.hash = projectHref(id);
}

/** Retour vers les projets : historique si on vient du site, sinon ancre #projects (lien partagé). */
export function backToProjects() {
  let fromHome = false;
  try {
    fromHome = sessionStorage.getItem(FROM_HOME_KEY) === '1';
    sessionStorage.removeItem(FROM_HOME_KEY);
  } catch {
    /* stockage indisponible */
  }
  if (fromHome) {
    window.history.back();
  } else {
    window.location.hash = '#projects';
  }
}
