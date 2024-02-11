import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ProfileCard } from './components/ProfileCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid h-screen place-items-center'>
      <ProfileCard/>
    </div>
  )
}

export default App
