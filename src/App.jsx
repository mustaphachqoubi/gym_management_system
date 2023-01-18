import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Members from './pages/Members'
import Members_should_pay from './pages/Members_should_pay'
import Stuff from './pages/Stuff'
import Wait from './pages/Waiting'
function App() {

  return (
    <div className="bg-slate-100">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/members' element={<Members />} />
        <Route path='/members_should_pay' element={<Members_should_pay />} />
        <Route path='/stuff' element={<Stuff />} />
        <Route path='/wait' element={<Wait />} />
      </Routes>
    </div>
  )
}

export default App
