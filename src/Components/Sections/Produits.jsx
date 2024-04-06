import React, { useState } from 'react';

const Produits = () => {
  const [category, setCategory] = useState('all');
  const [activeButton, setActiveButton] = useState('all');

  const filterImages = (category) => {
    setCategory(category);
    setActiveButton(category);
  };

  const getButtonClass = (buttonCategory) => {
    if (buttonCategory === activeButton) {
      return "text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900";
    } else {
      return "text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800";
    }
  };

  return (
    <section id='produits' className='flex flex-col justify-center items-center pt-32'>
      <h2 className="text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Nos Produits</h2>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button type="button" id='all' className={getButtonClass('all')} onClick={() => filterImages('all')}>Tous les catégories</button>
        <button type="button" id='app-web-custom' className={getButtonClass('app-web-custom')} onClick={() => filterImages('app-web-custom')}>App Web Personalisée</button>
        <button type="button" id='app-web-standard' className={getButtonClass('app-web-standard')} onClick={() => filterImages('app-web-standard')}>App Web Standarisée</button>
        <button type="button" id='app-mobile' className={getButtonClass('app-mobile')} onClick={() => filterImages('app-mobile')}>App Mobile</button>
        <button type="button" id='vitrine-dynamique' className={getButtonClass('vitrine-dynamique')} onClick={() => filterImages('vitrine-dynamique')}>Vitrine Dynamique</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} style={{ display: category === 'all' || image.id.includes(category) ? 'block' : 'none' }}>
            <img className="h-auto max-w-full rounded-lg" src={image.src} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}

// Example image data
import appWebCustom1 from '../../assets/Products/CustomAppWeb/customappweb1.jpg'
import appWebCustom2 from '../../assets/Products/CustomAppWeb/customappweb2.jpg'
import appWebCustom3 from '../../assets/Products/CustomAppWeb/customappweb1.jpg'
import appWebStandard1 from '../../assets/Products/StandardAppWeb/standardappweb1.jpg'
import appWebStandard2 from '../../assets/Products/StandardAppWeb/standardappweb1.jpg'
import appWebStandard3 from '../../assets/Products/StandardAppWeb/standardappweb1.jpg'
import appMobile1 from '../../assets/Products/AppMobile/appmobile1.jpg'
import appMobile2 from '../../assets/Products/AppMobile/appmobile1.jpg'
import appMobile3 from '../../assets/Products/AppMobile/appmobile5.png'
import vitrineDynamique1 from '../../assets/Products/VitrineDynamique/vitrine2.jpg'
import vitrineDynamique2 from '../../assets/Products/VitrineDynamique/vitrine4.jpg'
import vitrineDynamique3 from '../../assets/Products/VitrineDynamique/vitrine1.jpg'

const images = [
  { id: 'vitrine-dynamique-1', src: vitrineDynamique1 },
  { id: 'vitrine-dynamique-2', src: vitrineDynamique2 },
  { id: 'vitrine-dynamique-3', src: vitrineDynamique3 },
  { id: 'app-mobile-1', src: appMobile1 },
  { id: 'app-mobile-2', src: appMobile2 },
  { id: 'app-mobile-3', src: appMobile3 },
  { id: 'app-web-custom-1', src: appWebCustom1 },
  { id: 'app-web-custom-2', src: appWebCustom2 },
  { id: 'app-web-custom-3', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg' },
  { id: 'app-web-standard-1', src: appWebStandard1 },
  { id: 'app-web-standard-2', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg' },
  { id: 'app-web-standard-3', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg' },
];

export default Produits;
