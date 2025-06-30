import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./components/Header"
import Home from "./pages/Home"
import Matches from "./pages/Matches"
import About from "./pages/About"
import Admin from "./pages/Admin"

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <Profile /> */}
      {/* <About /> */}
      {/* <Admin /> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/matches' element={<Matches />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
