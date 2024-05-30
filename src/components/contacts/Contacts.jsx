import React, { useState } from 'react'
import './contacts.css'
import { ButtonSelectTwo } from '../../components/button/Button'
import {MapSPB, MapMsc} from '../../components/map/MapY'

import phone from './icons/phone.svg'
import mail from './icons/mail.svg'
import location from './icons/location.svg'
import youtube from './icons/youtube.svg'
import vk from './icons/vk.svg'
import telegram from './icons/telegram.svg'

const MyIconsFooter = ({ icon, txt }) => {
	return (
		<div className='iconFooter'>
			<img src={icon} alt={txt} />
		</div>
	)
}


const Contact = () => {
  const [activeItem, setActiveItem] = useState('spb')

	return (
		<section className='sectionContact'>
			<h2 className='titleSectionContact'>КОНТАКТЫ</h2>
			<div className='selectContact'>
				<ButtonSelectTwo
					text='САНКТ-ПЕТЕРБУРГ'
					itemName='spb'
					activeItem={activeItem}
					setActiveItem={setActiveItem}
				/>
				<ButtonSelectTwo
					text='МОСКВА'
					itemName='msc'
					activeItem={activeItem}
					setActiveItem={setActiveItem}
				/>
			</div>

			{activeItem === 'spb' ? (
				<div className='containerContact'>
					<div className='itemContainerContact'>
						<MyIconsFooter icon={phone} txt='phone' />
						<h2 className='textItemContact'>
							<a className='link' href='tel:+78126027760'>
								8 (812) 602-77-60
							</a>
						</h2>
					</div>

					<div className='itemContainerContact'>
						<MyIconsFooter icon={mail} txt='mail' />
						<h2 className='textItemContact'>
							<a className='link' href='mailto:info@pplk.ru'>
								info@pplk.ru
							</a>
						</h2>
					</div>

					<div className='itemContainerContact'>
						<MyIconsFooter icon={location} txt='location' />
						<h2 className='textItemContact'>
							ул. Заозёрная, д. 8 к. 2, офис 202 <br />
							(7 мин. пешком от метро Фрунзенская)
						</h2>
					</div>
				</div>
			) : (
				<div className='containerContact'>
					<div className='itemContainerContact'>
						<MyIconsFooter icon={phone} txt='phone' />
						<h2 className='textItemContact'>
							<a className='link' href='tel:+78126027760'>
								8 (999) 00-00-00
							</a>
						</h2>
					</div>

					<div className='itemContainerContact'>
						<MyIconsFooter icon={mail} txt='mail' />
						<h2 className='textItemContact'>
							<a className='link' href='mailto:info@pplk.ru'>
								info@pplk.ru
							</a>
						</h2>
					</div>

					<div className='itemContainerContact'>
						<MyIconsFooter icon={location} txt='location' />
						<h2 className='textItemContact'>
							ул.Тверская, 9 к. 2, офис 202 <br />
							(5 мин. пешком от метро Тверская)
						</h2>
					</div>
				</div>
			)}
			<div className='containerSocialLink'>
				<a className='imgLink' href='https://www.youtube.com' target='blank'>
					<img src={youtube} alt='youtube' />
				</a>
				<a className='imgLink' href='https://vk.com' target='blank'>
					<img src={vk} alt='vk' />
				</a>
				<a className='imgLink' href='https://telegram.org' target='blank'>
					<img src={telegram} alt='telegram' />
				</a>
			</div>
			{activeItem === 'spb' ? <MapSPB /> : <MapMsc />}
		</section>
	)
}

export default Contact
