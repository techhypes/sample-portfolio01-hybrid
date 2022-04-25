import React from 'react'
import avatar1 from '../assets/avatar1.jpg'
import avatar2 from '../assets/avatar2.jpg'
import avatar3 from '../assets/avatar3.jpg'
import avatar4 from '../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const testimonials = [ // Testimonial data
	{
		avatar: avatar1,
		name: 'Client Name 1',
		review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae accusamus itaque quas in aliquid sunt magnam placeat aperiam nemo quaerat rem quia, reiciendis odit ullam unde sequi inventore quam impedit.',
	}, 
	{
		avatar: avatar2,
		name: 'Client Name 2',
		review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae accusamus itaque quas in aliquid sunt magnam placeat aperiam nemo quaerat rem quia, reiciendis odit ullam unde sequi inventore quam impedit.',
	}, 
	{
		avatar: avatar3,
		name: 'Client Name 3',
		review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae accusamus itaque quas in aliquid sunt magnam placeat aperiam nemo quaerat rem quia, reiciendis odit ullam unde sequi inventore quam impedit.',
	}, 
	{
		avatar: avatar4,
		name: 'Client Name 4',
		review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae accusamus itaque quas in aliquid sunt magnam placeat aperiam nemo quaerat rem quia, reiciendis odit ullam unde sequi inventore quam impedit.',
	}, 
];


const Testimonials = () => {
  return (
    <section id='testimonials' className='pt-5'>
      <h5 className='pt-5'>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="w-75 testimonials__container pb-5"
        modules={[Pagination]} spaceBetween={40} slidesPerView={1} pagination={{ clickable: true }}>
        {
          testimonials.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials