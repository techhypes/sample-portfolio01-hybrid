import React from 'react'
import portfolio1 from '../assets/portfolio1.jpg'
import portfolio2 from '../assets/portfolio2.jpg'
import portfolio3 from '../assets/portfolio3.jpg'
import portfolio4 from '../assets/portfolio4.jpg'
import portfolio5 from '../assets/portfolio5.png'
import portfolio6 from '../assets/portfolio6.jpg'


const PortfolioWrapper = ({ image, title, github, youtube }) => (
  <article className="portfolio__item">
    <div className="portfolio__item-img">
      <img src={image} alt={image} />
    </div>
    <h3 className='my-4'>{title}</h3>
    <div className="d-flex justify-content-center gap-3 mb-3">
      <a href={github} className='btn' target='_blank'>Github</a>
      <a href={youtube} className='btn btn-primary' target='_blank'>Live Demo</a>
    </div>
  </article>
);

const Portfolio = () => {
  return (
    <section id='portfolio' className='pt-5'>
      <h5 className="pt-5">My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <PortfolioWrapper image={portfolio1} title='This is a portfolio title.'
          github='#'
          youtube='#' />
        <PortfolioWrapper image={portfolio2} title='This is a portfolio title.'
          github='#'
          youtube='#' />
        <PortfolioWrapper image={portfolio3} title='This is a portfolio title.'
          github='#'
          youtube='#' />
        <PortfolioWrapper image={portfolio4} title='This is a portfolio title.'
          github='#'
          youtube='#' />
        <PortfolioWrapper image={portfolio5} title='This is a portfolio title.'
          github='#'
          youtube='#' />
        <PortfolioWrapper image={portfolio6} title='This is a portfolio title.'
          github='#'
          youtube='#' />
      </div>
    </section>
  )
}

export default Portfolio