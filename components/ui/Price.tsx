import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";
import { Button } from "./button";
import { Label } from "./label";

const Price = () => {
  return (
    // <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-2">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-8 max-w-5xl">
      {[1, 2, 3].map((item: number, index: number) => (
        <Card
          className="w-full max-w-sm flex flex-col justify-between rounded-2xl shadow-lg border border-gray-200 bg-white hover:shadow-2xl transition-shadow duration-300 mx-auto"
          key={index}
        >
          <CardHeader className="pb-0 text-center">
            <CardTitle className="text-2xl font-bold mb-1 text-gray-800">
              Create Project
            </CardTitle>
            <CardDescription className="text-base text-gray-500 mb-2">
              Deploy project in one click
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-center items-center py-6">
            <div className="flex flex-col gap-6 w-full max-w-xs">
              <div className="grid gap-2">
                <Label className="text-gray-700 text-base">Name</Label>
              </div>
              <div className="grid gap-2">
                <Label className="text-gray-700 text-base">Framework</Label>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex gap-3 pt-0 pb-6 px-6">
            <Button
              variant="outline"
              className="w-1/2 border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Cancel
            </Button>
            <Button className="w-1/2 bg-gradient-to-r from-gray-600 to-black-600 text-white font-semibold hover:from-black-700 hover:to-gray-700 transition-colors">
              Deploy
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
    // </div>
  );
};

export default Price;
