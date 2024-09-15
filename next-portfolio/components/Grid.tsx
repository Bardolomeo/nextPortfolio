import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
	<section id='about'>
		<BentoGrid>
		{gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (<BentoGridItem key={id} title={title} description={description} id={id} className={className} img={img}/>))}
		</BentoGrid>
	</section>
  )
}

export default Grid