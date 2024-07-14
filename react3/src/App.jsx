import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthState from './context/AuthState'
import NavBar from "./components/NavBar"
import Login from "./components/Login"
import Home from "./components/Home"

function App() {

  return (
    <>
    <AuthState>
      <BrowserRouter>
       <NavBar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
       </Routes>
      </BrowserRouter>
    </AuthState>
    </>
  )
}

export default App
