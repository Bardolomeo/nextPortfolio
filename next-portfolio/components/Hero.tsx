import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { GridBackground } from './ui/BackgroundGrid'
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow, FaMobileButton } from 'react-icons/fa6';
import Grid from './Grid';

const Hero = () => {
  return (
	<div className='pb-20 pt-36 h-full'>
		<div>
			<Spotlight className='top-10 left-10 h-[vh]' fill='white'/>
			<Spotlight className='absolute -right-[90vw] h-screen' fill='purple'/>
			<Spotlight className='-top-10 left-40 h-[120vh] w-[50vw]' fill='blue '/>
		</div>

		<div className='absolute top-0 left-0'>
			<GridBackground/>
		</div>

		<div className='flex justify-center flex-col text-center items-center'>
			<h2 className='text-white-100 z-10 uppercase tracking-widest text-sm'>
				Dynamic web magic with nextjs
			</h2>
			<TextGenerateEffect className='text-center text-[40px] md:max-w-[45vw] sm:max-w-[80vw] items-center' filter={true} words='Transforming Concepts into Seamless User Experiences' />
			<p className='z-10 text-white-200 text-xl'>Hi I&apos;m Bard, a web developer based in Italy</p>
		</div>
		<a href='/about'className='flex justify-center py-10'>
			<MagicButton title='Magic Button' position='left' icon={<FaLocationArrow/>} />
		</a>
		<Grid />
	</div>
  );
}

export default Hero