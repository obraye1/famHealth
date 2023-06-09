import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ForgotPassword() {
  const showToastMessage = () => {
    toast.success('Success Notification !', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <div class="container mx-auto">
      <div class="flex justify-center items-center h-screen px-6">
        <div class="w-full xl:w-3/4 lg:w-11/12 flex">
          <div class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"></div>
          <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <div class="px-8 mb-4 text-center">
              <h3 class="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
              <p class="mb-4 text-sm text-gray-700">
                Enter your email address below and we'll send you a link to
                reset your password!
              </p>
            </div>
            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter Email Address..."
                />
              </div>
              <div class="mb-6 text-center">
                <button
                  class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                  onClick={showToastMessage}
                >
                  Reset Password
                </button>
                {/* <ToastContainer /> */}
              </div>
              <hr class="mb-6 border-t" />
              <div class="text-center">
                <Link
                  class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  to="/signup"
                >
                  Create an Account!
                </Link>
              </div>
              <div class="text-center">
                <Link
                  
                  class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  to="/login"
                >
                  Already have an account? Login!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
