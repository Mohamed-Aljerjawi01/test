import React from 'react'
import Navbar from './Components/navbar component/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/home component/Home';
import Portfolio from './Components/portfolio component/Portfolio';
import Contact from './Components/contact component/Contact';
import Footer from './Components/footer component/Footer';
import Products from './Components/products/Products';
import NotFound from './Components/notFound component/NotFound';
import DetailsOfProduct from './Components/products/DetailsOfProduct';

function App() {
  return <>
    <Navbar />
    <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/detailsOfProduct/:id' element={<DetailsOfProduct/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  </>
}

export default App
