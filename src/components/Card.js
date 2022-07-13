import star from '../images/star.png'
import './card.css'

const Card = ({ img, rating, reviewCount, country, title, price}) => (
  <div className='card'>
    <img src={img} alt="" className='card-image' />
    <div className='card-info'>
      <img src={star} alt="small red star" className='card-star' />
      <p className='card-stats'>{rating}({reviewCount}) {country}</p>
    </div>
    <p className='card-title'>{title}</p>
    <p className='card-price'><span className='bold-text'>From ${price}</span> / person</p>
  </div>
)

export default Card

// img={katieImage} 
//         rating={'5.0'} 
//         reviewCount={6} 
//         country='USA' 
//         title='Life Lessons with Katie Zaferes'
//         price={136}