import NavBar from './Components/Navbar/Navbar'
import './App.css'
import Footer from './Components/Navbar/Footer/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import {Routes,Route} from "react-router-dom"
import Project from './pages/projects/Projects'
import About from './pages/About us/About'
function App() {

  return (
    <> 
    <div className="app">
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/register" element={<Register/>}/>
      </Routes>
     <Footer/>
     </div>
    </>
  )
}

export default App
