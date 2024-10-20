"use client"

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SidebarProvider, SidebarInset, SidebarTrigger, useSidebar } from '@/components/ui/sidebar'
import Sidebar from '@/components/Sidebar'
import HomePage from '@/pages/HomePage'
import PredictDiseasePage from '@/pages/PredictDiseasePage'
import LiveDataCapturePage from '@/pages/LiveDataCapturePage'
import DevelopersPage from '@/pages/DevelopersPage'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

function AppContent() {
  const { state } = useSidebar()

  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <SidebarInset className="relative">
          <div className="absolute top-4 left-4 z-50">
            <SidebarTrigger>
              <Button variant="outline" size="icon">
                {state === "expanded" ? <ChevronLeft /> : <ChevronRight />}
              </Button>
            </SidebarTrigger>
          </div>
          <div className="p-6 pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/predict" element={<PredictDiseasePage />} />
              {/* <Route path="/live-data" element={<LiveDataCapturePage />} /> */}
              <Route path="/developers" element={<DevelopersPage />} />
            </Routes>
          </div>
        </SidebarInset>
      </div>
      <ToastContainer position="bottom-right" />
    </Router>
  )
}

export function AppComponent() {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppContent />
    </SidebarProvider>
  )
}

export default AppComponent
