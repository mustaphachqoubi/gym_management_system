import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Members from './pages/Members'
import Members_should_pay from './pages/Members_should_pay'
function App() {

  return (
    <div className="bg-slate-100">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/members' element={<Members />} />
        <Route path='/members_should_pay' element={<Members_should_pay />} />
      </Routes>
    </div>
  )
}

export default App
