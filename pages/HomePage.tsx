import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Upload, Zap, Book } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', uploads: 400, identifications: 240 },
  { name: 'Feb', uploads: 300, identifications: 139 },
  { name: 'Mar', uploads: 200, identifications: 980 },
  { name: 'Apr', uploads: 278, identifications: 390 },
  { name: 'May', uploads: 189, identifications: 480 },
  { name: 'Jun', uploads: 239, identifications: 380 },
  { name: 'Jul', uploads: 349, identifications: 430 },
]

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold mb-6">Welcome to Plant Disease Classifier</h1>
      <p className="text-lg mb-6">
        Our advanced image recognition technology helps farmers, gardeners, and plant enthusiasts 
        quickly identify and manage plant diseases. Upload an image, get instant results, and keep 
        your plants healthy!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Upload className="mr-2" />
              Total Uploads
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">10,234</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Leaf className="mr-2" />
              Diseases Identified
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">50+</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="mr-2" />
              Accuracy Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">86.7%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Book className="mr-2" />
              Plant Database
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">1,000+</p>
          </CardContent>
        </Card>
      </div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Monthly Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="uploads" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="identifications" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <h2 className="text-2xl font-bold mb-4">How It Works</h2>
      <ol className="list-decimal list-inside space-y-2 mb-6">
        <li>Upload a clear image of the affected plant part</li>
        <li>Our AI model analyzes the image for disease patterns</li>
        <li>Receive instant results with disease identification and confidence level</li>
        <li>Get recommendations for treatment and appropriate pesticide usage</li>
      </ol>
      <p className="text-lg">
        Start using the Plant Disease Classifier today and take the first step towards healthier plants and improved crop yields!
      </p>
    </motion.div>
  )
}