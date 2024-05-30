import React, { useState } from 'react'
import close from '../../images/closeForm.svg'
import popOk from '../../images/popOk.svg'
import { ButtonLink } from '../button/Button'
import { Link } from 'react-router-dom'

import './form.css'

const Checkbox = ({ isChecked, onChange, children }) => {
	return (
		<label className='checkboxWrp'>
			<input
				type='checkbox'
				className='checkbox-element'
				checked={isChecked}
				onChange={() => onChange(prev => !prev)}
				required
			/>
			<p>{children}</p>
		</label>
	)
}

export const FormQuestionnaire = () => {
	const [rulesChecked, setRulesChecked] = useState(false)

	const handleCheckboxChange = () => {
		setRulesChecked(!rulesChecked)
	}

	const handleSubmit = e => {
		e.preventDefault()
	}

	return (
		<div className='formPage'>
			<div className='headerForm'>
				<button className='closeBtnForm' onClick={() => {}}>
					<Link to='/test/'>
						<img className='closeImgForm' src={close} alt='close' />
					</Link>
				</button>
			</div>

			<h2 className='titleForm'>Заполните анкету</h2>
			<form className='form' onSubmit={handleSubmit}>
				<input className='inputForm' type='text' placeholder='Ф.И.О' required />
				<br />
				<input
					className='inputForm'
					type='tel'
					placeholder='Телефон'
					required
				/>
				<br />
				<label className='labelForm'>Отклик на вакансию</label>
				<select className='inputForm textSelect' required>
					<option value=''>Выберите вакансию</option>
					<option value='v1'>Вакансия 1</option>
					<option value='v2'>Вакансия 2</option>
					<option value='v3'>Вакансия 3</option>
					<option value='v4'>Вакансия 4</option>
					<option value='v5'>Вакансия 5</option>
					<option value='v6'>Вакансия 6</option>
					<option value='v7'>Вакансия 7</option>
					<option value='v8'>Вакансия 8</option>
				</select>
				<label className='labelForm'>Ваше резюме</label>
				<p className='descriptionLabel'>
					Есть резюме в формате .pdf или .doc?
					<br /> Приложите и отправьте его нам.
				</p>
				<label className='inputFileLabel'>
					Загрузить файл
					<input className='inputFile' type='file' accept='.pdf,.doc' />
				</label>
				<Checkbox isChecked={rulesChecked} onChange={handleCheckboxChange}>
					Я прочитал(а), ознакомился(лась) и согласен(на) с Политикой
					конфиденциальности, Согласием на обработку персональных данных
					физическим лицом. Я осознаю, что даю Согласие на обработку
					персональных данных для использования предоставляемых возможностей
					Веб-сервиса <br /> Я достиг(ла) 18-летнего возраста
				</Checkbox>
				<br />
				<ButtonLink to='/test/ok' text='Отправить анкету' />
				{/* <button className='submitBtn' type='submit'>
					Отправить анкету
				</button> */}
			</form>
		</div>
	)
}

export const PopUpOk = () => {

	return (
		<div className='formPage'>
			<div className='headerForm'>
				<button className='closeBtnForm' onClick={() => {}}>
					<Link to='/test/'>
						<img className='closeImgForm' src={close} alt='close' />
					</Link>
				</button>
			</div>

			<div className='containerColumPopUp'>
				<h2 className='titleForm'>Анкета отправлена</h2>

				<div className='containerPopUpOk'>
					<img className='imageOk' src={popOk} alt='ok' />
					<h2 className='textPopUpOk'>
						Благодарим
						<br /> за ваш отклик и интерес.
					</h2>
					<h2 className='textPopUpOk'>
						Мы изучим вашу анкету
						<br /> и свяжемся с вами
						<br />в течении 2х дней.
					</h2>
				</div>
				<ButtonLink to='/test/' text='На главную' />
				{/* <button className='submitBtn'>на главную</button> */}
			</div>
		</div>
	)
}
