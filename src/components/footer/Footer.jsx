import React from 'react';
import './footer.css'
import AMLogo from '../../images/AMLogo.svg'


const Footer = () => {
  return (
		<footer className='footer'>
			<h2 className='titleFooter'>
				© 2023 Пестовский Лесокомбинат. <br /> Все права защищены.
			</h2>

			<h2 className='titleFooter'>
				<a className='footerLink' href='#0'>
					Реквизиты
				</a>
				<br />
				<a className='footerLink' href='#0'>
					Политика конфиденциальности
				</a>
			</h2>
			<img className='imgFooter' src={AMLogo} alt='AMLogo' />
		</footer>
	)
}
 
export default Footer;



