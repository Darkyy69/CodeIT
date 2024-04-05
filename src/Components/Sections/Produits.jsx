import React, { useState } from 'react';

const Produits = () => {
  const [category, setCategory] = useState('all');

  const filterImages = (category) => {
    setCategory(category);
  };

  return (
    <section id='produits' className='flex flex-col justify-center items-center pt-32'>
      <h2 className="text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Nos Produits</h2>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button type="button" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800" onClick={() => filterImages('all')}>All categories</button>
        <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800" onClick={() => filterImages('shoes')}>Shoes</button>
        <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800" onClick={() => filterImages('bags')}>Bags</button>
        <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800" onClick={() => filterImages('electronics')}>Electronics</button>
        <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800" onClick={() => filterImages('gaming')}>Gaming</button>
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
const images = [
  { id: 'shoes-1', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg' },
  { id: 'shoes-2', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
  { id: 'bags-1', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
  { id: 'electronics-1', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
  { id: 'gaming-1', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
  { id: 'gaming-2', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' },
  { id: 'shoes-3', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg' },
  { id: 'bags-2', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg' },
  { id: 'bags-3', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg' },
  { id: 'electronics-2', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg' },
  { id: 'electronics-3', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg' },
  { id: 'gaming-3', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg' },
];

export default Produits;
