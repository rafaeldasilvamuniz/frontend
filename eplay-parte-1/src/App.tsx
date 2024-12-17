import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles'
//import Banner from './components/Banner'
//import ProductsList from './components/ProductsList'
import React from 'react'
import Product from './components/Product'
import Banner from './components/Banner'
import ProductsList from './components/ProductsList'
//import { ProductsList } from './components/ProductsList'
//import efoodImg from '../../assets/images/efood.png'
//import Tag from './components/Tag'

//import Rotas from './routes'
//import Footer from './components/Footer'
//import Rectangle from './assets/images/Rectangle.png'

/*const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
  }
])
<RouterProvider router={rotas} />
*/

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div>
        <Header />
        <Banner />
        <ProductsList />
      </div>
    </BrowserRouter>
  )
}

export default App

/*
<Banner />
<Product
          title={'Teste'}
          category={'teste'}
          system={'teste'}
          description={'teste'}
          infos={['0']}
          image={'teste'}
        />
        */
