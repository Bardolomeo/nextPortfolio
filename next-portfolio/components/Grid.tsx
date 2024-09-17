import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "../data/index"

export default function Grid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto z-50">
      {gridItems.map(({id, title, description, img, spareImg, titleClassName, imgClassName, icon, className}) => (
        <BentoGridItem
          key={id}
          id={id}
          title={title}
          description={description}
          img={img}
          spareImg={spareImg}
          icon={icon}
          titleClassName={titleClassName}
          imgClassName={imgClassName}
          className={cn(className, '')}
        />
      ))}
    </BentoGrid>
  );
}

