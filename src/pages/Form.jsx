import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    age: yup
      .number()
      .positive("Age must be a positive number")
      .integer("Age must be an integer")
      .min(18, "Age must be at least 18 years old")
      .typeError("Age must be a number")
      .required("Age is required"),
    password: yup.string().min(4, "Password must be at least 4 characters").max(20, "Password must not exceed 20 characters").required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <input
        type="text"
        placeholder="Full Name..."
        {...register("fullName")}
        style={{ marginBottom: "10px" }}
      />
      <p>{errors.fullName?.message}</p>
      <input
        type="text"
        placeholder="Email..."
        {...register("email")}
        style={{ marginBottom: "10px" }}
      />
      <p>{errors.email?.message}</p>
      <input
        type="number"
        placeholder="Age..."
        {...register("age")}
        style={{ marginBottom: "10px" }}
      />
      <p>{errors.age?.message}</p>
      <input
        type="password"
        placeholder="Password..."
        {...register("password")}
        style={{ marginBottom: "10px" }}
      />
      <p>{errors.password?.message}</p>
      <input
        type="password"
        placeholder="Confirm Password..."
        {...register("confirmPassword")}
        style={{ marginBottom: "10px" }}
      />
      <p>{errors.confirmPassword?.message}</p>
      <input type="submit" />
    </form>
  );
};

export default Form;
