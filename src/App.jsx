import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/Pages/Home'
import AllUsers from './Pages/AllUsers'
import NewUsers from './Pages/NewUsers'
import Navbar from './Layout/Navbar'




function App() {
 

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route index element={<Home/>} />
       <Route path='AllUsers' element={<AllUsers/>}/>
       <Route path='NewUser' element={<NewUsers/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
