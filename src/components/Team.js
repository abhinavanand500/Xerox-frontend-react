import React from "react";
import Abhinav from "../assets/img/Abhinav.jpeg";
import Chinmaya from "../assets/img/Chinmaya.jpeg";
const Team = () => {
    return (
        <div>
            <section className='text-gray-400 bg-gray-900 body-font'>
                <div className='container px-5 py-24 mx-auto'>
                    <div className='flex flex-col text-center w-full mb-20'>
                        <h1 className='text-2xl font-medium title-font mb-4 text-white'>
                            OUR TEAM
                        </h1>
                        <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                            The way a team plays as a whole determines its
                            success. You may have the greatest bunch of
                            individual stars in the world, but if they don’t
                            play together, the club won’t be worth a dime.
                        </p>
                    </div>
                    <div className='flex flex-wrap -m-4'>
                        <div className='p-4 lg:w-1/4 md:w-1/2'>
                            <div className='h-full flex flex-col items-center text-center'>
                                <img
                                    alt='team'
                                    className='flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4'
                                    src={Abhinav}
                                />
                                <div className='w-full'>
                                    <h2 className='title-font font-medium text-lg text-white'>
                                        Abhinav Anand
                                    </h2>
                                    <h3 className='text-gray-500 mb-3'>
                                        Full Stack Web Developer
                                    </h3>
                                    <p className='mb-4'>
                                        Web+App Developer, Always keen to learn
                                        new technologies related to it. Working
                                        on Web+App from last 1 year.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 lg:w-1/4 md:w-1/2'>
                            <div className='h-full flex flex-col items-center text-center'>
                                <img
                                    alt='team'
                                    className='flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4'
                                    src={Chinmaya}
                                />
                                <div className='w-full'>
                                    <h2 className='title-font font-medium text-lg text-white'>
                                        Chinmaya Kumar Nayak
                                    </h2>
                                    <h3 className='text-gray-500 mb-3'>
                                        Full Stack Web Developer
                                    </h3>
                                    <p className='mb-4'>
                                        Have a good knowledge of ML along with
                                        Web Development. Working on development
                                        from last 1 years
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
