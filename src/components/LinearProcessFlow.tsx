import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface LinearProcessFlowProps {
  children: React.ReactNode;
}

export function LinearProcessFlow({ children }: LinearProcessFlowProps) {
  const steps = React.Children.toArray(children)
    .filter(
      (child): child is React.ReactElement =>
        React.isValidElement(child) && child.type === "h3"
    )
    .map((step, index) => {
      const content = React.Children.toArray(children).find(
        (child, i) =>
          i > React.Children.toArray(children).indexOf(step) &&
          React.isValidElement(child) &&
          child.type !== "h3"
      );

      return (
        <div key={index} className="mb-6 last:mb-0">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mr-3">
              {index + 1}
            </div>
            {step}
          </div>
          <Card>
            <CardContent className="pt-6">{content}</CardContent>
          </Card>
        </div>
      );
    });

  return <div>{steps}</div>;
}
