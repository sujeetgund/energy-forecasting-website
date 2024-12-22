import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);

  try {
    const response = await fetch("http://52.91.24.70:8000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log(result);
    return NextResponse.json(parseFloat(result.predicted_usage));
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Error fetching prediction" },
      { status: 500 }
    );
  }
}
