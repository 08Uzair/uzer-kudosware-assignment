import React, { useEffect, useState } from "react";
import { getUsers, signup, signin } from "../redux/actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const handelSignUp = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const newUser = {
        userName:name,
        userEmail:email,
        userPassword:password,
      };
      await dispatch(signup(newUser));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }

    window.location.reload();
  };
  const handleSignIn = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const user = {
        userEmail:email,
        userPassword:password,
      };
      console.log(user);
      await dispatch(signin(user));

      navigate("/");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center  bg-gradient-to-br from-indigo-900 via-purple-500 to-blue-500">
      <div className="bg-white rounded-2xl shadow-lg p-8 shadow-md w-full max-w-md">
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsSignIn(true)}
            className={`px-4 py-2 text-lg font-semibold ${
              isSignIn
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`px-4 py-2 text-lg font-semibold ${
              !isSignIn
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Sign Up
          </button>
        </div>
        {isSignIn ? (
          <SignInForm
            handleSignIn={handleSignIn}
            setEmail={setEmail}
            setPassword={setPassword}
            loading={loading}
          />
        ) : (
          <SignUpForm
            handelSignUp={handelSignUp}
            name={name}
            setname={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
};

const SignInForm = ({ handleSignIn, setEmail, setPassword, loading }) => (
  <form onSubmit={handleSignIn}>
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="email"
      >
        Email
      </label>
      <input
        className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="password"
      >
        Password
      </label>
      <input
        className="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div className="flex items-center justify-between">
      <button
        className="bg-indigo-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        type="submit"
        disabled={loading}
      >
        {loading ? "Signing in..." : "Signin"}
      </button>
    </div>
  </form>
);

const SignUpForm = ({
  handelSignUp,
  name,
  setName,
  setEmail,
  email,
  setPassword,
  password,
  loading,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handelSignUp(e);
      }}
    >
      <>
        <div className="mb-4"></div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            User Name
          </label>
          <input
            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter User Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-indigo-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
        </div>
      </>
    </form>
  );
};

export default Auth;
