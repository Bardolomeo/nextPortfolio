'use client'

import { cn } from "@/lib/utils";
import { GlobeDemo } from "./GlobeDemo";
import { BackgroundGradientAnimation } from "./GradientBg";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json"
import MagicButton from "./MagicButton";
import { HiOutlineMail } from "react-icons/hi";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "md:auto-rows-[18rem] grid-cols-1 md:grid md:grid-cols-3 gap-y-5 max-w-7xl mx-8",
        className
      )}
    >
      {children}
    </div>
  );
};

const style= {
  background: 'linear-gradient(313deg, rgba(1,0,57,1) 21%, rgba(238,41,81,1) 90%)'
}

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  icon,
  img, 
  spareImg, 
  titleClassName, 
  imgClassName
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: string
  img?: string
  spareImg?: string
  titleClassName?: string;
  imgClassName?: string;
}) => {

  const [copied, setCopied] = useState(false);

  function handleClick(){
    setCopied(true);
    navigator.clipboard.writeText('sapiobard@gmail.com');
  }

  return (
    <div
      className={cn(
        `my-4 md:my-0 row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 ${id === 1 ? 'p-0' : null} ${id === 3 ? 'max-h-[288px]' : null}`,
        className
      )}
      style={style}
      
      >
      <div className={`group-hover/bento:translate-x-2 transition duration-200  z-50 ${id === 6 && 'self-center'}`}>
        <img src={icon} alt={icon}></img>
        {title &&  <div className={cn(titleClassName, "font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 z-50 px-10 pt-4")}>
          {title}
        </div>}
        {description && <div className={cn(titleClassName, "font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 z-50 px-10 pt-4")}>
          {description}
        </div>}
      </div>
    {img &&
    <div className="relative"> 
      <img src={img} alt={img} className={cn(imgClassName, "z-0 object-cover")}/>
    </div>}
    {spareImg && <img src={spareImg} alt={spareImg} className= "z-10 object-cover"/>}
    {id === 2 &&
      <GlobeDemo/>
      }
    {id === 3 && <div className="flex self-end -top-20 relative h-full max-h-[286px]">
      <div className="flex flex-col z-10 items-end opacity-50 lg:opacity-50  relative w-fit gap-1 pr-1 -top-8">
      <span className="py-2 lg:py-4 px-3 text-xs lg:text-sm rounded-lg text-center bg-[#fc3d63] w-20 min-h-8"/>
      {
        ["React.js", "Typescript", "Next"].map((item)=>
          (<span key={item} className="py-3 px-3 text-sm rounded-lg text-center bg-[#a70022] w-20 min-h-12">
            {item}
          </span>))
      }
      <span className="py-2 lg:py-4 px-3 text-xs lg:text-sm rounded-lg text-center bg-[#fc3d63] w-20 min-h-8"/>
      <span className="py-2 lg:py-4 px-3 text-xs lg:text-sm rounded-lg text-center bg-[#ba0025] w-20 min-h-8"/>
      <span className="py-2 lg:py-4 px-3 text-xs lg:text-sm rounded-lg text-center bg-[#fc3d63] w-20 min-h-8"/>
        </div>
      <div className="flex flex-col z-10 items-end opacity-50 lg:opacity-50  relative w-fit gap-1 pr-1 -top-8">
      <span className="py-2 lg:py-4 px-3 text-xs lg:text-sm rounded-lg text-center bg-[#fc0637] w-20 min-h-8"/>
      <span className="py-2 lg:py-4 px-3 text-xs lg:text-sm rounded-lg text-center bg-[#fe2450] w-20 min-h-8"/>
        {
          ["MySQL", "C++", "Godot"].map((item)=>
            (<span key={item} className="py-3 px-3 text-sm rounded-lg text-center bg-[#a70022] w-20 min-h-12">
              {item}
            </span>))
        }
      <span className="py-2 px-3 text-xs lg:text-sm rounded-lg text-center bg-[#fc3d63] w-20 min-h-8"/>
      <span className="py-2 px-3 text-xs lg:text-sm rounded-lg text-center bg-[#ff2551] w-20 min-h-8"/>
      <span className="py-2 px-3 text-xs lg:text-sm rounded-lg text-center bg-[#fc3d63] w-20 min-h-8"/>
      </div>
      </div>}
      {id === 6 && <div className="relative -top-32 w-full h-full">
        <div className='z-0 absolute'>
          <BackgroundGradientAnimation />
        </div>
        <div className="relative z-50 h-full">
          <div className="absolute">
            <Lottie options={{
              loop: copied,
              autoplay: copied,
              animationData,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid meet'
              }
            }} />
          </div>
          <div className="w-full h-40 flex justify-center relative items-end top-12">
            <MagicButton
              title={`${copied ? 'Email copied' : 'Copy my email'}`}
              icon={<HiOutlineMail />}
              position="left"
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>}
    </div>
  );
};