import React from 'react';

const Accueil = () => {
  return (
    <>
      <section id='acceuil' className='flex flex-col justify-center items-center text-center h-dvh'>
        
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"><span className="text-blue-600 dark:text-blue-500">CODEIT</span> Votre chemin vers <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">le succès</span></h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Chez CodeIT, moderniser vos outils de gestion en informatique, optimiser vos ressources matérieles et gagner en efficacité.</p>
        <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            En savoir plus
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>

      </section>
      
    </>
  );
};

export default Accueil;
