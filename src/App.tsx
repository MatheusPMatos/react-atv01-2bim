import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Inicio from './pages/inicio/inicio'



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
