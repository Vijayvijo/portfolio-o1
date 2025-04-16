import React from 'react';
import './Testimonials.css';
import Image3 from '../../assets/avatar-3.svg'
import Image4 from '../../assets/avatar-4.svg'

import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

	const data = [
		{
			id: 1,
			image: Image4,
			title: "Sam",
			subtitle: "Founder @ SuperLabs",
			comment: "Sam was our frontend wizard at BrightPixels. Anytime we had a tricky layout or needed some pixel-perfect styling, he always had the solution. His attention to detail and ability to bring designs to life made him invaluable to the team.",
		},
		{
			id: 2,
			image: Image3,
			title: "Ravi",
			subtitle: "Frontend Developer @ FNB",
			comment: "Ravi was the go-to guy at NexaTech whenever something complex came up in React or Node. Whether it was optimizing performance or structuring the backend APIs efficiently, he nailed it every time. Calm under pressure and always willing to help.",
		},
	];

	return (
		<section className="testimonials container section">

			<h2 className="section__title">Testimonials</h2>

			<Swiper className="testimonial__container grid"
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				grabCursor={true}
				pagination={{ clickable: true }}>
				{data.map(({ id, image, title, subtitle, comment }) => {
					return (
						<SwiperSlide className="testimonial__item" key={id}>
							<div className="thumb">
								<img src={image} alt="" />
							</div>
							<h3 className="testimonial__title">{title}</h3>
							<span className="subtitle">{subtitle}</span>
							<div className="comment">{comment}</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials