import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from "../redux/features/courseSlice";

const Card = () => {
	const dispatch = useDispatch();
	const { course, loading, error } = useSelector((state) => state.course);

	useEffect(() => {
		dispatch(fetchCourses());
		
	}, [dispatch]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div className='bg-white py-24 sm:py-32'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:mx-0'>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						Choose what you love and do what you like
					</h2>
					<p className='mt-2 text-lg leading-8 text-gray-600'>
						IT is such a big field with full of opportunity. With
						the development of technology, the demand for IT is
						hard. However, it experiencing a huge trencident due to
						the raise of AI. So be ready to learn and adapt to the
						new technology.
					</p>
				</div>
				<div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
					{course && course.map((courseItem) => (
						<article
							key={courseItem.id}
							className='flex max-w-xl flex-col items-start justify-between'
						>
							<div className='flex items-center gap-x-4 text-xs'>
								<time
									dateTime={courseItem.datetime}
									className='text-gray-500'
								>
									{courseItem.date}
								</time>
							</div>
							<div className='group relative'>
								<h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
									<a href={courseItem.href}>
										<span className='absolute inset-0' />
										{courseItem.title}
									</a>
								</h3>
								<p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'>
									{courseItem.description}
								</p>
							</div>
							{/* Render author info if needed */}
						</article>
					))}
				</div>
			</div>
		</div>
	);
};

export default Card;