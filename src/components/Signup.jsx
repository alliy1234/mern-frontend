import React from 'react';
import './Signup.css'; // Import the custom CSS for additional styling
import { NavLink } from 'react-router-dom';
// import Login from './Login';
import { useForm } from "react-hook-form";

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      
      const onSubmit = (data) => console.log(data);
    
  return (
    <div>
 
        <div className="modal-box">
       
          <h3 className="font-bold text-lg text-center mb-4">Sign Up</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="border rounded-md w-full px-3 py-2 mt-1"
                {...register("name", { required: true })}
              />
              {errors.password && <span className='text-red-600'>This field is required</span>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="border rounded-md w-full px-3 py-2 mt-1"
                {...register("email", { required: true })}
              />
              {errors.password && <span className='text-red-600'>This field is required</span>}
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
            <button className="btn btn-primary w-full mt-4">Sign Up</button>
            <p>
                Alreday Have Account 
                <NavLink to='/login'>Login</NavLink>
            </p>
          </form>
        </div>
     
    </div>
  );
}

export default Signup;
