import  {BrowserRouter , Routes, Route,Link} from 'react-router-dom'
import Home from "./Pages/Home"
import About from './Pages/About'
import Contact from './Pages/Contact'


function App(){
  return (
    <>
    <BrowserRouter>
    <nav >
      <Link to="/" style={{
      paddingLeft:"20px"
    }}>Home</Link>
      <Link to="/about" style={{
      paddingLeft:"20px"
    }}>About</Link>
      <Link to="/contact"style={{
      paddingLeft:"20px"
    }} >Contact Us</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element ={<About/>} />
      <Route path="/contact" element ={<Contact/>} />

      {/* dynamic routing  */}
      <Route path='/contact/:name' element={<Contact/>}/>

    </Routes>
    
    </BrowserRouter>
    

    </>
  )

}
export default App