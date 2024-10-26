import React, { useState } from "react";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");

  const navigate = useNavigate();

  const jwtToken = document.cookie.slice(9);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = data.includes("@")
      ? { email: data, password }
      : { username: data, password };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_baseURL}/user/login`,
        loginData,
        {
          withCredentials: true,
        }
      );

      localStorage.setItem("username", response.data.username);
      localStorage.setItem("userID", response.data.userID);
      localStorage.setItem("jwtToken", jwtToken);

      enqueueSnackbar("Logged in successfully", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        autoHideDuration: 3000,
      });
      navigate("/");
    } catch (error) {
      console.error(error.message);
      enqueueSnackbar("Login failed. Please check your credentials", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        autoHideDuration: 3000,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-green-700 mb-6">Login</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email or Username
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email or username "
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/user/register" className="text-green-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
