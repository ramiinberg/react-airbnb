import image from '../images/photo-grid.png'
import './hero.css'

const Hero = () => (
  <section className='hero'>
    <img className='photo-grid' src={image} alt='10 different images for people doing activies' />
    <h1>Online Experiences</h1>
    <h3>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. </h3>
  </section>
)

export default Hero
