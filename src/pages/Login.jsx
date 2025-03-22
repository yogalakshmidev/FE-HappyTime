import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const LoginHandler = async (e) => {
    e.preventDefault();
    console.log("input", input);
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        // after success login navigate to the home page
        navigate("/");
        toast.success(res.data.message);
        setInput({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.log("error in Login handler", error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center w-screen h-screen justify-center">
      <form
        onSubmit={LoginHandler}
        className="shadow-lg flex flex-col gap-5 p-8"
      >
        <div className="my-4">
          <h1 className="text-center font-bold text-xl">Logo</h1>
          <p className="text-sm text-center">
            Sign up to see Photos and video from your friends
          </p>
        </div>

        <div className="flex place-content-center">
          <label className="font-medium">Email Id : </label>
          <input
            type="email"
            placeholder="Enter Email Id"
            name="email"
            value={input.email}
            onChange={changeEventHandler}
            className="border border-l-fuchsia-600"
          />
        </div>
        <div className="flex place-content-center ">
          <label className="font-medium">Password : </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={input.password}
            onChange={changeEventHandler}
            className="border border-l-fuchsia-600"
          />
        </div>
        
        {/* For loading indicator */}
        {
             loading ? (
              <button type="button" class="bg-indigo-500 ..." disabled>
              <svg class="animate-spin h-1 w-1 mr-3 ..." viewBox="0 0 24 24">
                 
              </svg>
              Processing...
            </button>
        ) : (
          <button
            type="submit"
            className="bg-black text-white rounded-lg m-3 p-2 "
          >
            Login
          </button>
        )}

        <span className="text-center">
          Does not have an account ?
          <Link to="/signup" className="text-blue-600 mx-2">
            Sign up
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
