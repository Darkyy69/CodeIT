import React, { useEffect } from 'react'

const CardWithImage = ({imgSrc, header, body, idRef}) => {

    const cardClick = () => {
        switch (idRef) {
            case "#app-web-custom":
                document.getElementById('app-web-custom').click();
                console.log("You Clicked App Web Custom Button");
                break;
            case "#app-web-standard":
                document.getElementById('app-web-standard').click();
                console.log("You Clicked App Web Standard Button");
                break;
            case "#app-mobile":
                document.getElementById('app-mobile').click();
                console.log("You Clicked App Mobile Button");
                break;
            case "#vitrine-dynamique":
                document.getElementById('vitrine-dynamique').click();
                console.log("You Clicked Vitrine Dynamique Button");
                break;

        }
    }

  return (

    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 duration-300">
        <a href='#produits' className='cursor-pointer' onClick={cardClick}>
            <img className="rounded-t-lg h-64 w-full hover:scale-110 duration-300" src={imgSrc} alt="" />
        </a>
        <div className="p-5">
            <a href='#produits' className='cursor-pointer' onClick={cardClick}>
                <h5 className="mb-2 w-[355px] text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{header}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{body}</p>
            {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a> */}
        </div>
    </div>

  )
}

export default CardWithImage