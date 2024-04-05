import React from 'react'
import svgimg from '../../assets/Delivery.svg'
import test from '../../assets/Formation.svg'
import vitrine from '../../assets/vitrine-dynamique.jpg'

import HorizontalCardWithImage from '../Re_usable/HorizontalCardWithImage'

const Prqnous = () => {

  const card1 = { img: svgimg, title: 'Experience', description: 'Avec une expérience de plus de 10 ans dans le domaine informatique et technologique, CodeIT apporte un niveau de savoir-faire et de fiabilité éprouvé à chaque projet.' }
  const card2 = { img: test, title: "Engagement envers l'excellence", description: "Nous nous engageons à fournir des produits et services de la plus haute qualité à nos clients. Notre équipe hautement qualifiée est dédiée à l'atteinte de l'excellence dans chaque aspect de nos services, de la conception au déploiement." }
  const card3 = { img: svgimg, title: 'Partenariat à long terme', description: "Nous ne considérons pas nos clients comme de simples transactions. Chez CodeIT, nous nous engageons à établir des partenariats à long terme avec nos clients, en offrant un soutien continu et des solutions évolutives pour répondre à vos besoins changeants." }

  return (
    <section id='prqnous' className='flex gap-5 flex-col justify-center items-center py-32'>
      
    <HorizontalCardWithImage img={card1.img} title={card1.title} description={card1.description} />
    <HorizontalCardWithImage img={card2.img} title={card2.title} description={card2.description} />
    <HorizontalCardWithImage img={card3.img} title={card3.title} description={card3.description} />

    </section>
  )
}

export default Prqnous