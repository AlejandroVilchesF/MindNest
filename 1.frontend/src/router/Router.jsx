import { BrowserRouter as RouterDom, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Login from '@/pages/Login/login'
import Home from '@/pages/Home/home'
import NotFound from '@/pages/NotFound/notfound'

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