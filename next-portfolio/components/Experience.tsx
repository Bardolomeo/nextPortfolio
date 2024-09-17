import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'
import { CgCardSpades } from 'react-icons/cg'

const Experience = () => {
  return (
	<div>
    	<div>
			  <div className='py-20 pb-10' id='Experience'>
			  	<h1 className='heading pb-16' >My Work 
			  		<span className='text-purple' id='projects'>
			  			{' '} Experiences
			  		</span>
			  	</h1>
			  </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-2 mx-8 gap-10'>
          {workExperience.map((card) => (
            <Button 
            key={card.id}
            duration={Math.floor(Math.random() * 1000) +10000}
            borderRadius='1.5rem'
            className='bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800'
            >
              <div className='flex lg:flex-col flex-row p-3 py-6 md:p-5 lg:p-10 gap-2'>
                <img src={card.thumbnail} alt={card.thumbnail} 
                className='w-16' />
                <div className='flex flex-col lg:ms-0 ms-5 '>
                  <h1 className='text-lg md:text-xl lg:text-2xl font-bold text-left'>
                    {card.title}
                  </h1>
                  <p className='text-sm md:text-base lg:text-lg text-white-100 text-left mt-5'>
                      {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
  </div>
  )
}

export default Experience