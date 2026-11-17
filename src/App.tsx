import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import './portafolio.css'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/trabajos"
            element={<h2>Trabajos del semestre</h2>}
          />

          <Route
            path="/contacto"
            element={<h2>Contacto</h2>}
          />

          <Route
            path="*"
            element={<h2>404: página no encontrada</h2>}
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}