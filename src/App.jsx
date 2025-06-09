import './index.css'
import Navbar from './components/NavBar/Navbar'
import TailwindEffect from './TailwindEffect'
import AppRoutes from './router'

export default function App() {

  return (
    <div className=' space-y-10'>
      <Navbar />
      {/* Main Component */}
      <AppRoutes />
      {/* blob effect */}
      <TailwindEffect />
    </div>
  )
}

