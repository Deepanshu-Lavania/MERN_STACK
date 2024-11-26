import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

export default function Signup() {
    const [authUser, setAuthUser] = useAuth(); // Global state from AuthContext
    const {
    register,
    handleSubmit,
    watch,//watch for password comparision
    formState: { errors },
  } = useForm();

  const password = watch("password", "");
  const validatePasswordMatch = (value) => {
    return value === password || "Password don't match";
  };
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmpassword: data.confirmPassword,
    };
    await axios
      .post("/api/user/signup", userInfo)
      .then((response) => {
        console.log("axios get response through backend is : ", response.data);
        if (response.data) {
          alert("Signup successful! You can now log in. ");
        }
        localStorage.setItem("messenger", JSON.stringify(response.data));
        setAuthUser(response.data);
        if (setAuthUser) {
          console.log("data get using authContext ", setAuthUser);
        }
      })
      .catch((error) => {
        if (error.response) {
          alert("axios error : " + error.response.data.message);
        }
      });
  };
  return (
    <>

      <div className="flex  h-screen items-center justify-center">
      {/* <div>
        {authUser ? (
          <p>Authenticated User: {JSON.stringify(authUser)}</p>
        ) : (
          <p>No user authenticated</p>
        )}
      </div> */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-black  px-6 py-3 rounded-md space-y-3"
        >
          <h1 className="text-2xl items-center text-blue-600 font-bold">
            Messenger
          </h1>
          <h2 className="text-2xl items-center">
            Create a new{" "}
            <span className="text-blue-600 font-semibold">Account</span>
          </h2>
          {/* username */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Username"
              {...register("name", { required: true })}
            />
          </label>
          {/* errors will return when field validation fails  */}
          {errors.name && (
            <small className="text-red-600 font-semibold">
              **This field is required**
            </small>
          )}
          {/* E-mail */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </label>
          {errors.email && (
            <small className="text-red-600 font-semibold">
              **This field is required**
            </small>
          )}

          {/* password */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </label>
          {errors.password && (
            <small className="text-red-600 font-semibold">
              **This field is required**
            </small>
          )}
          {/* confirmPassword */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: true,
                validate: validatePasswordMatch,
              })}
            />
          </label>
          {errors.confirmPassword && (
            <small className="text-red-600 font-semibold">
              {errors.confirmPassword.message}
            </small>
          )}
          {/* Text & Button */}
          <div>
            <input
              type="submit"
              value="Signup"
              className="text-white cursor-pointer bg-blue-600 w-full rounded-lg py-2"
            />
            <p>
              Have any Account?{" "}
              <Link to={"/login"} className="text-blue-500 underline cursor-pointer">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}