import cardImage from '../images/katie-zaferes.png'
import star from '../images/star.png'
import './card.css'

const Card = () => (
  <div className='card'>
    <img src={cardImage} alt="" className='card-image' />
    <div className='card-info'>
      <img src={star} alt="small red star" className='card-star' />
      <p className='card-stats'>5.0 (6) USA</p>
    </div>
    <p className='card-title'>Life sessons with Katie Zaferes</p>
    <p className='card-price'><span className='bold-text'>From $136</span> / person</p>
  </div>
)

export default Card