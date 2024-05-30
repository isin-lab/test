import React from 'react'
import './blockStart.css'
import { ButtonLink } from '../button/Button'

const BlockStart = () => {
	return (
		<section className='sectionStart'>
			<div className='containerSectionStart'>
				<h1 className='titleSectionStart'>«Пестовский Лесокомбинат»</h1>
				<p className='textSectionStart'>Стань частью нашей команды!</p>
				<ButtonLink to='/test/form' text='ОТПРАВИТЬ АНКЕТУ' />
			</div>
		</section>
	)
}

export default BlockStart
