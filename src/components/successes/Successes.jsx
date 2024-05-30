import React from 'react';
import './successes.css'
import { ButtonLink } from '../../components/button/Button'

const Successes = () => {
  return (
		<section className='sectionSuccesses'>
			<h2 className='titleSuccesses'>
				Наши успехи — это заслуга замечательных людей, работающих в нашей
				команде.
			</h2>
			<h2 className='titleSuccesses'>
				У Нас всегда есть вакансии для сильных кандидатов
			</h2>
			<div className='banner'>
				<h2 className='textBanner'>
					Если чувствуешь в Себе потенциал и здоровые амбиции — ждём рядом с
					Нами!
				</h2>
				<ButtonLink to='/test/form' text='Присоединиться к команде' />
			</div>
		</section>
	)
}

export default Successes;