import React, { useState } from 'react';
import { useRouter } from 'next/router';
// import { useDispatch } from 'react-redux';
// import { login, signup } from '../store/actions/auth';
import { motion, AnimatePresence } from 'framer-motion';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const router = useRouter();
  //   const dispatch = useDispatch();

  //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     try {
  //       if (isSignup) {
  //         await dispatch(signup(email, password, confirmPassword));
  //         router.push('/');
  //       } else {
  //         await dispatch(login(email, password));
  //         router.push('/');
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
      <AnimatePresence>
        {isSignup ? (
          <motion.form
            className="bg-white p-6 rounded-lg w-2/5 shadow-md"
            // onSubmit={handleSubmit}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
          >
            <h1 className="text-lg font-medium mb-4">Signup</h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border border-gray-400 p-2 w-full"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border border-gray-400 p-2 w-full"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="border border-gray-400 p-2 w-full"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
              Signup
            </button>
            <p className="text-center text-gray-500 mt-4">
              Already have an account?
              <a
                href="#"
                className="text-indigo-600 underline"
                onClick={() => setIsSignup(false)}
              >
                Login
              </a>
            </p>
          </motion.form>
        ) : (
          <motion.form
            className="bg-white p-6 rounded-lg w-2/5 shadow-md"
            // onSubmit={handleSubmit}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
          >
            <h1 className="text-lg font-medium mb-4">Login</h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border border-gray-400 p-2 w-full"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border border-gray-400 p-2 w-full"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
              Login
            </button>
            <p className="text-center text-gray-500 mt-4">
              Don't have an account?
              <a
                href="#"
                className="text-indigo-600 underline"
                onClick={() => setIsSignup(true)}
              >
                Signup
              </a>
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoginPage;
