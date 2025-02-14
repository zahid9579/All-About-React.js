import React from "react";
import { useForm } from "react-hook-form";





const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid Email address",
            },
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
