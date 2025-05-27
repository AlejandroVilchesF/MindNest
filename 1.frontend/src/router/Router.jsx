import { BrowserRouter as RouterDom, Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout/Layout'
import Login from '@/pages/Login/Login'
import Home from '@/pages/Home/Home'
import NotFound from '@/pages/NotFound/NotFound'

export default function Router() {
  return (
    <RouterDom>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </RouterDom>
  )
}