import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about'element={<About/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
