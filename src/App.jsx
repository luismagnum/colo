import './App.css'
import Features from './components/Features'
import Footer from './components/Footer'
import Fotos from './components/Fotos'
import Graficas from './components/Graficas'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Servicios from './components/Servicios'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <div id='home'>
          <Home />
        </div>

        <div id='features'>
          <Features />
        </div>

        <div id='graficas'>
          <Graficas />
        </div>

        <div id='servicios'>
          <Servicios />
        </div>

        <div>
          <Fotos />
        </div>
        <div id='footer'>
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
