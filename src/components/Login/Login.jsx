import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login to Your Account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form action="" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-2xl font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 
                           border border-gray-300 rounded-md shadow-sm
                           placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-md "
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-2xl font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-2 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 
                           border border-gray-300 rounded-md shadow-sm
                           placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-md "
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-1 cursor-pointer"
                    size={20}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-1 cursor-pointer"
                    size={20}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className="flex justify-between pt-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-6 w-6 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-2xl text-gray-900"
                >
                  Remember Me
                </label>
              </div>
              <div className="text-sm ml-16 pt-2">
                <Link
                  to=".forget-password"
                  className=" text-blue-600 hover:text-blue-500"
                >
                  Forget Your Password
                </Link>
              </div>
            </div>
            <div>
                <button type="submit" className="mt-6 group relative w-full h-[40px] flex justify-center py-4 px-4 border border-transparent text-2xl font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                    Submit
                </button>
            </div>
            <div className="flex w-full pt-4">
               <h4 className="text-2xl">Not have a Acoount?</h4>
               <Link to="/sign-up" className="text-blue-600 pl-2 ">
               Sign-up
               </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
