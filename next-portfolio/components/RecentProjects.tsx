import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaArrowRightFromBracket } from 'react-icons/fa6'

function RecentProjects() {
  return (
	<div className='py-20'>
		<h1 className='heading pb-16' >A small selection of {' '}
			<span className='text-purple' id='projects'>
				Recent Projects
			</span>
		</h1>
	 	<div className='flex flex-wrap items-center justify-center gap-y-32 p-4 pt-16 gap-x-12'>
			{projects.map(({id, title, des, img, iconLists, link}) => (
				<PinContainer key={id} title={title} href={link} className='w-96 h-96 bg-black-100 flex items-center flex-col'>
					<div className='relative w-[70%] h-[60%] flex justify-center items-center rounded-xl overflow-hidden pt-4'>
						<div className='w-full h-full bg-[rgba(238,41,81,0.1)] z-0 relative top-4'>
							<img src='/bg.png' alt='bg-image'/>
						</div>
						<div>
							<img
							src={img}
							alt={title}
							className='z-0 absolute pt-4 bottom-0 h-full left-0'	
								/>
						</div>
					</div>
					<h1 className='font-bold md:text-xl text-base line-clamp-2 self-start px-4 py-4'>
						{title}
					</h1>
					<p className=' md:text-sm text-sm line-clamp-2 px-4'>
						{des}
					</p>
					<div className='flex self-start justify-between mb-3 relative px-4 pb-6 -bottom-8 w-full'>
						<div className='flex relative items-center'>
							{iconLists.map((icon, index) => (
								<div key={id} className='border border-white/[0.2] bg-black-100 rounded-full w-8 h-8 flex justify-center items-center'
								style={{
									transform: `translateX(-${10 * index}px)`
									}}>
									<img src={icon} alt={icon} className='p-2'/>
								</div>
							))}
						</div>
						<div className='self-end flex justify-center items-center'>
							<div>
								Check Live Site
								<div className='flex justify-end'>
									<FaArrowRightFromBracket/>
								</div>
							</div>
						</div>
					</div>
				</PinContainer>
			))}
		</div>
	</div>
  )
}

export default RecentProjects
