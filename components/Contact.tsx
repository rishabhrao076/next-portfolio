import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";

type Props = {
    pageInfo: PageInfo;
};

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

function Contact({ pageInfo }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        console.log(formData);
        window.location.href = `mailto:rishabhrao076@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}
    `;
    };

    return (
        <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-full px-8 md:px-16 justify-center items-center">
            <h3 className="sectionHeading">Contact</h3>
            <div className="flex flex-col w-full space-y-10">
                <h4 className="text-4xl font-semibold text-center">
                    Lets Talk
                </h4>
                <div className="space-y-10">
                    <div className="flex items-center space-x-5">
                        <PhoneIcon className="h-7 w-7 hover:animate-pulse" />
                        <p>{pageInfo.phoneNumber}</p>
                    </div>
                    <div className="flex items-center space-x-5">
                        <MapPinIcon className="h-7 w-7 hover:animate-pulse" />
                        <p>{pageInfo.address}</p>
                    </div>
                    <div className="flex items-center space-x-5">
                        <EnvelopeIcon className="h-7 w-7 hover:animate-pulse" />
                        <p>{pageInfo.email}</p>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-2 gap-2"
                >
                    <input
                        {...register("name")}
                        type="text"
                        placeholder="Name"
                        className="contactInput col-span-1"
                    />
                    <input
                        {...register("email")}
                        type="email"
                        placeholder="email"
                        className="contactInput col-span-1"
                    />
                    <input
                        {...register("subject")}
                        type="text"
                        placeholder="Subject"
                        className="contactInput col-span-2"
                    />
                    <textarea
                        {...register("message")}
                        name="message"
                        placeholder="Message"
                        className="contactInput col-span-2"
                    />
                    <button
                        type="submit"
                        className="text-white text-lg bg-green-500 rounded-md py-1 col-span-2"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
