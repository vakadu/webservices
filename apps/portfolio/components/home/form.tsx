"use client";

import { useState } from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from 'react-hot-toast';

// import { Server } from "@webservices/config";
// import { useAppwrite } from "@webservices/services";
import { Button, Input } from "@webservices/ui";
import { randomStringGenerator } from "@webservices/utils";

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
});

const Form = () => {
    // const { createDocument } = useAppwrite();
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const [loading, setLoading] = useState(false);

    const onSubmit = async (values: { email: string, message: string, name: string }) => {
        // const docId = randomStringGenerator(10);
        // setLoading(true);
        // try {
        //     const { name, email, message } = values;
        //     const response = await createDocument(
        //         Server.databaseID,
        //         '64dd9f5f190953d43866',
        //         docId,
        //         { name, email, message }
        //     );
        //     reset();
        //     setLoading(false);
        //     toast.success('Form submitted successfully.');
        // } catch (error) {
        //     setLoading(false);
        //     toast.error('Something went wrong.Please try again');
        // }
    };

    return (
        <form
            className=""
            onSubmit={handleSubmit(onSubmit)}
        >
            <section
                className="grid grid-cols-1 md:grid-cols-2 gap-24"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="400"
            >
                <Input
                    {...register("name", { required: "name is required" })}
                    placeholder="EX. Vinod"
                    type="text"
                    inputMode="text"
                    label="Name*"
                    containerClasses="col-span-1"
                    errorMessage={errors["name"]?.message as string}
                />
                <Input
                    {...register("email", { required: "email is required" })}
                    label="Email Address*"
                    containerClasses="col-span-1"
                    placeholder="Ex. vinod@gmail.com"
                    type="text"
                    inputMode="text"
                    errorMessage={errors["email"]?.message as string}
                />
                <article className="col-span-2 ">
                    <label className={`text-14 leading-[32px] font-semibold ${errors["message"]?.message && errors["message"]?.message !== "" ? 'text-red-dark' : 'text-grey-textDark dark:text-white'}`}>
                        Your Message*
                    </label>
                    <textarea
                        className={`h-[100px] border py-12 resize-none outline-none w-full block transition-all duration-0.6 ease-smooth focus:ring-1 focus:ring-brand rounded-4 px-12 text-16 ${errors["message"]?.message && errors["message"]?.message !== "" ? "border-red-dark focus:ring-red-dark text-red-dark placeholder-red-dark" : "border-grey-light"}`}
                        {...register("message", { required: "message is required" })}
                    >

                    </textarea>
                    {
                        errors["message"]?.message && errors["message"]?.message !== "" &&
                        <p className='text-14 text-red-dark mt-4'>
                            {errors["message"]?.message}
                        </p>
                    }
                </article>
            </section>
            <Button
                className="mt-24"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="500"
                disabled={loading}
            >
                Send Message
            </Button>
        </form>
    )
};

export default Form;
