import React from 'react';
import './dev.css'
import { ButtonLink } from '../button/Button';
import { Link } from 'react-router-dom'
import close from '../../images/closeForm.svg'

const DEV = () => {
  return (
		<section className='dev'>
			<div className='headerForm'>
				<button className='closeBtnForm'>
					<Link to='/test/'>
						<img className='closeImgForm' src={close} alt='close' />
					</Link>
				</button>
			</div>
			<h2 className='title'>
				Тестовое задание (только мобильная версия) по верстке макета сайта.
				<br /> Использовал React для стилизации CSS.
				<br /> Потрачено 16 часов на работу.
			</h2>
			<ButtonLink
				to='https://github.com/isin-lab/test13'
				text='репозиторий с кодом'
			/>
			<div className='px30'></div>
			<ButtonLink to='tel:+79522174219' text='мой телефон' />
			<div className='px30'></div>
			<ButtonLink to='https://t.me/volkov130' text='мой телеграм' />
		</section>
	)
}
 
export default DEV;

