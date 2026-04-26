import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import AppRoutes from './router/index.jsx'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}
