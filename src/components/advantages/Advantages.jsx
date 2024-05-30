import React, { useState } from 'react';
import './advantages.css'
import { MyIcon, MyIconClose } from '../icons/Icons'

const ItemAdvantages = ({ text, someText }) => {
	const [isActive, setIsActive] = useState(false)

	const handelClick = () => {
		setIsActive(!isActive)
	}

	return (
		<div className='cardAdvantages'>
			<div className='itemAdvantages'>
				<h2 className='textItemAdvantages'>{text}</h2>
				<button className='wrpButton' onClick={handelClick}>
					{isActive === false ? <MyIcon /> : <MyIconClose />}
				</button>
			</div>
			
			{isActive === true ? <p className='someText'>{someText}</p> : null}
			
		</div>
	)
}


const Advantages = () => {
  return (
		<section className='sectionAdvantages'>
			<h2 className='titleSectionAdvantages'>Преимущества Компании</h2>
			<ItemAdvantages
				text='Качество продукта'
				someText='Мы гордимся результатами своей работы! Мы убеждены, что именно
					качество — это самое главное, это то, что даёт Нам уверенность в
					завтрашнем дне.'
			/>
			<ItemAdvantages
				text='Популярность бренда в сети'
				someText='Мы занимаем высокие позиции в поисковой выдаче и имеем многочисленные отзывы, привлекающие новых заказчиков независимо от времени года.'
			/>
			<ItemAdvantages
				text='Передовое рабочее место'
				someText='Комфортный офис в центре г. Санкт-Петербург, оборудованный передовыми технологиями. Твой рабочий компьютер может быть даже в твоём смартфоне!'
			/>
			<ItemAdvantages
				text='Свои автоматизированные системы обучения'
				someText='Создали и постоянно улучшаем собственные автоматизированные системы обучения специалистов и повышения их квалификации внутри компании.'
			/>
			<ItemAdvantages
				text='Сотрудничество с ведущими Компаниями рынка'
				someText='Сотрудничаем с ведущими Компаниями рынка строительных материалов: «Grand Line», «Петрович», «Окна Петербурга», «КраскиДоски», «Technonicol» и другими.'
			/>
		</section>
	)
}
 
export default Advantages;