import PropTypes from 'prop-types';

// Importa le immagini dei progetti
import project1Image from '../assets/projects/Clone Medium.png';  
import project2Image from '../assets/projects/Card Spiderman.png';
import project3Image from '../assets/projects/Clone Benchmark Epicode.png';
import project4Image from '../assets/projects/Clone Netflix.png';
import project5Image from '../assets/projects/Clone AirB&B.png';
import project6Image from '../assets/projects/E-commenrce Libri.png';
import project7Image from '../assets/projects/Clone Linkedin.png';
import project8Image from '../assets/projects/Prototipo Gestionale:E-commerce.png';

function ProjectCard({ project, index }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-black rounded-xl p-6 mb-8`}>
        <div className="w-full md:w-1/2 shadow-lg">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto rounded-lg object-cover border border-primary"
          />
        </div>
        
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-primary">{project.title}</h2>
          <p className="text-gray-400 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 bg-[#ff3333] text-white rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Clone Medium",
      description: "Clone di una vecchia homepage di Medium realizzato durante il mio percorso di studi da Epicode.",
      image: project1Image,
      technologies: ["HTML", "Css",]
    },
    {
      id: 2,
      title: "Card Spiderman",
      description: "Card realizzata sempre durante il corso, doveva essere solo una card su html e css ma dopo aver studiato js ho implementato delle funzioni per ingrandire la card creare delle ragnatele e con un audio, il tutto accade quando si va in hover sulla card. Pagina online : lezione-3-card.vercel.app",
      image: project2Image,
      technologies: ["HTML", "Css", "JS"]
    },
    {
      id: 3,
      title: "Clone Benchmark Epicode",
      description: "Replica del sito di benchmark Epicode. La pagina è funzionante dopo il click sulla checkbox appare il bottone per avviare il benchmark di 10 domande, con differenti pagine finali in base a come viene superato il test.",
      image: project3Image,
      technologies: ["HTML", "Css", "JS"]
    },
    {
      id: 4,
      title: "Clone Netflix",
      description: "Interfaccia clone di Netflix con navigazione e presentazione del catalogo barra di ricerca che appare al click della sua icona ed hover sulle copertine.",
      image: project4Image,
      technologies: ["HTML", "Css", "JS"]
    },
    {
      id: 5,
      title: "Clone AirB&B",
      description: "Riproduzione dell'interfaccia AirB&B con focus su design e user experience.",
      image: project5Image,
      technologies: ["HTML", "Css", "JS"]
    },
    {
      id: 6,
      title: "E-commerce Libri",
      description: "Piattaforma e-commerce per la vendita di libri con carrello e gestione acquisti.",
      image: project6Image,
      technologies: ["React", "Boostrap",]
    },
    {
      id: 7,
      title: "Clone Linkedin",
      description: "Replica delle funzionalità principali di Linkedin, Putroppo il db non era più funzionante e quindi non si può vedere la foto profilo caricata e l'esperienze.",
      image: project7Image,
      technologies: ["React", "Bootstrap", "Node.js", "Express", "MongoDB"]
    },
    {
      id: 8,
      title: "Gestionale Birrificio",
      description: "Applicazione che combina gestione aziendale, magazzino, ordini, ricette e piattaforma e-commerce per un birrificio con dashboard user e admin, nella home l'admin puo caricare foto nel carosello in autonomia e rispondere ai commenti sotto i suoi prodotti in vetrina, l'user puo commentare, mettere like e prenotare. Prototipo realizzato come progetto finale del corso esteticamente non è stato sistemato perchè doveva essere un prototipo da far provare e poi personalizzare",
      image: project8Image,
      technologies: ["React", "Bootstrap", "Node.js", "Express", "MongoDB"]
    }
  ];

  return (
    <div className="bg-[#090707] min-h-screen pb-12 pt-20">
      <h1 className="text-5xl font-semibold text-center mb-12 text-primary">I Miei Progetti</h1>
      {projects.map((project, index) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          index={index} 
        />
      ))}
    </div>
  );
}