// import { useState } from 'react'

import Navbar from "./component/Navbar"
import Home from "./Home"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full max-w-4xl mx-auto">
        <Navbar />
        <div className="py-4">
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
