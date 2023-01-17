import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Members from './pages/Members'
function App() {

  return (
    <div className="bg-slate-100">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/members' element={<Members />} />
      </Routes>
    </div>
  )
}

export default App
