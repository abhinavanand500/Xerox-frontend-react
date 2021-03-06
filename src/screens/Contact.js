import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import instanceApi from "../apis/instanceApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
const Contact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleApi = async () => {
        const response = await instanceApi.post("/contact", {
            name,
            phone,
            email,
            message,
        });
        console.log(response);
        if (response.data.saved === true) {
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            toast.success(response.data.message);
        } else {
            toast.error(response.data.message);
        }
    };
    return (
        <div>
            <section className='text-gray-400 bg-gray-900 body-font relative'>
                <div className='container px-5 py-10 mx-auto'>
                    <div className='flex flex-col text-center w-full mb-20'>
                        <h2 className='text-xs text-indigo-400 tracking-widest font-medium title-font mb-1'>
                            Any Problem? Don't worry, Our Customer Service is
                            best
                        </h2>
                        <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
                            A creator-friendly customer support team that's
                            always just a click away
                        </h1>
                        <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                            Please write your problem, any problem you are
                            facing can be entertained by us. Also if your
                            college name is not there for registration then
                            please write full details of College, We will add
                            it.????
                        </p>
                    </div>
                </div>
                <div className='container px-5  mx-auto flex sm:flex-nowrap flex-wrap'>
                    <div className='lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
                        <iframe
                            width='100%'
                            height='100%'
                            title='map'
                            className='absolute inset-0'
                            frameborder='0'
                            marginHeight='0'
                            marginWidth='0'
                            scrolling='no'
                            // src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621'
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7289705556645!2d103.74054681482598!3d1.3389199990234693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11a683102c95%3A0xf5222721e239ae3a!2s288%20Jurong%20East%20Street%2021%2C%20Singapore!5e0!3m2!1sen!2sin!4v1627869550054!5m2!1sen!2sin'
                            style={{
                                filter: "grayscale(1) contrast(1.2) opacity(0.16)",
                            }}></iframe>
                        <div className='bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md'>
                            <div className='lg:w-1/2 px-6'>
                                <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                                    ADDRESS
                                </h2>
                                <p className='mt-1'>
                                    288 Jurong East, Street 21 Singapore -
                                    605288
                                </p>
                            </div>

                            <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
                                <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                                    EMAIL
                                </h2>
                                <NavLink
                                    className='text-indigo-400 leading-relaxed'
                                    to='/'>
                                    automated.globalcert@gmail.com
                                </NavLink>
                                <h2 className='title-font font-semibold text-white tracking-widest text-xs mt-4'>
                                    PHONE
                                </h2>
                                <p className='leading-relaxed'>9934386621</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'>
                        <h2 className='text-white text-lg mb-1 font-medium title-font'>
                            Thanks for Reaching Us
                        </h2>
                        <p className='leading-relaxed mb-5'>
                            Kindly give your correct details. We will reach out
                            to you ASAP.
                        </p>
                        <div className='relative mb-4'>
                            <label
                                for='name'
                                className='leading-7 text-sm text-gray-400'>
                                Name
                            </label>
                            <input
                                type='text'
                                id='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                name='name'
                                className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                            />
                        </div>

                        <div className='relative mb-4'>
                            <label
                                for='phone'
                                className='leading-7 text-sm text-gray-400'>
                                Phone Number
                            </label>
                            <input
                                type='text'
                                id='phone'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                name='phone'
                                className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                            />
                        </div>
                        <div className='relative mb-4'>
                            <label
                                for='email'
                                className='leading-7 text-sm text-gray-400'>
                                Email
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                            />
                        </div>
                        <div className='relative mb-4'>
                            <label
                                for='message'
                                className='leading-7 text-sm text-gray-400'>
                                How can we help you?
                            </label>
                            <textarea
                                id='message'
                                name='message'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'></textarea>
                        </div>
                        <button
                            className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
                            onClick={handleApi}>
                            SEND
                        </button>
                        <p className='text-xs text-gray-400 text-opacity-90 mt-3'>
                            Our average response time is under 2 minutes ????
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import instanceApi from "../apis/instanceApi";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// toast.configure();
// const Contact = () => {
//     const [name, setName] = useState("");
//     const [phone, setPhone] = useState("");
//     const [email, setEmail] = useState("");
//     const [message, setMessage] = useState("");

//     const handleApi = async () => {
//         const response = await instanceApi.post("/contact", {
//             name,
//             phone,
//             email,
//             message,
//         });
//         console.log(response);
//         if (response.data.saved === true) {
//             setName("");
//             setEmail("");
//             setPhone("");
//             setMessage("");
//             toast.success(response.data.message);
//         } else {
//             toast.error(response.data.message);
//         }
//     };
//     return (
//         <div>
//             <section className='text-gray-400 bg-gray-900 body-font relative'>
//                 <div className='container px-5 py-10 mx-auto'>
//                     <div className='flex flex-col text-center w-full mb-20'>
//                         <h2 className='text-xs text-indigo-400 tracking-widest font-medium title-font mb-1'>
//                             Any Problem? Don't worry, Our Customer Service is
//                             best
//                         </h2>
//                         <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
//                             A creator-friendly customer support team that's
//                             always just a click away
//                         </h1>
//                         <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
//                             Please write your problem, any problem you are
//                             facing can be entertained by us. Also if your
//                             college name is not there for registration then
//                             please write full details of College, We will add
//                             it.????
//                         </p>
//                     </div>
//                 </div>
//                 <div className='container px-5  mx-auto flex sm:flex-nowrap flex-wrap'>
//                     <div className='lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
//                         <iframe
//                             width='100%'
//                             height='100%'
//                             title='map'
//                             className='absolute inset-0'
//                             frameborder='0'
//                             marginHeight='0'
//                             marginWidth='0'
//                             scrolling='no'
//                             src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5951179261338!2d77.68993201489162!3d12.9337240908808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13cb00000001%3A0xab10e26281718cc2!2sNew%20Horizon%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1624040721134!5m2!1sen!2sin'
//                             style={{
//                                 filter: "grayscale(1) contrast(1.2) opacity(0.16)",
//                             }}></iframe>
//                         <div className='bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md'>
//                             <div className='lg:w-1/2 px-6'>
//                                 <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
//                                     ADDRESS
//                                 </h2>
//                                 <p className='mt-1'>
//                                     New Horizon College Of Engineering,
//                                     Bangalore, 560103, Karnataka
//                                 </p>
//                             </div>

//                             <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
//                                 <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
//                                     EMAIL
//                                 </h2>
//                                 <NavLink
//                                     className='text-indigo-400 leading-relaxed'
//                                     to='/'>
//                                     abhinav.anand500@email.com
//                                 </NavLink>
//                                 <h2 className='title-font font-semibold text-white tracking-widest text-xs mt-4'>
//                                     PHONE
//                                 </h2>
//                                 <p className='leading-relaxed'>8095509320</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'>
//                         <h2 className='text-white text-lg mb-1 font-medium title-font'>
//                             Thanks for Reaching Us
//                         </h2>
//                         <p className='leading-relaxed mb-5'>
//                             Kindly give your correct details. We will reach out
//                             to you ASAP.
//                         </p>
//                         <div className='relative mb-4'>
//                             <label
//                                 for='name'
//                                 className='leading-7 text-sm text-gray-400'>
//                                 Name
//                             </label>
//                             <input
//                                 type='text'
//                                 id='name'
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 name='name'
//                                 className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
//                             />
//                         </div>

//                         <div className='relative mb-4'>
//                             <label
//                                 for='phone'
//                                 className='leading-7 text-sm text-gray-400'>
//                                 Phone Number
//                             </label>
//                             <input
//                                 type='text'
//                                 id='phone'
//                                 value={phone}
//                                 onChange={(e) => setPhone(e.target.value)}
//                                 name='phone'
//                                 className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
//                             />
//                         </div>
//                         <div className='relative mb-4'>
//                             <label
//                                 for='email'
//                                 className='leading-7 text-sm text-gray-400'>
//                                 Email
//                             </label>
//                             <input
//                                 type='email'
//                                 id='email'
//                                 name='email'
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
//                             />
//                         </div>
//                         <div className='relative mb-4'>
//                             <label
//                                 for='message'
//                                 className='leading-7 text-sm text-gray-400'>
//                                 How can we help you?
//                             </label>
//                             <textarea
//                                 id='message'
//                                 name='message'
//                                 value={message}
//                                 onChange={(e) => setMessage(e.target.value)}
//                                 className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'></textarea>
//                         </div>
//                         <button
//                             className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
//                             onClick={handleApi}>
//                             SEND
//                         </button>
//                         <p className='text-xs text-gray-400 text-opacity-90 mt-3'>
//                             Our average response time is under 2 minutes ????
//                         </p>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Contact;
