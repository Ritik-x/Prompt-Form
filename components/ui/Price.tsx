import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./card";
import { Button } from "./button";
import { pricingPlan } from "@/lib/pricingplan";
import { Badge } from "./badge";

const Price = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-8 max-w-5xl">
      {pricingPlan.map((plan, index) => {
        const isEnterprise = plan.level === "Enterprice";
        return (
          <div key={index} className="relative flex flex-col items-center">
            {plan.level === "Pro" && (
              <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 bg-gradient-to-r from-black-800 to-gray-800 text-white shadow-lg px-4 py-1 rounded-full text-sm font-semibold border-2 border-white">
                🔥 Popular
              </Badge>
            )}
            <Card
              className={`w-full max-w-sm flex flex-col justify-between rounded-2xl shadow-lg border transition-shadow duration-300 mx-auto pt-6
                ${
                  isEnterprise
                    ? "bg-[#18181b] border-gray-700 text-white"
                    : "bg-white border-gray-200 text-gray-800"
                }
                hover:shadow-2xl
              `}
            >
              <CardHeader className="pb-0 text-center">
                <CardTitle
                  className={`text-2xl font-bold mb-1 mt-2 ${
                    isEnterprise ? "text-white" : "text-gray-800"
                  }`}
                >
                  {plan.level}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-center items-center py-6">
                <p
                  className={`text-3xl font-extrabold mb-4 ${
                    isEnterprise ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.price}
                </p>
                <ul
                  className={`space-y-2 w-full max-w-xs ${
                    isEnterprise ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  {plan.services.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className={`text-green-400`}>✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex gap-3 pt-0 pb-6 px-6">
                <Button
                  className={`w-full font-semibold transition-colors
                    ${
                      isEnterprise
                        ? "bg-gradient-to-r  text-white border-gray-700 hover:text-black hover:bg-white"
                        : "bg-gradient-to-r text-black border-gray-300 hover:bg-black hover:text-white"
                    }
                  `}
                  variant={isEnterprise ? "default" : "outline"}
                >
                  Get Started with {plan.level}
                </Button>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Price;
