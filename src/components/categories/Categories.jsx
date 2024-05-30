import React, { useState } from 'react';
import './categories.css'
import { ButtonLink, ButtonSelect } from '../button/Button'

import user from '../../images/user.svg'
import { MyIcon, MyIconClose } from '../icons/Icons'
import rub from '../../images/₽.svg'

const dataCategories = [
	[
		{
			headerVacancy: 'Прораб',
			countRub: '90 000',
			tasks: ['описание 1', 'описание 2', 'описание 3'],
			expectations: ['описание 1', 'описание 2'],
			offer: [
				'график 5/2 с гибким началом рабочего дня;',
				'оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;',
				'ежеквартальную премию по итогам работы;',
			],
		},
		{
			headerVacancy: 'Специалист службы снабжения',
			countRub: '80 000',
			tasks: ['описание 1', 'описание 2', 'описание 3'],
			expectations: ['описание 1', 'описание 2'],
			offer: [
				'график 5/2 с гибким началом рабочего дня;',
				'оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;',
				'ежеквартальную премию по итогам работы;',
			],
		},
		{
			headerVacancy: 'Логист',
			countRub: '65 000',
			tasks: ['описание 1', 'описание 2', 'описание 3'],
			expectations: ['описание 1', 'описание 2'],
			offer: [
				'график 5/2 с гибким началом рабочего дня;',
				'оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;',
				'ежеквартальную премию по итогам работы;',
			],
		},
		{
			headerVacancy: 'Проектировщик',
			countRub: '95 000',
			tasks: ['описание 1', 'описание 2', 'описание 3'],
			expectations: ['описание 1', 'описание 2'],
			offer: [
				'график 5/2 с гибким началом рабочего дня;',
				'оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;',
				'ежеквартальную премию по итогам работы;',
			],
		},
	],
	[
		{
			headerVacancy: 'Директор по развитию',
			countRub: '90 000',
			tasks: ['описание 1', 'описание 2', 'описание 3'],
			expectations: ['описание 1', 'описание 2'],
			offer: [
				'график 5/2 с гибким началом рабочего дня;',
				'оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;',
				'ежеквартальную премию по итогам работы;',
			],
		},
		{
			headerVacancy: 'HR-специалист',
			countRub: '55 000',
			tasks: ['описание 1', 'описание 2', 'описание 3'],
			expectations: ['описание 1', 'описание 2'],
			offer: [
				'график 5/2 с гибким началом рабочего дня;',
				'оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;',
				'ежеквартальную премию по итогам работы;',
			],
		},
		{
			headerVacancy: 'Секретарь',
			countRub: '60 000',
			tasks: ['описание 1', 'описание 2', 'описание 3'],
			expectations: ['описание 1', 'описание 2'],
			offer: [
				'график 5/2 с гибким началом рабочего дня;',
				'оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;',
				'ежеквартальную премию по итогам работы;',
			],
		},
		{
			headerVacancy: 'Колл-центр оператор',
			countRub: '55 500',
			tasks: ['описание 1', 'описание 2', 'описание 3'],
			expectations: ['описание 1', 'описание 2'],
			offer: [
				'график 5/2 с гибким началом рабочего дня;',
				'оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;',
				'ежеквартальную премию по итогам работы;',
			],
		},
	],
	[
		{
			headerVacancy: 'Бухгалтер',
			countRub: '90 000',
			tasks: ['описание 1', 'описание 2', 'описание 3'],
			expectations: ['описание 1', 'описание 2'],
			offer: [
				'график 5/2 с гибким началом рабочего дня;',
				'оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;',
				'ежеквартальную премию по итогам работы;',
			],
		},
		{
			headerVacancy: 'Финансовый контроллер',
			countRub: '80 000',
			tasks: ['описание 1', 'описание 2', 'описание 3'],
			expectations: ['описание 1', 'описание 2'],
			offer: [
				'график 5/2 с гибким началом рабочего дня;',
				'оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;',
				'ежеквартальную премию по итогам работы;',
			],
		},
		{
			headerVacancy: 'Финансовый аналитик ',
			countRub: '65 000',
			tasks: ['описание 1', 'описание 2', 'описание 3'],
			expectations: ['описание 1', 'описание 2'],
			offer: [
				'график 5/2 с гибким началом рабочего дня;',
				'оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;',
				'ежеквартальную премию по итогам работы;',
			],
		},
	],
	[
		{
			headerVacancy: 'Менеджер по продажам',
			countRub: '90 000',
			tasks: ['описание 1', 'описание 2', 'описание 3'],
			expectations: ['описание 1', 'описание 2'],
			offer: [
				'график 5/2 с гибким началом рабочего дня;',
				'оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;',
				'ежеквартальную премию по итогам работы;',
			],
		},
		{
			headerVacancy: 'Торговый представитель',
			countRub: '80 000',
			tasks: ['описание 1', 'описание 2', 'описание 3'],
			expectations: ['описание 1', 'описание 2'],
			offer: [
				'график 5/2 с гибким началом рабочего дня;',
				'оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;',
				'ежеквартальную премию по итогам работы;',
			],
		},
		{
			headerVacancy: 'Технический продавец',
			countRub: '65 000',
			tasks: ['описание 1', 'описание 2', 'описание 3'],
			expectations: ['описание 1', 'описание 2'],
			offer: [
				'график 5/2 с гибким началом рабочего дня;',
				'оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;',
				'ежеквартальную премию по итогам работы;',
			],
		},
		{
			headerVacancy: 'Аккаунт-менеджер',
			countRub: '95 000',
			tasks: ['описание 1', 'описание 2', 'описание 3'],
			expectations: ['описание 1', 'описание 2'],
			offer: [
				'график 5/2 с гибким началом рабочего дня;',
				'оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;',
				'ежеквартальную премию по итогам работы;',
			],
		},
	],
	[
		{
			headerVacancy: 'Рабочий на линии по распиловке древесины',
			countRub: '60 000',
			tasks: ['описание 1', 'описание 2', 'описание 3'],
			expectations: ['описание 1', 'описание 2'],
			offer: [
				'график 5/2 с гибким началом рабочего дня;',
				'оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;',
				'ежеквартальную премию по итогам работы;',
			],
		},
		{
			headerVacancy: 'Оператор погрузочной техники',
			countRub: '67 500',
			tasks: ['описание 1', 'описание 2', 'описание 3'],
			expectations: ['описание 1', 'описание 2'],
			offer: [
				'график 5/2 с гибким началом рабочего дня;',
				'оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;',
				'ежеквартальную премию по итогам работы;',
			],
		},
		{
			headerVacancy: 'Мастер-ремонтник',
			countRub: '65 000',
			tasks: ['описание 1', 'описание 2', 'описание 3'],
			expectations: ['описание 1', 'описание 2'],
			offer: [
				'график 5/2 с гибким началом рабочего дня;',
				'оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;',
				'ежеквартальную премию по итогам работы;',
			],
		},
		{
			headerVacancy: 'Слесарь-монтажник',
			countRub: '55 500',
			tasks: ['описание 1', 'описание 2', 'описание 3'],
			expectations: ['описание 1', 'описание 2'],
			offer: [
				'график 5/2 с гибким началом рабочего дня;',
				'оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;',
				'ежеквартальную премию по итогам работы;',
			],
		},
	],
]

