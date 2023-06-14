import './App.css'
import SchoolAdmin from './pages/SchoolAdmin'
import { useSelector } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Teachers from './pages/Teachers'
import Header from './components/Header'
import Background from './components/background'
import Loggin from './pages/Loggin'
import ProtectedRoutes from './components/ProtectedRoutes'
import Students from './pages/Students'
import Classes from './pages/Classes'
import Sales from './pages/sales'
import Products from './pages/Products'
import Home from './pages/Home'

function App() {

  const loading = useSelector(state => state.loader)

  return (
    <div className='bodyContainer'>
      <HashRouter>
        {loading && <Background />}
        <Header />
        <Routes>
          <Route path='/' element={<Loggin/>} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/home' element={<Home/>}/>
            <Route path='/admins' element={<SchoolAdmin />} />
            <Route path='/teachers' element={<Teachers />} />
            <Route path='/students' element={<Students />} />
            <Route path='/classes' element={<Classes />} />
            <Route path='/sales' element={<Sales/>} />
            <Route path='/products' element={<Products />} />
          </Route>
        </Routes>
      </HashRouter>

    </div>
  )
}

export default App
