import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Website_Icon from '../../images/Website_Icon.png';
import { signup } from '../../redux/features/authSlice';

export default function Register() {
    const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const { user, error } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const Register = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			await dispatch(signup({ email, password, username }));
		} catch (error) {
			toast.error(error, { autoClose: 1000 });
		} finally {
			setLoading(false);
		}
	};


    useEffect(() => {
        if (user) {
            toast.success("Sign Up successfully", {autoClose:2000})
			navigate() // Redirect to login page after successful registration
        }
        if (error) {
            toast.error(error);
        }
    }, [user, error]);

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src={Website_Icon}
                        alt="Study with me Icon"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign Up to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={Register}>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor='username' className="block text-sm font-medium leading-6 text-gray-900">
                                    User name
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    placeholder='  Enter your username'
                                    name="name"
                                    type="text" // Change type to "text" for username input
                                    autoComplete="name" // Change autoComplete to "name"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
						<div>
							<div className="flex items-center justify-between">
								<label for="email" className="block text-sm font-medium leading-6 text-gray-900">
									Email address
								</label>
							</div>

							<div className="mt-2">
								<input
									id="email"
									placeholder='Enter your email address'
									name="email"
									type="email"
									autoComplete="email"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label for="password" className="block text-sm font-medium leading-6 text-gray-900">
									Password
								</label>
							</div>
							<div className="mt-2">
								<input
									id="password"
									placeholder='Enter your password'
									name="password"
									type="password"
									autoComplete="current-password"
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								{loading ? (
									<span className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
										Loading...
									</span>
								) : (
									"Sign up"
								)}
							</button>

                            <ToastContainer />
                            
						</div>
						<div className="text-sm">
							<a href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
								Have an account? Sign in
							</a>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
