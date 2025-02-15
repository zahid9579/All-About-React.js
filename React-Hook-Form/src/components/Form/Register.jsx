import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Register = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    navigate("/"); // Navigate to login after registration
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          placeholder="Enter your First Name"
          {...register("firstname", { required: "First name is required" })}
        />
        {errors.firstname && <p className="error">{errors.firstname.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="middlename">Middle Name</label>
        <input
          type="text"
          id="middlename"
          placeholder="Enter your Middle Name"
          {...register("middlename", { required: "Middle name is required" })}
        />
        {errors.middlename && <p className="error">{errors.middlename.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          placeholder="Enter your Last Name"
          {...register("lastname", { required: "Last name is required" })}
        />
        {errors.lastname && <p className="error">{errors.lastname.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          placeholder="Enter your password" 
          {...register ("password", {required: "Password is required"})}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="mobileno">Mobile No</label>
        <input
          type="tel"
          id="mobileno"
          placeholder="Enter your Mobile Number"
          {...register("mobileno", { required: "Mobile number is required" })}
        />
        {errors.mobileno && <p className="error">{errors.mobileno.message}</p>}
      </div>

      <button className="submit-btn" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Loading..." : "Register"}
      </button>

  
    </form>
  );
};

export default Register;
