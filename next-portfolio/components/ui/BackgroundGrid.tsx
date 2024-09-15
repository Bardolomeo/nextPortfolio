import React from "react";

export function GridBackground() {
  return (
    <div className="h-screen w-screen dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.05] relative flex items-center justify-center -z-1">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
      </p>
    </div>
  );
}
