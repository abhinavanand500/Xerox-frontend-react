import React, { useRef } from "react";
import CameraAltRoundedIcon from "@material-ui/icons/CameraAltRounded";

import Button from "@material-ui/core/Button";
const Department = ({ formData, setForm, navigation }) => {
    const uploadedImage = useRef(null);
    const imageUploader = useRef(null);

    const handleImageUpload = (e) => {
        const [img] = e.target.files;
        if (img) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = img;
            reader.onload = (e) => {
                current.src = e.target.result;
            };
            reader.readAsDataURL(img);
            formData.img = img;
        }
    };
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <div className='my-3' />
                <input
                    type='file'
                    accept='image/*'
                    onChange={handleImageUpload}
                    ref={imageUploader}
                    style={{
                        display: "none",
                    }}
                />

                <div
                    onClick={() => imageUploader.current.click()}
                    className='relative flex items-center link'>
                    <span className='absolute top-0 right-11 cursor-pointer md:right-10 h-4 w-4  rounded-full text-black'>
                        <CameraAltRoundedIcon
                            fontSize='large'
                            style={{ color: "grey" }}
                        />
                    </span>
                    <img
                        alt='team'
                        ref={uploadedImage}
                        style={{
                            borderRadius: "50%",
                            width: "200px",
                            height: "200px",
                        }}
                        className=' bg-gray-100 object-cover object-center flex-shrink-0 rounded-full'
                        src='https://previews.123rf.com/images/hvostik/hvostik1607/hvostik160700078/61014335-graduate-student-avatar-student-student-icon-flat-design-style-education-graduation-isolated-student.jpg'></img>
                </div>
                <div className='my-3' />
            </div>
            <div className='text-gray-500 text-center mt-3 mb-3 font-bold mt-3'>
                <h1 className='mt-1 mb-3'>
                    <span className='mx-2'>📓</span> Please upload your picture
                    in Formal Attire
                </h1>
            </div>
            <div className='text-center'>
                <Button
                    color='secondary'
                    variant='contained'
                    onClick={() => navigation.previous()}
                    style={{ marginRight: "1rem", marginLeft: "1rem" }}>
                    Back
                </Button>
                <Button
                    color='primary'
                    variant='contained'
                    onClick={() => navigation.next()}>
                    SUBMIT
                </Button>
            </div>
        </div>
    );
};

export default Department;
