// import React, { useEffect } from 'react';
// import { Navbar } from './Components/Navbar';
// import Acceuil from './Components/Sections/Acceuil'
// import Apropos from './Components/Sections/Apropos'
// import Prqnous from './Components/Sections/Prqnous'
// import Gammes from './Components/Sections/Gammes'
// import Produits from './Components/Sections/Produits'
// import Contact from './Components/Sections/Contact'
// import Footer from './Components/Footer'
// function App() {


//   useEffect(() =>{
//     let sections = document.querySelectorAll('section')
//     let navLinks = document.querySelectorAll('nav a')
    
//     window.onscroll = () => {
//         sections.forEach(sec => {
//             let top = window.scrollY;
//             let offset = sec.offsetTop - 150;
//             let height = sec.offsetHeight;
//             let id = sec.getAttribute('id');
//             if(top >= offset && top < offset + height) {
//                 navLinks.forEach(links => {
//                     links.classList.remove('active');
//                     document.querySelector('nav a[href*=' + id + ']').classList.add('active');
//                 });
//             };
//         });
//     };
//   },[])
  
//   return (
//     <div>
//       <Navbar />
//     <main className='px-4 md:px-8 lg:px-12'>
//       <Acceuil />
//       <Apropos />
//       <Prqnous />
//       <Gammes />
//       <Produits />
//       <Contact />
//     </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;





import React, { useEffect } from 'react';
import { Navbar } from './Components/Navbar';
import Acceuil from './Components/Sections/Acceuil';
import Apropos from './Components/Sections/Apropos';
import Prqnous from './Components/Sections/Prqnous';
import Gammes from './Components/Sections/Gammes';
import Produits from './Components/Sections/Produits';
import Contact from './Components/Sections/Contact';
import Footer from './Components/Footer';

function App() {
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
            links.className = "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          });
          document.querySelector(`nav div ul li a[href="#${id}"]`).classList.add('block', 'py-2', 'px-3', 'md:p-0', 'text-white', 'rounded', 'bg-blue-700', 'md:bg-transparent', 'md:text-blue-700', 'md:dark:text-blue-500');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
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
