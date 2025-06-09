import './index.css'
import Navbar from './components/NavBar/Navbar'
import SkipSelector from './containers/SkipSelector'
import TailwindEffect from './TailwindEffect'



export default function App() {

  return (
    <div className='relative space-y-10'>
      <Navbar />
      {/* Main Component */}
      <SkipSelector />
      {/* blob effect */}
      <TailwindEffect />
    </div>
  )
}

