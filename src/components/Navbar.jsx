import  { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 20) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <>
        <nav className={`w-full bg-[#090707] border-b border-primary transition-all duration-300 shadow-[0_4px_10px_-2px_#ff3333] ${isScrolled ? 'fixed top-0 z-50 py-2' : 'py-4'}`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-center items-center">
                <img 
                src={logo} 
                alt="Dema Logo" 
                className={`transition-all duration-300 ${isScrolled ? 'w-40' : 'w-52'}`}
                />
            </div>
          </div>
        </nav>
        {isScrolled && <div className="h-16" />}
      </>
    );
  };
  export default Navbar;