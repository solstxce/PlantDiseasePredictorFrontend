import React from 'react'
import { DeveloperCard } from '../components/DeveloperCard'

const developers = [
  { 
    name: 'ANUMALA SETTY POORNA KUMAR', 
    regNumber: '99220040013', 
    image: 'https://picsum.photos/150/150?random=1' 
  },
  { 
    name: 'G DHANUSH CHOWDARY', 
    regNumber: '99220040058', 
    image: 'https://picsum.photos/150/150?random=2' 
  },
  { 
    name: 'KAJA NAGA VENKATA SAI ROOP ABIJITH', 
    regNumber: '99220040078', 
    image: 'https://picsum.photos/150/150?random=3' 
  },
  { 
    name: 'GONUGUNTLA VARUN', 
    regNumber: '99220040062', 
    image: 'https://picsum.photos/150/150?random=4' 
  },
]

export default function DevelopersPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Our Development Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {developers.map((dev) => (
          <DeveloperCard key={dev.regNumber} {...dev} />
        ))}
      </div>
    </div>
  )
}
