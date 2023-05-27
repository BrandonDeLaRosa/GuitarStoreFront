import './App.css'
import SchoolAdmin from './pages/SchoolAdmin'
import Loader from './components/loader'
import { useSelector } from 'react-redux'

function App() {

  const loading = useSelector(state => state.loader)

  return (
      <div>

        {loading && <Loader/>}
        <SchoolAdmin/>
        {/* {loading? <Loader/> : <SchoolAdmin/>} */}
        
      </div>
  )
}

export default App
