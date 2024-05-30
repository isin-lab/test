import React, { useState } from 'react';
import './products.css'
import { ButtonSelectTwo } from '../../components/button/Button'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import ba from './testImages/ba.webp'
import bb from './testImages/bb.webp'
import bc from './testImages/bc.webp'
import ha from './testImages/ha.webp'
import hb from './testImages/hb.webp'
import hc from './testImages/hc.webp'

const items = [[ba, bb, bc], [ha, hb, hc]]

const MySwiper = ({ active }) => {
	return (
		<div className='containerSlider'>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={0}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				// scrollbar={{ draggable: false }}
			>
				{active.map(el => {
					return (
						<SwiperSlide>
							<div className='containerImageSlide'>
								<img className='imgSlide' src={el} alt='img' />
							</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}


const Products = () => {
  const [activeItem, setActiveItem] = useState('bath')
  

		return (
			<section className='sectionProducts'>
				<h2 className='titleSectionProducts'>Продукты компании</h2>
				<div className='selectProduct'>
					<ButtonSelectTwo
						text='БАНИ'
						itemName='bath'
						activeItem={activeItem}
						setActiveItem={setActiveItem}
					/>
					<ButtonSelectTwo
						text='ДОМА'
						itemName='home'
						activeItem={activeItem}
						setActiveItem={setActiveItem}
					/>
				</div>

				{activeItem === 'bath' ? <MySwiper active={items[0]} /> : null}
				{activeItem === 'home' ? <MySwiper active={items[1]} /> : null}
			</section>
		)
}
 
export default Products;