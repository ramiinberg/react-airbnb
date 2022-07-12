import logo from '../images/airbnb-logo.png'
import "./Navbar.css"

const Navbar = () => (
  <nav className='nav'>
    <img className='nav-logo' src={logo} alt='Airbnb logo' />
  </nav>
)

export default Navbar