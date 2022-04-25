import React from 'react'
import { BsCheck } from 'react-icons/bs'

const webDevServices = [
  'Customized personal website.',
  'E-commerce website.',
  'Any system (PM me).',
  'Lorem, ipsum dolor sit amet.',
  'Lorem, ipsum dolor sit amet.',
  'Lorem, ipsum dolor sit amet.',
];

const web3Services = [
  'Basic mint page.',
  'Create customized token.',
  'Transfer token page.',
  'Lorem, ipsum dolor sit amet.',
  'Lorem, ipsum dolor sit amet.',
  'Lorem, ipsum dolor sit amet.',
];

const collaboration = [
  'Interested in building a web3 casino.',
  'Welcome any collaborators who are interested.',
  'Prefably possess skills in Solidity and React.',
  'We will build a billion-dollar empire tgt.',
  'Lorem, ipsum dolor sit amet.',
  'Lorem, ipsum dolor sit amet.',
];

const ServiceWrapper = ({ title, services }) => (
  <article className="service">
    <div className="service__head mb-3">
      <h3>{title}</h3>
    </div>

    <ul className="service__list p-2">
      {services.map((service) => (
        <li key={service} className='d-flex gap-3 mb-3'>
          <BsCheck className='service__list-icon mt-1' />
          <p>{service}</p>
        </li>
      ))}
    </ul>
  </article>
);

// Main Services Section
const Services = () => {
  return (
    <section id='services' className='pt-5'>
      <h5 className='pt-5'>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <ServiceWrapper title='Web Development' services={webDevServices} />
        <ServiceWrapper title='Web 3.0' services={web3Services} />
        <ServiceWrapper title='Collaboration' services={collaboration} />
      </div>
    </section>
  )
}

export default Services