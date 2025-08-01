import { Footer } from "@/components/Footer";
import { CallToAction } from "@/components/ui/CalltoAction";
import Herosec from "@/components/ui/Herosec";
import Price from "@/components/ui/Price";
import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="grid items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20">
        {" "}
        <Herosec />
        <Price />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
