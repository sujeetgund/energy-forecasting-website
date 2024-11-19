import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

type PredictionResultProps = {
  prediction: number
}

const pastWeekData = [
  { day: 'Mon', consumption: 8500 },
  { day: 'Tue', consumption: 8700 },
  { day: 'Wed', consumption: 9000 },
  { day: 'Thu', consumption: 8800 },
  { day: 'Fri', consumption: 9200 },
  { day: 'Sat', consumption: 8600 },
  { day: 'Sun', consumption: 8400 },
]

export default function PredictionResult({ prediction }: PredictionResultProps) {
  const chartData = [...pastWeekData, { day: 'Prediction', consumption: prediction }]

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Prediction Result</CardTitle>
        <CardDescription>Energy consumption prediction and past week comparison</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-4">
          Predicted Energy Consumption: {prediction} MW
        </div>
        
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="consumption" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Similar Historical Trends</h3>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Consumption (MW)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-11-25</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">9450</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2022-11-26</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">9520</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2021-11-27</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">9480</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}