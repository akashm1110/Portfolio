import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
       
       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>

      
      
    </div>
  );
};


export default App