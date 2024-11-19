import EnergyPredictionForm from '@/components/EnergyPredictionForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Energy Consumption Predictor</CardTitle>
            <CardDescription className="text-center">Predict energy consumption for a given state and date</CardDescription>
          </CardHeader>
          <CardContent>
            <EnergyPredictionForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}