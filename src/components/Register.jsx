import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {createUser} = useContext(AuthContext);
  

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, email, password);

    createUser(email, password)
    .then(result =>{
      console.log(result.user);
    })
    .catch(error => {
       console.log(error.message);
    })
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
             <div className="flex relative items-center">
             <input
                type={showPassword? "text" : "password"}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
                
              />
              <span className="absolute right-0 px-4 text-[18px]" onClick={() => setShowPassword(!showPassword)}>
              {
                showPassword ? <FaEye /> : <FaEyeSlash />
              }
             
              </span>
             </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
        <p>
          Already have an account? please{" "}
          <Link to="/login">
            <span className="text-red-700 underline">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
