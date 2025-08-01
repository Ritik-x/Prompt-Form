import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="border-b">
        <nav className="flex items-center justify-between max-w-7xl mx-auto my-2 py-3">
          <Logo />
          <div>
            <Button variant={"link"}> Dashboard </Button>
            <UserButton />
          </div>
        </nav>
      </div>

      {children}
    </div>
  );
};

export default layout;
