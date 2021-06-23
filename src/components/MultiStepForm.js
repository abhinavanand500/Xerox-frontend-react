import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import Role from "./StepsForm/Role";
import Detail from "./StepsForm/Detail";
import UserInfo from "./StepsForm/UserInfo";
import ProfileImage from "./StepsForm/ProfileImage";
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
    { id: "Details" },
    { id: "userInfo" },
    { id: "dp" },
];
export const MultiStepForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });
    const props = { formData, setForm, navigation };
    switch (step.id) {
        case "role":
            return <Role {...props} />;
        case "Details":
            return <Detail {...props} />;
        case "userInfo":
            return <UserInfo {...props} />;
        case "dp":
            return <ProfileImage {...props} />;
        default:
            return <h1>Hii</h1>;
    }
};

export default MultiStepForm;
