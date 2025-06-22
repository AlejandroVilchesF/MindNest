import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

export default function Layout() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}