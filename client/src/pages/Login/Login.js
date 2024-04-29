import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/features/authSlice';
import Website_Icon from '../../images/Website_Icon.png';


export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const { user, error } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const LoginUser = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await dispatch(login({ email, password }));
        } catch (error) {
            toast.error(error, { autoClose: 1000 });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user) {
            toast.success("Login successful", {autoClose: 2000}) // Redirect to dashboard after successful login
            navigate('/dashboard');
        }
        if (error) {
            toast.error(error);
        }
    }, [user, error]);
    return (
		<>
			<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					<img
						className='mx-auto h-10 w-auto'
						src={Website_Icon}
						alt='Study with me Icon'
					/>
					<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
						Sign in to your account
					</h2>
				</div>

				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form
						className='space-y-6'
						onSubmit={LoginUser}
					>
						<div>
							<div className='flex items-center justify-between'>
								<label
									for='username'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Email Address
								</label>
							</div>
							<div className='mt-2'>
								<input
									id='email'
									placeholder='Enter your email'
									name='email'
									type='email'
									autoComplete='email'
									required
									value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>

						<div>
							<div className='flex items-center justify-between'>
								<label
									htmlFor='password'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Password
								</label>
								<div className='text-sm'>
									<a
										href='#'
										className='font-semibold text-indigo-600 hover:text-indigo-500'
									>
										Forgot password?
									</a>
								</div>
							</div>
							<div className='mt-2'>
								<input
									id='password'
									placeholder='Enter your password'
									name='password'
									type='password'
									autoComplete='current-password'
									required
									value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>

						<div>
							<button
								type='submit'
								className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							>
								{loading ? (
									<span
										size='sm'
										role='status'
										tag={'span'}
										className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
									>
										Loading...
									</span>
								) : (
									'Sign in'
								)}
							</button>

                            <ToastContainer />
						
						</div>
						<div className='text-sm'>
							<a
								href='/signup'
								className='font-semibold text-indigo-600 hover:text-indigo-500'
							>
								Don't have an account? Sign up
							</a>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}