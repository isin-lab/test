import React from 'react';
import './about.css'



const dataAbout = [
	{ count: '2', text: 'Города присутствия:\nСанкт-Петербург и Москва' },
	{ count: '>30', text: 'Лет среди лидеров рынка' },
	{ count: '100', text: 'Домов и бань сдаём ежегодно' },
]

const ItemAbout = ({ card }) => {
	const { count, text } = card

	return (
		<div className='itemAbout'>
			<div className='counterBox'>
				<span className='counterItemAbout'>{count}</span>
			</div>
			<div className='itemText'>
				<span className='textItemAbout'>{text}</span>
			</div>
		</div>
	)
}

const About = () => {
	return (
		<section className='sectionAbout'>
			<h2 className='titleSectionAbout'>о компании</h2>

			<div className='containerItemAbout'>
				{dataAbout?.map((item, idx) => (
					<ItemAbout key={idx} card={item} />
				))}
			</div>
		</section>
	)
}

 
export default About;