import "./header.css"
import menu from '../../images/menu.svg'
import logo from "../../images/logo.svg"
import { Link } from "react-router-dom"

const  Header = () => {
  return (
		<header className='header'>
			<div className='containerHeader containerBtnMenu'>
				<button className='btnMenuHeader'>
					<Link to='/test/dev'>
						<img className='imgMenuHeader' src={menu} alt='menu' />
					</Link>
				</button>
			</div>

			<div className='containerHeader containerLogo'>
				<img className='logoHeader' src={logo} alt='пестовский лесокомбинат' />
			</div>

			<div className='containerHeader contactPhoneHeader'>
				<a className='phoneLink' href='tel:+78126037223'>
					8 (812) 603-72-22
				</a>
				<a className='phoneLink' href='tel:+74993807733'>
					8 (499) 380-77-33
				</a>
			</div>
		</header>
	)
}

export default Header