import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'

const Footer = () => {
  return (
	<div>
		<div className='p-10 flex justify-center'>
			<img src='footer-grid.svg' alt='footer grid' className='object-fill absolute opacity-50'></img>
			<div className='flex flex-col justify-center items-center pt-10 max-w-[75vh] md:max-w-[60vw] gap-y-14'>
				<div className='flex flex-col lg:flex-row gap-5'>
					<h1 className='text-2xl sm:text-4xl font-bold text-center text-white-200'>
						Upgrade <span className='text-violet-500'>Your </span> 
					</h1>
					<span className='font-mono text-white font-light text-2xl sm:text-3xl text-center'>{'{ digital_persona } '}</span>
				</div>
				<a href="mailto:sapiobard@gmail.com">
					<MagicButton icon={<FaLocationArrow />} position='right' title='Contact Me' />
				</a>
			</div>
		</div>
		<div className='w-full flex-col md:flex-row mx-10 pt-10 -bottom-12 relative justify-center'>
			<p>Copyright © 2024 Bard</p>
		</div>
	</div>
  )
}

export default Footer