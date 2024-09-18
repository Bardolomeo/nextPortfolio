import React from 'react'
import { CanvasRevealEffectDemo } from './ui/CanvasRevealEffectDemo'
import { Button } from './ui/MovingBorders'

const Approach = () => {
  return (
	<div>
		<div className='flex justify-center items-center gap-4 font-bold heading lg:text-5xl pt-24 pb-8'>
			<span className=''>My
			</span>
			<h1 className=' text-purple'>{' '}Process</h1>
		</div>
			<CanvasRevealEffectDemo />
	</div>
  )
}

export default Approach