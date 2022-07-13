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
            data={card}
          />
        ))}
      </section>
    </>
  )
}

export default App