const CardCategories = ({ card }) => {
  const { headerVacancy, countRub, tasks, expectations, offer } = card
	const [isActive, setIsActive] = useState(false)

	const handelClick = () => {
		setIsActive(!isActive)
	}
	
	return (
		<div className='radCategoriesAll'>
			<div className='cardCategories'>
				<div className='cardCategoriesStart'>
					<div className='cardFlex'>
						<div className='wrp'>
							<div className='myIcon iconWite'>
								<img className='iconImage' src={user} alt='user' />
							</div>
						</div>

						<h2 className='textCardCategories'>{headerVacancy}</h2>
					</div>
					<div className='cardFlex'>
						<div className='wrp'>
							<div className='myIcon iconWite'>
								<img className='iconImage' src={rub} alt='plus' />
							</div>
						</div>
						<h2 className='textCardCategories textGreen'>от {countRub} руб</h2>
					</div>
				</div>

				<button className='wrpButton' onClick={handelClick}>
					{isActive === false ? <MyIcon /> : <MyIconClose />}
				</button>
			</div>

			{isActive === true ? (
				<div className='descriptionCategories'>
					<h2 className='titleDescription'>Задачи:</h2>
					<ul>
						<li className='itemDescription'>{tasks[0]}</li>
						<li className='itemDescription'>{tasks[1]}</li>
						<li className='itemDescription'>{tasks[2]}</li>
					</ul>
					<h2 className='titleDescription'>Наши ожидания:</h2>
					<ul>
						<li className='itemDescription'>{expectations[0]}</li>
						<li className='itemDescription'>{expectations[1]}</li>
					</ul>
					<h2 className='titleDescription'>Мы предлагаем:﻿</h2>
					<ul>
						<li className='itemDescription'>{offer[0]}</li>
						<li className='itemDescription'>{offer[1]}</li>
						<li className='itemDescription'>{offer[2]}</li>
					</ul>
				</div>
			) : null}
		</div>
	)
}
 

const Categories = () => {
  const [activeItem, setActiveItem] = useState('construction')


  return (
		<section className='sectionCategories'>
			<h2 className='titleSectionCategories'>Выбери подразделение:</h2>
			<div className='selectBtnBlock'>
				<ButtonSelect
					text='строительный отдел'
					itemName='construction'
					activeItem={activeItem}
					setActiveItem={setActiveItem}
				/>
				<ButtonSelect
					text='офис'
					itemName='office'
					activeItem={activeItem}
					setActiveItem={setActiveItem}
				/>
				<ButtonSelect
					text='финансовый отдел'
					itemName='finance'
					activeItem={activeItem}
					setActiveItem={setActiveItem}
				/>
				<ButtonSelect
					text='отдел продаж'
					itemName='sales'
					activeItem={activeItem}
					setActiveItem={setActiveItem}
				/>
				<ButtonSelect
					text='внештатный сотрудник'
					itemName='freelance'
					activeItem={activeItem}
					setActiveItem={setActiveItem}
				/>
			</div>
			{activeItem === 'construction'
				? dataCategories[0]?.map((item, idx) => (
						<CardCategories key={idx} card={item} />
				  ))
				: null}
			{activeItem === 'office'
				? dataCategories[1]?.map((item, idx) => (
						<CardCategories key={idx} card={item} />
				  ))
				: null}
			{activeItem === 'finance'
				? dataCategories[2]?.map((item, idx) => (
						<CardCategories key={idx} card={item} />
				  ))
				: null}
			{activeItem === 'sales'
				? dataCategories[3]?.map((item, idx) => (
						<CardCategories key={idx} card={item} />
				  ))
				: null}
			{activeItem === 'freelance'
				? dataCategories[3]?.map((item, idx) => (
						<CardCategories key={idx} card={item} />
				  ))
				: null}

			<div className='wrpBtn'>
				<ButtonLink to='/test/form' text='откликнуться на вакансию' />
			</div>
		</section>
	)
  
}
 
export default Categories;
