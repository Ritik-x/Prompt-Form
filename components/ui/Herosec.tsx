import React from "react";
import GenerateFormInput from "./GenerateFormInput";
import { Button } from "./button";
import Price from "./Price";
type SuggestionText = {
  label: string;
  text: string;
};
const suggestBtnText = [
  {
    label: "Job Application",
    text: "Generate a professional job application form to collect essential details from candidates, including personal information, education, work experience, skills, and a resume upload option. The form should be clean, user-friendly, and easy to fill out.",
  },
  {
    label: "Registeration Form ",
    text: "Create a user registration form that collects full name, email, phone number, password, and confirm password fields. Include basic validation for each field and ensure the form is clean and mobile-friendly.",
  },
  {
    label: "Feedback Form ",
    text: "Generate a feedback form with fields for name, email, rating (1 to 5 stars), and an open-ended comment box. Make it user-friendly, responsive, and visually clean. Include basic validation and thank-you message on submission.",
  },
  {
    label: " Application Form ",
    text: "Create a professional application form for job seekers. Include fields for full name, email, phone number, position applied for, resume upload, cover letter text area, and availability date. Add validation and a confirmation message after submission.",
  },
];

const Herosec = () => {
  return (
    <section>
      <div className="relative ">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-800 blur-2xl opacity-50 rounded-lg"></div>
        <div className=" container mx-auto text-center relative">
          <h1 className="text-4xl font-bold">Build AI-Powered Forms</h1>
          <p className="mt-4 text-lg ">
            Create customizable, ready-to-use forms for surveys, feedback, and
            more — powered by OpenAI. Fast, flexible, and easy to use.
          </p>
        </div>{" "}
      </div>

      {/*  create input filed */}
      <GenerateFormInput />
      <div className="grid grid-cols-4 gap-2">
        {suggestBtnText.map((item: SuggestionText, index: number) => (
          <Button
            className="rounded-full h-10 "
            variant={"outline"}
            key={index}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Herosec;
