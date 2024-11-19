import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LinearProcessFlow } from "@/components/LinearProcessFlow";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              How It Works
            </CardTitle>
            <CardDescription className="text-center">
              The process behind our Energy Consumption Predictor
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LinearProcessFlow>
              <h3 className="text-lg font-semibold">Data Input</h3>
              <p>
                Users provide the state, date, and optional external conditions
                like temperature, humidity, and holiday status.
              </p>

              <h3 className="text-lg font-semibold">
                Historical Data Retrieval
              </h3>
              <p>
                The system fetches historical energy consumption data for the
                given state from our database.
              </p>

              <h3 className="text-lg font-semibold">Feature Generation</h3>
              <p>
                The input is combined with historical data to generate required
                features such as lag values and rolling averages.
              </p>

              <h3 className="text-lg font-semibold">Model Processing</h3>
              <p>
                The processed data is passed into our trained machine learning
                model (e.g., LSTM or XGBoost).
              </p>

              <h3 className="text-lg font-semibold">Prediction Generation</h3>
              <p>
                The model generates a prediction for energy consumption based on
                the input features.
              </p>

              <h3 className="text-lg font-semibold">Visualization</h3>
              <p>
                The system creates visualizations comparing past consumption
                with the forecasted value and displays similar historical
                trends.
              </p>

              <h3 className="text-lg font-semibold">Result Presentation</h3>
              <p>
                The predicted energy consumption and visualizations are
                presented to the user in an easy-to-understand format.
              </p>
            </LinearProcessFlow>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
