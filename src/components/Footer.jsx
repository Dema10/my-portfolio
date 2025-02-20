import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-primary py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-row-2">
          {/* Riga top */}            
          <div className="flex justify-center gap-4 mt-2 mb-4">
              <a 
                href="https://github.com/Dema10" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-primary filter hover:drop-shadow-[0_0_7px_#ff3333] hover:brightness-125 transition-all duration-300'
              >
                <Github size={30} />
              </a>
              <a 
                href="https://linkedin.com/in/demadev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-primary filter hover:drop-shadow-[0_0_7px_#ff3333] hover:brightness-125 transition-all duration-300'
              >
                <Linkedin size={30} />
              </a>
              <a 
                href="mailto:gabrieledematteis@me.com?subject=Richiesta%20Informazioni" 
                target="_blank" 
                rel="noopener noreferrer"
                className='text-primary filter hover:drop-shadow-[0_0_7px_#ff3333] hover:brightness-125 transition-all duration-300'
              >
                <Mail size={30} />
              </a>
          </div>
          {/* Riga bottom */}
          <div className="text-center mb-1">
            <p>&copy; 2025-{currentYear}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}