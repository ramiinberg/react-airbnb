import star from '../images/star.png'
import './card.css'

const Card = ({ img, rating, reviewCount, location, title, price}) => (
  <div className='card'>
    <img src={img} alt="" className='card-image' />
    <div className='card-info'>
      <img src={star} alt="small red star" className='card-star' />
      <p className='card-stats'>{rating}({reviewCount}) {location}</p>
    </div>
    <p className='card-title'>{title}</p>
    <p className='card-price'><span className='bold-text'>From ${price}</span> / person</p>
  </div>
)

export default Card