import React from "react";
// import styled from "styled-components";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { logout } from "../features/UserSlice";

const Navbar = () => {
    const user = useSelector((state) => state.user);
    const { isLoggedIn, userDetails } = user;
    const dispatch = useDispatch();
    return (
        <div>
            <Disclosure as='nav' className='bg-gray-900 body-font'>
                {({ open }) => (
                    <>
                        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                            <div className='flex items-center justify-between h-16'>
                                <div className='flex items-center'>
                                    <div className='flex-shrink-0'>
                                        <img
                                            className='h-8 w-8'
                                            src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                                            alt='Workflow'
                                        />
                                    </div>
                                    <div className='hidden md:block'>
                                        <div className='ml-10 flex items-baseline space-x-4'>
                                            <NavLink
                                                exact
                                                to='/'
                                                activeStyle={{
                                                    // fontWeight: "bold",
                                                    color: "white",
                                                    borderBottom:
                                                        "1px solid gray",
                                                }}
                                                activeClassName='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                                                className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                                                Home
                                            </NavLink>
                                            <NavLink
                                                exact
                                                to='/about'
                                                activeStyle={{
                                                    // fontWeight: "bold",
                                                    color: "white",
                                                    borderBottom:
                                                        "1px solid gray",
                                                }}
                                                activeClassName='text-white bg-gray-900 px-3 py-2 rounded-md text-sm font-medium'
                                                className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                                                About
                                            </NavLink>
                                            <NavLink
                                                exact
                                                to='/contact'
                                                activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "white",
                                                    borderBottom:
                                                        "1px solid gray",
                                                }}
                                                activeClassName='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                                                className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                                                Contact
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>

                                <div className='hidden md:block'>
                                    <div className='ml-4 flex items-center md:ml-6'>
                                        <button className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                                            <span className='sr-only'>
                                                View notifications
                                            </span>
                                            <BellIcon
                                                className='h-6 w-6'
                                                aria-hidden='true'
                                            />
                                        </button>

                                        {/* Profile dropdown */}
                                        <Menu
                                            as='div'
                                            className='ml-3 relative'>
                                            {({ open }) => (
                                                <>
                                                    {isLoggedIn ? (
                                                        <div>
                                                            <Menu.Button className='max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                                                                <span className='sr-only'>
                                                                    Open user
                                                                    menu
                                                                </span>
                                                                <img
                                                                    className='h-8 w-8 rounded-full'
                                                                    src={
                                                                        userDetails.src
                                                                    }
                                                                    alt=''
                                                                />
                                                            </Menu.Button>
                                                            <Transition
                                                                show={open}
                                                                as={Fragment}
                                                                enter='transition ease-out duration-100'
                                                                enterFrom='transform opacity-0 scale-95'
                                                                enterTo='transform opacity-100 scale-100'
                                                                leave='transition ease-in duration-75'
                                                                leaveFrom='transform opacity-100 scale-100'
                                                                leaveTo='transform opacity-0 scale-95'>
                                                                <Menu.Items
                                                                    static
                                                                    style={{
                                                                        zIndex: "999",
                                                                    }}
                                                                    className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                                                    <NavLink
                                                                        to='/about'
                                                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                                                                        <span className='sr-only'>
                                                                            Open
                                                                            user
                                                                            menu
                                                                        </span>
                                                                        Profile
                                                                    </NavLink>

                                                                    <NavLink
                                                                        to='/home'
                                                                        onClick={() =>
                                                                            dispatch(
                                                                                logout(),
                                                                            )
                                                                        }
                                                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                                                                        Logout
                                                                    </NavLink>
                                                                </Menu.Items>
                                                            </Transition>
                                                        </div>
                                                    ) : (
                                                        <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
                                                            <NavLink
                                                                to='/signin'
                                                                activeStyle={{
                                                                    color: "white",
                                                                }}
                                                                className='whitespace-nowrap text-base font-medium text-gray-300 hover:text-white'>
                                                                Sign in
                                                            </NavLink>
                                                            <NavLink
                                                                to='/signup'
                                                                className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
                                                                Sign up
                                                            </NavLink>
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                        </Menu>
                                    </div>
                                </div>
                                <div className='-mr-2 flex md:hidden'>
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                                        <span className='sr-only'>
                                            Open main menu
                                        </span>
                                        {open ? (
                                            <XIcon
                                                className='block h-6 w-6'
                                                aria-hidden='true'
                                            />
                                        ) : (
                                            <MenuIcon
                                                className='block h-6 w-6'
                                                aria-hidden='true'
                                            />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className='md:hidden'>
                            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                                <NavLink
                                    exact
                                    to='/'
                                    activeClassName='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
                                    className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                                    Home
                                </NavLink>
                                <NavLink
                                    exact
                                    to='/about'
                                    activeClassName='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
                                    className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                                    About
                                </NavLink>
                                <NavLink
                                    exact
                                    to='/contact'
                                    activeClassName='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
                                    className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                                    Contact
                                </NavLink>
                            </div>
                            {isLoggedIn ? (
                                <div className='pt-4 pb-3 border-t border-gray-700'>
                                    <div className='flex items-center px-5'>
                                        <div className='flex-shrink-0'>
                                            <img
                                                className='h-10 w-10 rounded-full'
                                                src={userDetails.src}
                                                alt=''
                                            />
                                        </div>
                                        <div className='ml-3'>
                                            <div className='text-base font-medium leading-none text-white'>
                                                {userDetails.name}
                                            </div>
                                            <div className='text-sm font-medium leading-none text-gray-400'>
                                                {userDetails.usn}
                                            </div>
                                        </div>
                                        <button className='ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                                            <span className='sr-only'>
                                                View notifications
                                            </span>
                                            <BellIcon
                                                className='h-6 w-6'
                                                aria-hidden='true'
                                            />
                                        </button>
                                    </div>
                                    <div className='mt-3 px-2 space-y-1'>
                                        <NavLink
                                            to='/'
                                            exact
                                            activeClassName='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
                                            className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'>
                                            Profile
                                        </NavLink>
                                        <NavLink
                                            to='/about'
                                            exact
                                            onClick={() => dispatch(logout())}
                                            activeClassName='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
                                            className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'>
                                            Logout
                                        </NavLink>
                                    </div>
                                </div>
                            ) : (
                                <div className='pt-4 pb-3 border-t border-gray-700'>
                                    <div className='flex items-center px-10'>
                                        {/* <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'> */}
                                        <NavLink
                                            to='/signin'
                                            className='whitespace-nowrap text-base font-medium px-8 text-gray-300 hover:text-white'>
                                            Sign in
                                        </NavLink>
                                        <NavLink
                                            to='/signup'
                                            className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-8 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
                                            Sign up
                                        </NavLink>
                                        {/* </div>  */}
                                    </div>
                                </div>
                            )}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
};

export default withRouter(Navbar);
