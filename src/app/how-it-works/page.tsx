import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LinearProcessFlow } from "@/components/LinearProcessFlow";
import { Github } from "lucide-react";
import Link from "next/link";

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
              <div>
                <p>Users start by providing essential information:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    <strong>State:</strong> Select the region of interest.
                  </li>
                  <li>
                    <strong>Date:</strong> Specify the date for which energy
                    consumption is to be forecasted.
                  </li>
                  <li>
                    <strong>External Conditions (Optional):</strong> Include
                    details like temperature, humidity, and whether the day is a
                    public holiday.
                  </li>
                </ul>
                <p className="mt-2">
                  This information helps tailor predictions to the specific
                  circumstances.
                </p>
              </div>

              <h3 className="text-lg font-semibold">
                Historical Data Retrieval
              </h3>
              <div>
                <p>
                  The system retrieves past energy consumption data for the
                  selected state.
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    This historical data forms the foundation for understanding
                    consumption trends and patterns over time.
                  </li>
                  <li>
                    Data is pulled from our pre-processed database of energy
                    usage records.
                  </li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold">Feature Generation</h3>
              <div>
                <p>
                  The provided input and historical data are used to create key
                  features for the forecasting model:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    <strong>Temporal Features:</strong> Extracted from the input
                    date, such as day of the week, season, or holiday status.
                  </li>
                  <li>
                    <strong>Lag Features:</strong> Past consumption values
                    (e.g., yesterday&apos;s usage, last week&apos;s usage).
                  </li>
                  <li>
                    <strong>Rolling Averages:</strong> Smoothed values over
                    specific time frames (e.g., 7-day or 30-day averages).
                  </li>
                  <li>
                    <strong>External Factors:</strong> Weather details and
                    socioeconomic indicators, if provided, are added to refine
                    predictions.
                  </li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold">Model Processing</h3>
              <div>
                <p>
                  The processed features are fed into our trained machine
                  learning model:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    The model is designed to recognize patterns and
                    relationships between historical data and input features.
                  </li>
                  <li>
                    Advanced algorithms like LSTM (Long Short-Term Memory) or
                    XGBoost predict future energy consumption with high
                    accuracy.
                  </li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold">Prediction Generation</h3>
              <div>
                <p>Based on the processed input, the model generates:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    <strong>Forecasted Energy Consumption:</strong> The expected
                    energy demand for the given state and date.
                  </li>
                  <li>
                    <strong>Confidence Intervals:</strong> A range within which
                    the actual consumption is likely to fall.
                  </li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold">Visualization</h3>
              <div>
                <p>To make the data more actionable and intuitive:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    <strong>Graphs:</strong> Display the predicted consumption
                    alongside historical trends.
                  </li>
                  <li>
                    <strong>Charts:</strong> Highlight patterns, peaks, and dips
                    over time.
                  </li>
                  <li>
                    <strong>Tables:</strong> Present numerical insights in a
                    structured format for easy interpretation.
                  </li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold">Result Presentation</h3>
              <div>
                <p>
                  The final results are presented in a user-friendly format:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    <strong>Forecast Summary:</strong> The predicted energy
                    consumption for the given date.
                  </li>
                  <li>
                    <strong>Contextual Insights:</strong> Comparisons with
                    previous days or similar conditions.
                  </li>
                  <li>
                    <strong>Download Options:</strong> Save the results for
                    further analysis or reporting.
                  </li>
                </ul>
              </div>
            </LinearProcessFlow>

            <div className="mt-8 space-y-4">
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="flex items-center gap-2 border-2"
                >
                  <Link
                    href="https://github.com/sujeetgund/energy-consumption-forecasting"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                    ML Model Repository
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="default"
                  className="flex items-center gap-2"
                >
                  <Link
                    href="https://github.com/sujeetgund/energy-forecasting-website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                    Website Repository
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
