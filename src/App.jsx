import './scss/style.scss'
import { Route, Routes } from 'react-router-dom'

// Pages
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Wishlist from './pages/wishlist/Wishlist'

// Components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import DetailProducts from './pages/detailProduct/DetailProducts'

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path="/product/:id" element={ <DetailProducts/> }/> 
      </Routes>

      <Footer/>
    </>
  )
}

export default App
