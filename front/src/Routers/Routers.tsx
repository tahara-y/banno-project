import { Route, Routes } from 'react-router-dom'
import TopPage from '../Pages/TopPage'
import MenuPage from '../Pages/MenuPage'

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='' element={<MenuPage />} />
        <Route path='/top' element={<TopPage />} />
      </Routes>
    </div>
  )
}

export default Routers
