import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout/Layout'
import Login from '@/pages/Login/Login'
import Home from '@/pages/Home/Home'
import NotFound from '@/pages/NotFound/NotFound'
import Boards from '@/pages/Boards/Boards'
import Notes from '@/pages/Notes/Notes'
import Users from '@/pages/Users/Users'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta padre con Layout */}
        <Route element={<Layout />}>
          {/* Rutas hijas renderizan dentro del Outlet */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/boards' element={<Boards />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/users' element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}