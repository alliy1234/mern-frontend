import React from 'react';
import './Login.css'; // Import the custom CSS for additional styling
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => console.log(data);

  return (
    <div className="login-container">
      <div className="login-box">
        <h3 className="font-bold text-lg text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="border rounded-md w-full px-3 py-2 mt-1"
              {...register("email", { required: true })}
            />
            {errors.email && <span className='text-red-600'>This field is required</span>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="border rounded-md w-full px-3 py-2 mt-1"
              {...register("password", { required: true })}
            />
            {errors.password && <span className='text-red-600'>This field is required</span>}
          </div>
          <button className="btn btn-primary w-full mt-4" type="submit">Login</button>
          <p className="text-center mt-4">
            Not Registered? <NavLink to='/signup' className='text-primary underline'>Signup</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
