import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const GenerateFormInput = () => {
  return (
    <div className="flex items-center gap-4 my-8">
      <Input type="text" placeholder="Write a prompt to generate form" />
      <Button> Generate Form</Button>
    </div>
  );
};

export default GenerateFormInput;
