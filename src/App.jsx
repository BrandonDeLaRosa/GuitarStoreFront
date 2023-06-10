import './App.css'
import SchoolAdmin from './pages/SchoolAdmin'
import { useSelector } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Teachers from './pages/Teachers'
import Header from './components/Header'
import Background from './components/background'

function App() {

  const loading = useSelector(state => state.loader)

  return (
    <div className='bodyContainer'>
      <HashRouter>
        {loading && <Background/>}
        <Header/>
        <Routes>
          <Route path='/admins' element={<SchoolAdmin/>} />
          <Route path='/teachers' element={<Teachers/>} />
        </Routes>
      </HashRouter>

    </div>
  )
}

export default App
