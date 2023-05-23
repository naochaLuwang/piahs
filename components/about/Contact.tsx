"use client";
import Input from "../Input";
import TextBox from "../TextBox";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      mobileNo: "",
      message: "",
    },
  });
  return (
    <div className="flex flex-col items-center h-auto px-8 py-10 space-y-3 rounded-md shadow-lg w-96 bg-blue-950">
      <h1 className="text-white">Quick Contact</h1>
      <p className="text-xs text-center text-white">
        For any doubts or queries, please fill the details below& we will
        contact you shortly
      </p>
      <Input id="email" label="Email" register={register} errors={errors} />
      <Input
        id="mobileNo"
        label="Mobile No."
        register={register}
        errors={errors}
      />
      <TextBox
        id="message"
        label="Message"
        register={register}
        errors={errors}
      />
      <button className="w-full py-2 font-medium bg-yellow-500 rounded-md shadow-md">
        Contact Me
      </button>
    </div>
  );
};

export default Contact;
