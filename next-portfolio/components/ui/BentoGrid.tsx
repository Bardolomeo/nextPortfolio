import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { Globe } from "./Globe";
import { GlobeDemo } from "./GlobeDemo";

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
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-rows-6 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 max-h-[80vh]",
        className
      )}
	  style={
		{
			background: 'linear-gradient(315deg, hsla(270, 94%, 25%, 1) 0%, hsla(204, 54%, 35%, 1) 66%, hsla(169, 76%, 39%, 1) 100%, hsla(169, 76%, 39%, 1) 100%)'
		}
	  }
    >
	  <div className={`${id === 5} && flex justify-center h-full`}>
	  	<div className="w-full h-full absolute z-0 -top-12">
	  		{img && <img
			className={cn(imgClassName, 'object-cover object-center md:w-[100vw] md:h-[100vh] sm:w-[100vw] sm:-top-20')}
			src={img}
			alt={img}
			/>}
		</div>
		<div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
			{spareImg && <img
				className='object-cover object-center'
				src={spareImg}
				alt={spareImg}
			/>}
		</div>
	  {id === 6 && (
		<BackgroundGradientAnimation>
			<div className="flex absolute z-10 items-center justify-center text-white font-bold"/>
		</BackgroundGradientAnimation>
	  )}

	  {id === 2 && (
		  <GlobeDemo />
	  )}

	  </div>
	  <div className={cn(titleClassName, "group-hover/bento:translate-x-2 transition duration-200 z-50")}>
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 z-50">
          {title}
		</div>
	  </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200 z-50">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 z-50">
        </div>
        <div className="font-sans font-normal text-[#c1c2d3] text-sm md:text-xs lg:text-base">
          {description}
        </div>
      </div>
    </div>
  );
};
