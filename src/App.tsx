import Navigation from './components/Navigation'
// import Layout from './components/layout'
import Home from './pages/home'
import Konten1 from './pages/konten1'
import Konten2 from './pages/konten2'
import Konten3 from './pages/konten3'
import Konten4 from './pages/konten4'

function App() {

  return (
    <div id='home'>
      <Navigation />
      <div className='bg-gray-200 w-full h-auto px-10 pt-5'>
        <Home />
        <Konten1 />
        <Konten2 />
        <Konten3 />
        <Konten4 />
      </div>
    </div>
  )
}

export default App
