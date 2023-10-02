// SignUpForm.js
import { AlertComponent } from "./AlertComponent";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  // Create state variables for form input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(true);
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const result = await response.json();

      setMessage(result.message);
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2000);
      if (result.success) {
        alert("Successfully Account Created");

        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-slate-100 h-[87vh] ">
      <div className="h-20 flex items-center ">
        <AlertComponent message={message} open={open} />
      </div>
      <div className=" flex justify-center items-center h-4/5 py-auto ">
        <form
          onSubmit={handleSubmit}
          className=" bg-white shadow-md rounded px-8 pt-4 pb-4 mb-4 w-auto md:w-1/3 "
        >
          <h1 className="text-2xl mb-3">SignUp</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="text"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="user-name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
