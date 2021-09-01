import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../features/HomeSlice";
import { NavLink } from "react-router-dom";
import { login, logout } from "../features/UserSlice";
const Home = () => {
    const user = useSelector((state) => state.user);
    const home = useSelector((state) => state.home);
    const { userDetails, isLoggedIn } = user;
    const dispatch = useDispatch();
    return (
        <div>
            <section className='text-gray-400 bg-gray-900 body-font'>
                <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
                    <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                        {isLoggedIn ? (
                            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
                                Welcome {userDetails.name}
                            </h1>
                        ) : (
                            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
                                Register or SignIn to see Magic
                            </h1>
                        )}
                        {/* <p className='mb-8 leading-relaxed'>
                            This is a platform where you can promote any events,
                            Request for Xerox from your Home only, and many
                            other benifits are included in this website. Hope
                            you will explore all and let us know how it is
                            through Contact page.
                        </p> */}
                        <p className='mb-8 leading-relaxed'>
                            The Certificates hosted on our platform provide a
                            way for the certificate holder to prove credibility
                            of their certificates since the certificates are
                            publicaly verifiable and can be viewed through
                            www.globalcert.cloud anytime, anywhere and by anyone
                            with adequate credentials.
                        </p>
                        <div className='flex justify-center'>
                            <NavLink
                                to='/contact'
                                className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                                Have any Doubt?
                            </NavLink>
                        </div>
                    </div>
                    <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                        <img
                            className='object-cover object-center rounded'
                            alt='hero'
                            src='https://source.unsplash.com/720x600/?college,connection'
                        />
                    </div>
                </div>
            </section>
            <button
                aria-label='Increment value'
                onClick={() =>
                    dispatch(
                        login({
                            name: "ABHINAV",
                            usn: "1NH17IS002",
                            src: "https://scontent.fixr3-1.fna.fbcdn.net/v/t1.6435-9/53732606_1854722427967281_6466001520994287616_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_ohc=AK_tu0xHDg4AX9XTSeA&_nc_ht=scontent.fixr3-1.fna&oh=58638bbc4b0b2ec248c0b112e178172f&oe=60D11FCF",
                        }),
                    )
                }>
                NAME
            </button>
            <button
                aria-label='Increment value'
                onClick={() => dispatch(logout())}>
                NAME
            </button>
            <button
                aria-label='Increment value'
                onClick={() => dispatch(increment())}>
                NAME
            </button>
            <h1>
                This is Home page {user.userDetails.name} - {home.value}
            </h1>
        </div>
    );
};

export default Home;
