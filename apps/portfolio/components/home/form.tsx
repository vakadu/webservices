import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Input } from "@webservices/ui";

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
});

const Form = () => {
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (values: { email: string, message: string, name: string }) => {
        console.log(values);
        
    };

    return(
        <form 
            className=""  
            onSubmit={handleSubmit(onSubmit)}
        >
            <section className="grid grid-cols-2 gap-24">
                <Input
                    {...register("name", { required: "name is required" })}
                    placeholder="Enter your Name"
                    type="text"
                    inputMode="text"
                    label="Name"
                    containerClasses="col-span-1"
                    errorMessage={errors["name"]?.message as string}
                />
                <Input
                    {...register("email", { required: "email is required" })}
                    label="Email Address"
                    containerClasses="col-span-1"
                    placeholder="Enter your Email"
                    type="text"
                    inputMode="email"
                    errorMessage={errors["email"]?.message as string}
                />
                <article className="col-span-2 ">
                    <textarea
                        className={`h-[100px] border ring-1 py-12 resize-none outline-none w-full block transition-all duration-0.6 ease-smooth rounded-4 px-12 text-16 ${errors["message"]?.message && errors["message"]?.message !== "" ? "border-red-dark focus:ring-red-dark text-red-dark placeholder-red-dark" : "border-grey-light focus:ring-brand"}`}
                        {...register("message", { required: "message is required" })}
                    >

                    </textarea>
                    {
                        errors["message"]?.message && errors["message"]?.message !== "" &&
                            <p className='text-14 text-red-dark mt-4'>
                                { errors["message"]?.message }
                            </p>   
                    }
                </article>
            </section>
            <Button 
                className="mt-24"
                disabled={!isDirty || !isValid}
            >
                Send Message
            </Button>
        </form>
    )
};

export default Form;
