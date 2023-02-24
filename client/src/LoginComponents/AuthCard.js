import React from 'react'

const AuthCard = () => {
    return (

        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="block bg-transparent shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                    <div className="px-4 md:px-0">
                        <div className="md:p-12 md:mx-6">
                            <div className="text-center">
                                <img
                                    className="mx-auto w-48"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                    alt="logo"
                                />
                                <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">We are The Lotus Team</h4>
                            </div>
                            <form>
                                <p className="mb-4">Please login to your account</p>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#252525] bg-clip-padding rounded-md"
                                        id="exampleFormControlInput1"
                                        placeholder="Username"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="password"
                                        className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#252525] bg-clip-padding rounded-md"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="text-center pt-1 mb-12 pb-1">
                                    <div className='btn px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md mb-3'>
                                            Log in
                                    </div>
                                    <a className="text-gray-500" href="#!">Forgot password?</a>
                                </div>
                                <div className="flex items-center justify-between pb-6">
                                    <p className="mb-0 mr-2">Don't have an account?</p>
                                    <button
                                        type="button"
                                        className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                    >
                                        Danger
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthCard