import React from "react";
import { MultiStepForm } from "../components/MultiStepForm";
const SignUp = () => {
    return (
        <div>
            <main>
                <section className='absolute w-full h-full'>
                    <div
                        className='absolute bg-gray-900 top-0 w-full h-full bg-gray-900'
                        style={{
                            backgroundSize: "100%",
                            backgroundRepeat: "no-repeat",
                        }}></div>
                    <div className='container mx-auto px-4 h-full'>
                        <div className='flex content-center items-center justify-center h-full'>
                            <div className='w-full lg:w-6/12 px-4'>
                                <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0'>
                                    <div className='rounded-t mb-0 px-6 py-6'>
                                        <div className='text-center mb-3'>
                                            <h6 className='text-gray-600 text-sm font-bold'>
                                                Sign up with
                                            </h6>
                                        </div>
                                        <div className='btn-wrapper text-center'>
                                            <button
                                                className='bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs'
                                                type='button'
                                                style={{
                                                    transition: "all .15s ease",
                                                }}>
                                                <img
                                                    alt='...'
                                                    className='w-5 mr-1'
                                                    src={
                                                        require("../assets/img/github.svg")
                                                            .default
                                                    }
                                                />
                                                Github
                                            </button>
                                            <button
                                                className='bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs'
                                                type='button'
                                                style={{
                                                    transition: "all .15s ease",
                                                }}>
                                                <img
                                                    alt='...'
                                                    className='w-5 mr-1'
                                                    src={
                                                        require("../assets/img/google.svg")
                                                            .default
                                                    }
                                                />
                                                Google
                                            </button>
                                        </div>
                                        <hr className='mt-6 border-b-1 border-gray-400' />
                                        <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
                                            <div className='text-gray-500 text-center mb-3 font-bold'>
                                                <small>
                                                    Or sign up with credentials
                                                </small>
                                            </div>
                                            <MultiStepForm />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default SignUp;
