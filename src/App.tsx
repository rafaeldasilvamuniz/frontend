import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles'
import Banner from './components/Banner'
//import Tag from './components/Tag'

//import Rotas from './routes'
//import Footer from './components/Footer'
//import Rectangle from './assets/images/Rectangle.png'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div>
        <Header />
        <Banner />
      </div>
    </BrowserRouter>
  )
}

export default App
