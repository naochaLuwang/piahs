"use client";
import { useState } from "react";
import Input from "../Input";
import TextBox from "../TextBox";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
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
      phone: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    setIsLoading(true);

    axios
      .post("/api/message", data)
      .then(() => {
        toast.success("Message sent successfully");
        setValue("name", ""); // Reset the "name" field value
        setValue("phone", ""); // Reset the "phone" field value
        setValue("message", "");
      })
      .catch((error) => {
        toast.error("Error sending message");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="flex flex-col items-center h-auto px-8 py-10 space-y-3 rounded-md shadow-lg w-96 bg-blue-950">
      <h1 className="text-white">Quick Contact</h1>
      <p className="text-xs text-center text-white">
        For any doubts or queries, please fill the details below& we will
        contact you shortly
      </p>
      <Input
        id="name"
        label="Name"
        register={register}
        errors={errors}
        required
      />
      <Input
        id="phone"
        label="Mobile No."
        register={register}
        errors={errors}
        required
      />
      <TextBox
        id="message"
        label="Message"
        register={register}
        errors={errors}
        required
      />
      <button
        className="w-full py-2 font-medium bg-yellow-500 rounded-md shadow-md"
        onClick={handleSubmit(onSubmit)}
        disabled={isLoading}
      >
        {isLoading ? "Sending Message" : "Contact Me"}
      </button>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Contact;
