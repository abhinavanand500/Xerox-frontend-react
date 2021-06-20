import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import Role from "./StepsForm/Role";
import XeroxShopDetail from "./StepsForm/XeroxShopDetail";
import UserInfo from "./StepsForm/UserInfo";
import ProfileImage from "./StepsForm/ProfileImage";
import Contact from "./StepsForm/Contact";
import Review from "./StepsForm/Review";
const defaultData = {
    role: "",
    college: "",
    name: "",
    semester: "",
    usn: "",
    email: "",
    phone: "",
    shopName: "",
    department: "",
    password: "",
    confirmPassword: "",
    img: {},
};
const steps = [
    { id: "role" },
    { id: "shopDetails" },
    { id: "userInfo" },
    { id: "dp" },
    { id: "contact" },
    { id: "review" },
];
export const MultiStepForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });
    console.log(formData);
    const props = { formData, setForm, navigation };
    switch (step.id) {
        case "role":
            return <Role {...props} />;
        case "shopDetails":
            return <XeroxShopDetail {...props} />;
        case "userInfo":
            return <UserInfo {...props} />;
        case "dp":
            return <ProfileImage {...props} />;
        case "contact":
            return <Contact {...props} />;
        case "review":
            return <Review {...props} />;
        default:
            return <h1>Hii</h1>;
    }
};

export default MultiStepForm;
