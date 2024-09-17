import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'



const Testimonials = () => {
	return (
		<div>
			<div className='py-20' id='testimonials'>
				<h1 className='heading pb-16' >Kind words from {' '}
					<span className='text-purple' id='projects'>
						People I&apos;ve worked with
					</span>
				</h1>
			</div>
			<div className='pb-8'>
				<InfiniteMovingCards
					items={testimonials}
					direction='right'
					pauseOnHover={true}
					img='/shadow.jpg'
					speed='slow'
					className=''
				/>
			</div>
			<div className='flex flex-wrap justify-center items-center'>
				{companies.map(({id, name, img, nameImg}) => (
					<div key={id} className='flex px-8 py-4'>
						<img src={img} alt={nameImg}></img>
						<span className='px-2 self-center text-lg'>{name}</span>
					</div>
				))}
			</div>
		</div>
  )
}

export default Testimonials