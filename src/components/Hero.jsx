import { useState } from 'react';
import TypewriterText from "./TypewriterText";
import PropTypes from 'prop-types';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Utilizzo di FormSubmit per inviare i dati
      const formData = new FormData(e.target);
      
      await fetch('https://formsubmit.co/gabrieledema95@gmail.com', {
        method: 'POST',
        body: formData
      });
      
      // Mostro messaggio di successo
      setIsSubmitted(true);
      
      // Reset del form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Chiudi la modale dopo 2 secondi
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
      }, 2000);
    } catch (error) {
      console.error('Errore nell\'invio del form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#1A1A1A] p-8 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-white">Contattami</h2>
        
        {isSubmitted ? (
          <div className="text-center py-8">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <p className="text-xl text-white">Messaggio inviato con successo!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Campo nascosto per FormSubmit */}
            <input type="hidden" name="_subject" value="Nuovo messaggio dal portfolio" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div>
              <label htmlFor="name" className="block text-gray-400 mb-2">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#2C2C2C] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#2C2C2C] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-400 mb-2">Messaggio</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-[#2C2C2C] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-black px-6 py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? 'Invio in corso...' : 'Invia'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-400 hover:text-white"
              >
                Annulla
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

// Aggiungi la validazione dei prop
ContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-full max-w-[1000px] mx-auto bg-black min-h-[550px] text-white px-4 md:px-10 flex justify-center items-center">
        <div className="w-full max-w-[600px]">
          <div className="text-4xl md:text-7xl italic font-semibold text-start">
            <p>👋 Ciao,</p>
            <p>io sono <span className="inline"><span className="text-primary">G</span>abriele,</span></p>
            <TypewriterText />
            <p className="text-sm md:text-lg font-normal pt-1 text-gray-500">Full Stack Developer / Stack Mern</p>
          </div>
          <div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-primary px-4 md:px-[20px] py-2 md:py-[10px] rounded-xl mt-6 md:mt-10 text-base md:text-xl"
            >
              contattami
            </button>
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
