"use client"

import React from "react";
 
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./RevealingCanvasEffect";
import { BackgroundBeams } from "./BackgroundBeams";

export function CanvasRevealEffectDemo() {
	return (
	  <>
		<div className="py-10 flex flex-col lg:flex-row items-center justify-center gap-y-16 mx-auto px-8 gap-x-8 md:h-full h-[80rem]">
			  <Card title="Design" icon={<h1 className="text-7xl uppercase text-white-200 font-mono text-center">1</h1>}>
				<CanvasRevealEffect
				  animationSpeed={4}
				  containerClassName="bg-[#710017]"
				  colors={[
					[255, 26, 73],
				]}
				  dotSize={3}
				/>
			</Card>
			  <Card title="Develop" icon={<h1 className="text-7xl uppercase text-white-200 font-mono">2</h1>}>
				<CanvasRevealEffect
				  animationSpeed={4}
				  containerClassName="bg-[#3b043e]"
				  colors={[
					[133, 19, 80],
				  ]}
				  dotSize={3}
				/>
			  </Card>

			  <Card title="Deploy" icon={
					<h1 className="text-7xl uppercase text-white-200">3</h1>
				}>
				<CanvasRevealEffect
				  animationSpeed={4}
				  containerClassName="bg-[#060544]"
				  colors={[[4, 0, 204]]}
				  />
			  </Card>
		</div>
	  </>
	);
  }
   
  const Card = ({
	title,
	icon,
	children,
  }: {
	title: string;
	icon: React.ReactNode | string;
	children?: React.ReactNode;
  }) => {
	const [hovered, setHovered] = React.useState(false);
	return (
		<div
		onMouseEnter={() => setHovered(true)}
		onMouseLeave={() => setHovered(false)}
		className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto m-4 relative h-[20rem] rounded-2xl"
		>

		<Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black z-50" />
		<Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black z-50" />
		<Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black z-50" />
		<Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black z-50" />
   
		<AnimatePresence>
		  {hovered && (
			  <motion.div
			  initial={{ opacity: 0 }}
			  animate={{ opacity: 1 }}
			  className="h-full w-full absolute inset-0"
			  >
			  {children}
			</motion.div>
		  )}
		</AnimatePresence>
		<div className="relative z-20">
		  <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
			{icon}
		  </div>
		  <h2 className="text-white-200 text-4xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10  mt-4  font-geist font-bold group-hover/canvas-card:-translate-y-2 transition duration-200">
			{title}
		  </h2>
		</div>
		  	<BackgroundBeams className="group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-[100%] h-full absolute overflow-hidden" />
	  </div>
	);
  };
   
  const AceternityIcon = () => {
	return (
	  <svg
		width="66"
		height="65"
		viewBox="0 0 66 65"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
	  >
		<path
		  d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
		  stroke="currentColor"
		  strokeWidth="15"
		  strokeMiterlimit="3.86874"
		  strokeLinecap="round"
		  style={{ mixBlendMode: "darken" }}
		/>
	  </svg>
	);
  };
   
  export const Icon = ({ className, ...rest }: any) => {
	return (
	  <svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth="1.5"
		stroke="currentColor"
		className={className}
		{...rest}
	  >
		<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
	  </svg>
	);
  };