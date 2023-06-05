import trybetunes from '../assets/projects-pages/trybetunes.png';
import tryunfo from '../assets/projects-pages/tryunfo.png';
import solarsystem from '../assets/projects-pages/solarsystem.png';

export const projectsData = [
  {
    id: 1,
    name: 'TrybeTunes',
    description: 'Aplicação capaz de reproduzir músicas, criar lista de favoritas,'
    + 'editar perfil de usuário, consumindo dados de uma API',
    repository: 'https://github.com/victoreliel/trybetunes',
    demo: 'https://trybetunes-vefm.vercel.app/',
    image: trybetunes,
  },
  {
    id: 2,
    name: 'Tryunfo',
    description: 'Aplicação capaz de criar cartas no estilo de jogo Super Trunfo',
    repository: 'https://github.com/victoreliel/tryunfo',
    demo: 'https://tryunfo-vefm.vercel.app/',
    image: tryunfo,
  },
  {
    id: 3,
    name: 'Solar System',
    description: 'Aplicação capaz de listar missões espaciais através de uma API',
    repository: 'https://github.com/victoreliel/solar-system',
    demo: 'https://solarsystem-vefm.vercel.app/',
    image: solarsystem,
  },
];

export default projectsData;
