import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileUploader } from '../components/FileUploader'
import { Loader2 } from 'lucide-react'

export default function PredictDiseasePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [prediction, setPrediction] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleFileSelect = (file: File) => {
    setSelectedFile(file)
    setPreviewUrl(URL.createObjectURL(file))
  }

  const handleAnalyze = async () => {
    if (!selectedFile) {
      toast.error('Please select an image first')
      return
    }

    setIsLoading(true)
    const formData = new FormData()
    formData.append('file', selectedFile)

    try {
      const response = await axios.post('http://localhost:5003/predict', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      setPrediction(response.data)
    } catch (error) {
      console.error('Error during prediction:', error)
      toast.error('Failed to get prediction. Using placeholder data.')
      setPrediction({
        predicted_disease: 'Sample Disease',
        confidence: 0.85,
        best_pesticides: ['Pesticide A', 'Pesticide B'],
        worst_pesticides: ['Pesticide X', 'Pesticide Y']
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold mb-6">Predict Plant Disease</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upload Image</CardTitle>
          </CardHeader>
          <CardContent>
            <FileUploader onFileSelect={handleFileSelect} />
            {previewUrl && (
              <img src={previewUrl} alt="Preview" className="mt-4 max-w-full h-auto rounded-lg" />
            )}
            <Button
              onClick={handleAnalyze}
              disabled={!selectedFile || isLoading}
              className="mt-4"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                'Analyze'
              )}
            </Button>
          </CardContent>
        </Card>
        {prediction && (
          <Card>
            <CardHeader>
              <CardTitle>Prediction Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Predicted Disease:</strong> {prediction.predicted_disease.replace(/_/g, ' ')}</p>
              <p><strong>Confidence:</strong> {(prediction.confidence * 100).toFixed(2)}%</p>
              <p><strong>Best Pesticides:</strong> {Array.isArray(prediction.best_pesticides) ? prediction.best_pesticides.join(', ') : prediction.best_pesticides || 'N/A'}</p>
              <p><strong>Worst Pesticides:</strong> {Array.isArray(prediction.worst_pesticides) ? prediction.worst_pesticides.join(', ') : prediction.worst_pesticides || 'N/A'}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </motion.div>
  )
}
