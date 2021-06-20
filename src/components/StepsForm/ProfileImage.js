import React, { useRef } from "react";
import CameraAltRoundedIcon from "@material-ui/icons/CameraAltRounded";
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
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
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
        </div>
    );
};

export default Department;
