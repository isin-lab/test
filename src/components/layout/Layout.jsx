import "./layout.css"

import Header from "../header/Header"
import BlockStart from '../../components/blockStart/BlockStart'
import About from '../../components/about/About'
import Categories from '../../components/categories/Categories'
import Advantages from '../../components/advantages/Advantages'
import Products from '../../components/products/Products'
import Career from '../../components/career/Career'
import Successes from '../../components/successes/Successes'
import Contact from '../../components/contacts/Contacts'
import Footer from '../../components/footer/Footer'


const Layout = ({children}) => {
	return (
		
			
			<div className='layoutContainer'>
					<Header />
					<BlockStart />
					<About />
					<Categories />
					<Advantages />
					<Products />
					<Career />
					<Successes />
					<Contact />
					<Footer />
			</div>

	)
}


export default Layout