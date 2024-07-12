import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {useDispatch} from "react-redux";
import { setAuthUser } from "../redux/userSlice";

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

const navigate  = useNavigate();
const dispatch = useDispatch();

  const onSubmitHandle = async (e) => {
    e.preventDefault();
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
      navigate("/");
      console.log(res.data);
      dispatch(setAuthUser(res.data));
      toast.success("Logged in successfully");
    } catch (error) {
      console.log(error.message);
    }
    setUser({
      username: "",
      password: "",
    });
  };

  return (
      <div className="p-6 max-w-sm h-auto rounded-lg shadow-2xl bg-violet-400  ">
        <h1 className="text-black font-bold text-3xl text-center">Login</h1>
        <form action="" onSubmit={onSubmitHandle}>
          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full  input input-bordered h-10 bg-white my-1 text-black"
              value={user.username}
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
              }}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full input input-bordered h-10 bg-white my-1 text-black"
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
            <div className="flex justify-center">
              <button className="btn w-full my-1 text-white text-xl border-violet-400 border hover:bg-violet-700  bg-violet-500 ">
                Login
              </button>
            </div>

            <div className="flex my-2 justify-center  text-violet-800">
              <p>Don't have an account?</p>
              <Link to="/register" className="font-bold">
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
  );
}
