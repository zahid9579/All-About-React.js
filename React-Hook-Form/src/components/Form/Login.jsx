import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'; // Import Link


const Login = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' placeholder="Enter your email address" 
                    {...register("email", { required: "Email is required" })}/>
                {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
            </div>

            <div className='form-group'>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' placeholder="Enter your password"
                    {...register("password", { required: "Password is required" })}/>
                {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
            </div>

            {/* Submit Button */}
            <button className='submit-btn' type='submit' disabled={isSubmitting}>
                {isSubmitting ? "Loading..." : "Login"}
            </button>

            {/* Navigate to Register Page */}
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </form>
    );
}

export default Login;
