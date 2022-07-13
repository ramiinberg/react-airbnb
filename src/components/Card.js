import star from '../images/star.png'
import './card.css'

const Card = props => {
  console.log('props', props)
  const { openSpots, location, coverImg: img, stats, title, price } = props
  const { rating, reviewCount } = stats
  let badgeText
  if(openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if(location === "Online") {
    badgeText = 'ONLINE'
  }

  return (
  <div className='card'>
    {badgeText && <div className='card-badge'>{badgeText}</div>}
    <img src={img} alt='' className='card-image' />
    <div className='card-info'>
      <img src={star} alt='small red star' className='card-star' />
      <p className='card-stats'>{rating}({reviewCount}) {location}</p>
    </div>
    <p className='card-title'>{title}</p>
    <p className='card-price'><span className='bold-text'>From ${price}</span> / person</p>
  </div>
)}

export default Card