import React from 'react';
import './career.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import user1 from './userImg/user1.png'
import user2 from './userImg/user2.png'
import user3 from './userImg/user3.png'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const dataUsers = [
	{
		image: user1,
		user: 'Олег Воробьёв',
		position: 'Прораб',
		text: [
			'В Компании с 2018 года. Начал с позиции плотника в строительной бригаде',
			'В течение года работы Олег стал бригадиром и был приглашён в офис Компании на должность штатного Производителя строительных работ.',
			'На данный момент в Его подчинении находятся 9 строительных бригад. Олег вносит весомый вклад в итоговый результат Компании, а это реализация 100 объектов в год!',
		],
	},
	{
		image: user2,
		user: 'Мария Обухова',
		position: 'Руководитель финансовой службы',
		text: [
			'В декабре 2018 года заступилa на должность Менеджера отдела продаж.',
			'После 9 месяцев стабильных результатов, зарекомендовав себя как надёжный сотрудник, получил ответственную должность Логиста.',
			'Через год Даниил занял должность Специалиста службы снабжения, взяв на себя помимо закупа материала ещё и крайне важную роль Сметчика.',
		],
	},
	{
		image: user3,
		user: 'Даниил Басенков',
		position: 'Менеджер по снабжению',
		text: [
			'В декабре 2018 года заступил на должность Менеджера отдела продаж.',
			'После 9 месяцев стабильных результатов, зарекомендовав себя как надёжный сотрудник, получил ответственную должность Логиста.',
			'Через год Даниил занял должность Специалиста службы снабжения, взяв на себя помимо закупа материала ещё и крайне важную роль Сметчика.',
		],
	},
]


const MySwiperUser = ({ data }) => {
	return (
		<div className='containerSlider'>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={0}
				slidesPerView={1}
				navigation
			>
				{data.map(el => {
					return (
						<SwiperSlide>
							<div className='containerImageSlide'>
								<img className='imgUser' src={el.image} alt='img' />
								<h2 className='nameUser'>{el.user}</h2>
								<p className='position'>{el.position}</p>
								<ul>
									<li className='itemTextUser'>{el.text[0]}</li>
									<li className='itemTextUser'>{el.text[1]}</li>
									<li className='itemTextUser'>{el.text[2]}</li>
								</ul>
							</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}

const Career = () => {
  return (
		<section className='sectionCareer'>
			<h2 className='titleSectionCareer'>Карьерный рост</h2>
			<h3 className='textHeaderCareer'>
				Наша Компания является ярким примером, где достойные люди смело и
				заслуженно поднимаются по карьерной лестнице.
			</h3>
			<h3 className='textHeaderCareer'>
				Мы ценим стремление к развитию и предоставляем все необходимые для этого
				условия.
			</h3>
			<MySwiperUser data={dataUsers}/>
		</section>
	)
}
 
export default Career;