import {
	CalendarIcon,
	ServerIcon,
	BookOpenIcon,
} from '@heroicons/react/20/solid';
import source from '../../images/source.png';

export default function defualtNotLogin(){
	return (
		<div className='relative isolate overflow-hidden bg-white px-6 sm:pt-32 lg:overflow-visible lg:px-0'>
			<div className='absolute inset-0 -z-10 overflow-hidden'>
				<svg
					className='absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]'
					aria-hidden='true'
				>
					<defs>
						<pattern
							id='e813992c-7d03-4cc4-a2bd-151760b470a0'
							width={200}
							height={200}
							x='50%'
							y={-1}
							patternUnits='userSpaceOnUse'
						>
							<path
								d='M100 200V.5M.5 .5H200'
								fill='none'
							/>
						</pattern>
					</defs>
					<svg
						x='50%'
						y={-1}
						className='overflow-visible fill-gray-50'
					>
						<path
							d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
							strokeWidth={0}
						/>
					</svg>
					<rect
						width='100%'
						height='100%'
						strokeWidth={0}
						fill='url(#e813992c-7d03-4cc4-a2bd-151760b470a0)'
					/>
				</svg>
			</div>
			<div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
				<div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
					<div className='lg:pr-4'>
						<div className='lg:max-w-lg'>
							<p className='text-base font-semibold leading-7 text-indigo-600'>
								Learn how to code
							</p>
							<h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
								Open Source Project
							</h1>
							<p className='mt-6 text-xl leading-8 text-gray-700'>
								This is the website allow you to code and follow
								my step thoughtout all the project I had did in
								the future and what I will do.
							</p>
						</div>
					</div>
				</div>
				<div className='-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
					<img
						className='w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]'
						src={source}
						alt=''
					/>
				</div>
				<div className='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
					<div className='lg:pr-4'>
						<div className='max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg'>
							<p>
								Over the time, I will regularly upload all the
								code and the explanation as well as the contents
								I learnt from school, (Seneca College) as
								computer science students.
							</p>
							<ul
								role='list'
								className='mt-8 space-y-8 text-gray-600'
							>
								<li className='flex gap-x-3'>
									<CalendarIcon
										className='mt-1 h-5 w-5 flex-none text-indigo-600'
										aria-hidden='true'
									/>
									<span>
										<strong className='font-semibold text-gray-900'>
											Experiences.
										</strong>{' '}
										All you need is a passion to concentrate
										on your goals. Many professional in the
										field hadn’t a degree in computer
										science at the time. However, they
										slowly and gradually, learn.
									</span>
								</li>
								<li className='flex gap-x-3'>
									<BookOpenIcon
										className='mt-1 h-5 w-5 flex-none text-indigo-600'
										aria-hidden='true'
									/>
									<span>
										<strong className='font-semibold text-gray-900'>
											Materials.
										</strong>{' '}
										As a student at Seneca, major in cs. I
										will explain and show you everything you
										need, so that you dont have to
										"officaly" become student. However, if
										you have a chance, I would recommend you
										to study in any institution.
									</span>
								</li>
								<li className='flex gap-x-3'>
									<ServerIcon
										className='mt-1 h-5 w-5 flex-none text-indigo-600'
										aria-hidden='true'
									/>
									<span>
										<strong className='font-semibold text-gray-900'>
											Platform.
										</strong>{' '}
										I will try my best to implement a server
										or AWS so we can experiences more.
										However, I will try to make it as simple
										as possible and encourage everyone to
										have their own computer, OS as Linux
										preferred.
									</span>
								</li>
							</ul>
							<p className='mt-8'>
								Hope you have a good time at my website. If you
								could give me a feedback, I would be very
								appreciated.
							</p>
							<h2 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>
								No experiences, No problems.
							</h2>
							<p className='mt-6'>
								My name is Dave, an enthusiastic programmer who
								wants to understand the digital world.
								Currently, I’m living in Canada as international
								students. During my teenage, I dedicated a chunk
								of my time for programming, therefore, I will
								help you as a online mentor to study this
								subject.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}