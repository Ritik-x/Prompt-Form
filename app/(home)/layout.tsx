import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ModeToggle } from "@/components/ui/ModeToggle";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="border-b">
          <nav className="flex items-center justify-between max-w-7xl mx-auto my-2 py-3 px-4">
            <Logo />
            <div className="flex items-center gap-4">
              {" "}
              {/* 👈 Updated for spacing */}
              <Button variant="link">Dashboard</Button>
              <ModeToggle /> {/* 👈 Theme switch */}
              <UserButton />
            </div>
          </nav>
        </div>

        {children}
      </ThemeProvider>
    </div>
  );
};

export default Layout;
