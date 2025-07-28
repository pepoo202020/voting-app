import React from "react";
import AnimatedBackground from "./AnimatedBackground";

export const PagesLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-cente">
      <AnimatedBackground />
      <div className="relative z-10 flex w-full max-w-7xl flex-1 flex-col px-4 sm:px-6 lg:px-8 ">
        {children}
      </div>
    </div>
  );
};
