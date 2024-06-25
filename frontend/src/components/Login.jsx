import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const res = await axios.post(
        `http://localhost:8080/api/user/login`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <div className="min-w-96 mx-auto text-black text-md">
      <div className="p-6 max-w-sm  rounded-lg shadow-2xl h-full">
        <h1 className="text-black font-bold text-3xl text-center">Login</h1>
        <form action="" onSubmit={onSubmitHandle}>
          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full  input input-bordered h-10 bg-white my-1"
              value={user.username}
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
              }}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full input input-bordered h-10 bg-white my-1"
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
            <div className="flex justify-center">
              <button className="btn w-full text-white text-xl hover:bg-black bg-gray-800 my-1">
                Login
              </button>
            </div>

            <div className="flex my-2 justify-center">
              <p>Don't have an account?</p>
              <Link to="/register" className="text-black font-bold">
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
