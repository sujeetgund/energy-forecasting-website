import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface LinearProcessFlowProps {
  children: React.ReactNode;
}

export function LinearProcessFlow({ children }: LinearProcessFlowProps) {
  const childArray = React.Children.toArray(children);

  const steps = childArray.reduce<JSX.Element[]>((acc, child, index) => {
    if (
      React.isValidElement(child) &&
      child.type === "h3" &&
      index < childArray.length - 1
    ) {
      // Find the next sibling that isn't an <h3>
      const content = childArray[index + 1];

      // Ensure content is valid and not another <h3>
      if (
        React.isValidElement(content) &&
        content.type !== "h3"
      ) {
        acc.push(
          <div key={index} className="mb-6 last:mb-0">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mr-3">
                {acc.length + 1}
              </div>
              {child}
            </div>
            <Card>
              <CardContent className="pt-6">{content}</CardContent>
            </Card>
          </div>
        );
      }
    }
    return acc;
  }, []);

  return <div>{steps}</div>;
}
