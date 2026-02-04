import { useState } from 'react'
import Counter from './components/Counter'
import BtnColorChange from './components/BtnColorChange'
import RegistrationFrom from './components/RegistrationFrom'
import LoginPage from './components/LoginPage'
import Container from './components/Container'
import Username from './components/Username'
import { Quote } from 'lucide-react'
import Quotes from './components/Quotes'
import Weather from './components/Weathre'
import DevTender from './components/DevTender'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' text-white ' >
      {/* <Counter/> */}
      {/* <BtnColorChange/> */}
      {/* <RegistrationFrom/> */}
      {/* <LoginPage/> */}
      {/* <Container/> */}
      {/* <Username/> */}
      {/* <Quotes/> */}
      {/* <Weather/> */}
      <DevTender/>/
    </div>  
  )
}

export default App
