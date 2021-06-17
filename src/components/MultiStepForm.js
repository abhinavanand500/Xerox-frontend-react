import React from "react";
import { useForm, useStep } from "react-hooks-helper";

const defaultData = {
    firstName: "",
    lastName: "",
    nickName: "",
};
const steps = [
    { id: "name" },
    { id: "Address" },
    { id: "Contact" },
    { id: "review" },
    { id: "submit" },
];
export const MultiStepForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialStep: 2,
    });
    console.log(step);
    return (
        <div>
            <h1>This is Form</h1>
        </div>
    );
};

export default MultiStepForm;
