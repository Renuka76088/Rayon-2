import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './Components/Landing'
import Header from './Header'
import Footer from './Components/Footer'
import Product from './Components/Product'
import ProductHighlight from './Components/ProductHighlight'
import Blog from './Components/Blog'
import Contactus from './Contactus'
import Management from './Pages/Management'
import ProductGallery from './Pages/ProductGallery'
import Enquiry from './Pages/Enquiry'
import Quotation from './Pages/Quotation'
import Auction from './Pages/Auction'
import TenderContract from './Pages/TenderContract'
import Career from './Pages/Career'
import Circular from './Pages/Circular'
import CustomerReview from './Pages/CustomerReview'
import Appointment from './Pages/Appointment'
import MediaGallery from './Pages/MediaGallery'
import Associates from './Pages/Associates'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Header />
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/about' element={<ProductHighlight/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contactus/>}/>
      <Route path='/management' element={<Management/>}/>
      <Route path='/productgallery' element={< ProductGallery/>}/>
      <Route path='/enquiry' element={<Enquiry/>}/>
      <Route path='/quotation' element={<Quotation/>}/>
      <Route path='/auction' element={<Auction/>}/>
      <Route path='/contract' element={<TenderContract/>}/>
      <Route path='/career' element={<Career/>}/>
      <Route path='/circular' element={<Circular/>}/>
      <Route path='/review' element={<CustomerReview/>}/>
      <Route path='/appointment' element={< Appointment/>}/>
      <Route path='/mediagallery' element={<  MediaGallery/>}/>
      <Route path='/associates' element={<   Associates/>}/>
      
     </Routes>
     
     <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
