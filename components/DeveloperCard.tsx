'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"

interface DeveloperCardProps {
  name: string
  regNumber: string
  image: string
}

export function DeveloperCard({ name, regNumber, image }: DeveloperCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground">{regNumber}</p>
        </div>
      </CardContent>
    </Card>
  )
}