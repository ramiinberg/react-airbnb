import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'
import './app.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {data.map(card => (
          <Card
            key={card.id}
            title={card.title}
            price={card.price}
            img={card.coverImg}
            reviewCount={card.stats.reviewCount}
            rating={card.stats.rating}
            location={card.location}
            openSpots={card.openSpots}
          />
        ))}
      </section>
    </>
  )
}

export default App

