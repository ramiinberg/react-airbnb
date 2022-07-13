import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {data.map(card => (
        <Card 
          title={card.title}
          price={card.price}
          img={card.coverImg}
          reviewCount={card.stats.reviewCount}
          rating={card.stats.rating}
          location={card.location}
        />
      ))}
    </>
  )
}

export default App

