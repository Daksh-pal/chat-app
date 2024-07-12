import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8080/api/user/register`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };

  return (
    <div className="min-w-96 mx-auto text-white text-md bg-violet-400  rounded-xl">
      <div className="p-6 max-w-sm  rounded-lg shadow-2xl h-full">
        <h1 className=" font-bold text-3xl text-center text-black">Register</h1>
        <form onSubmit={onSubmitHandle} action="">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full input input-bordered h-10 bg-white my-1"
              value={user.fullName}
              onChange={(e) => {
                setUser({ ...user, fullName: e.target.value });
              }}
            />

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

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10 bg-white my-1"
              value={user.confirmPassword}
              onChange={(e) => {
                setUser({ ...user, confirmPassword: e.target.value });
              }}
            />

            <div className="flex items-center my-4">
              <p>Male</p>
              <input
                type="checkbox"
                className="checkbox bg-white mx-2"
                checked={user.gender === "male"}
                onChange={() => handleCheckbox("male")}
              />
              <p >Female</p>
              <input
                type="checkbox"
                className="checkbox bg-white mx-2"
                checked={user.gender === "female"}
                onChange={() => handleCheckbox("female")}
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="btn w-full my-1 text-white text-xl border-violet-400 border hover:bg-violet-700  bg-violet-500 "
              >
                Register
              </button>
            </div>

            <div className="flex my-2 justify-center text-violet-800">
              <p>Already have an account?</p>
              <Link to="/login" className="font-bold">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
