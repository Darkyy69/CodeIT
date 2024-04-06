import React, { useEffect, useRef } from 'react';
import { Navbar } from './Components/Navbar';
import Acceuil from './Components/Sections/Acceuil';
import Apropos from './Components/Sections/Apropos';
import Prqnous from './Components/Sections/Prqnous';
import Gammes from './Components/Sections/Gammes';
import Produits from './Components/Sections/Produits';
import Contact from './Components/Sections/Contact';
import Footer from './Components/Footer';

function App() {
  const hamburgerBackdropRef = useRef(null);

  const hamburgerBackdropClick = () => {
    document.getElementById('hamburger-btn').click()
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav a');

      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            links.className = "block py-2 px-3 lg:p-0 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
          });
          document.querySelector(`nav div ul li a[href="#${id}"]`).classList.add('block', 'py-2', 'px-3', 'lg:p-0', 'text-white', 'rounded', 'bg-blue-700', 'lg:bg-transparent', 'lg:text-blue-700', 'lg:dark:text-blue-500');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='bg-white dark:bg-gray-900'>
      <Navbar hamburgerBackdropRef={hamburgerBackdropRef} />
      <div ref={hamburgerBackdropRef} id='hamburgerBackdrop' className="fixed bottom-0 -left-1 right-0 h-full bg-gray-900/50 dark:bg-gray-900/60 hidden" onClick={hamburgerBackdropClick}></div>
      <main className='px-4 md:px-8 lg:px-12'>
        <Acceuil />
        <Apropos />
        <Prqnous />
        <Gammes />
        <Produits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
