import React, { useRef, useState } from "react";
import CameraAltRoundedIcon from "@material-ui/icons/CameraAltRounded";
import instanceApi from "../../apis/instanceApi";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
const Department = ({ formData, setForm, navigation }) => {
    let history = useHistory();
    const {
        role,
        college,
        name,
        semester,
        usn,
        email,
        phone,
        shopName,
        department,
        password,
        confirmPassword,
    } = formData;
    const [imag, setImage] = useState(null);
    const uploadedImage = useRef(null);
    const imageUploader = useRef(null);
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        setImage(file);
        const [img] = e.target.files;
        if (img) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = img;
            reader.onload = (e) => {
                current.src = e.target.result;
            };
            reader.readAsDataURL(img);
        }
    };
    const handleSignUp = async () => {
        // console.log(formData);
        const data = new FormData();
        data.append("role", role);
        data.append("college", college);
        data.append("name", name);
        data.append("semester", semester);
        data.append("usn", usn);
        data.append("email", email);
        data.append("phone", phone);
        data.append("shopName", shopName);
        data.append("department", department);
        data.append("password", password);
        data.append("confirmPassword", confirmPassword);
        data.append("file", imag);
        try {
            const response = await instanceApi.post("/register", data);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
        // history.push("/");
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
                    name='img'
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
                    onClick={handleSignUp}>
                    SUBMIT
                </Button>
            </div>
        </div>
    );
};

export default Department;
