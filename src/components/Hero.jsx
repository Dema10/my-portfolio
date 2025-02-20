import { useState } from 'react';
import TypewriterText from "./TypewriterText";
import PropTypes from 'prop-types';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Apri il Google Form in una nuova finestra
    const googleFormBaseUrl = ('https://docs.google.com/forms/d/e/1FAIpQLSfIhkrum90O0XSfdhh8nZQuwQ4y_F2sE2XI0ZRiD0EIgaVB4Q/viewform?usp=sharing');

    // Parametri di prefill (da personalizzare con gli ID dei campi del tuo form)
    const prefillParams = new URLSearchParams({
      'entry.1630792106': formData.name,     // Nome
      'entry.1061494174': formData.email,    // Email
      'entry.1635898182': formData.message   // Messaggio
    });

    // Apri il Google Form prefillato in una nuova finestra
    window.open(`${googleFormBaseUrl}?${prefillParams}`, '_blank');
    
    // Resetta il form e chiudi la modale
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#1A1A1A] p-8 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-white">Contattami</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
              className="bg-primary text-black px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Invia
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
