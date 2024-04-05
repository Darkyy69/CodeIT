import React from 'react'

const Apropos = () => {
  return (
    <section id='apropos' className='py-32'>

      
      <h2 class="text-3xl sm:text-4xl font-bold dark:text-white">Nous Sommes</h2>
      <h2 class="text-4xl sm:text-5xl font-extrabold text-blue-600 dark:text-blue-500">CodeIT.</h2>
      {/* <p class="my-4 text-lg text-gray-500">Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.</p> */}
      {/* <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p> */}
      <p class="my-4 text-lg font-normal text-gray-500 dark:text-gray-400">CodeIT est une entreprise spécialisée dans le domaine informatique et technologique. Nous proposons à nos clients un ensemble de services de trés haute qualité, adaptée aux besions réels de l'entreprise et ses activités commerciales.</p>
      <p class="mb-6 text-gray-500 dark:text-gray-400">
        Une jeune société <strong class="font-semibold text-gray-900 dark:text-white">Algérienne</strong> de <strong class="font-semibold text-gray-900 dark:text-white">Service et d'Assistance</strong> informatique qui commence à avoir une large expérience dans une multitude de domaines, avec <strong class="font-semibold text-gray-900 dark:text-white">10+ ans</strong> de techniques éprouvées et testées, nous le mettons en oeuvre pour vos projets.
      </p>

      <p class="mb-6 text-gray-500 dark:text-gray-400">Nous offrons une large gamme de produits, tel que le développement des <strong class="font-semibold text-gray-900 dark:text-white">Applications WEB et MOBILE personalisé</strong>, ou bien des <strong class="font-semibold text-gray-900 dark:text-white">Applications de vente, Production, Transformation, Stock ...</strong><br/>
      <strong class="font-semibold text-gray-900 dark:text-white">Formations professionnelles</strong> sur les différents outils informatiques, <strong class="font-semibold text-gray-900 dark:text-white">Hébergement Web & Mailing</strong> @Société.com, Nous possédons la compétence adéquate pour améliorer votre visibilité sur les moteurs de recherches <strong class="font-semibold text-gray-900 dark:text-white">Référencement et SEO Services</strong> 
      </p>  
      <p class="mb-6 text-gray-500 dark:text-gray-400">
        {/* Nous abordons chaque projet – grand ou petit – avec le même niveau de réflexion et de soin. */}
        Nous avons une équipe axée sur la qualité et non sur la quantité, avec des experts en gestion de projet, en conception, en développement et en marketing habitués à travailler ensemble. Si c’est quelque chose qui compte pour vous, parlons-en.
      </p>

      <a href="#" class="font-satisfy inline-flex items-center text-3xl text-yellow-600 dark:text-yellow-500 hover:underline">
      Soumettez-nous une idée et nous lui donnerons vie
      <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
      </a>


    </section>
  )
}

export default Apropos