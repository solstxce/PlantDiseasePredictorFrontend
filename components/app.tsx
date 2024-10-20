"use client"

import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SidebarProvider, SidebarInset, SidebarTrigger, useSidebar } from '@/components/ui/sidebar'
import Sidebar from '@/components/Sidebar'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

function AppContent() {
  const { state } = useSidebar()
  const pathname = usePathname()

  return (
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
          {/* Content will be injected here by Next.js */}
        </div>
      </SidebarInset>
      <ToastContainer position="bottom-right" />
    </div>
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
