import React, {  useRef } from "react";
import PageTitle from "../layouts/PageTitle";
import emailjs from "emailjs-com";

function Support() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_SERVICE_ID,
        process.env.REACT_TEMPLATE_ID,
        form.current,
        process.env.REACT_USER_ID
      )
      .then(
        (result) => {
          alert("Form submitted successfully");
        },
        (error) => {
          alert("Form Not Submitted");
        }
      );
    e.target.reset();
  };
  return (
    <div className="bg-zinc-300">
      <PageTitle heading="Leave a Message"></PageTitle>
      <form ref={form} className="mx-auto mt-12 max-w-xl text-center">
        <div class="mb-6">
          <input
            type="text"
            name="from_name"
            id="from_name"
            class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter name: "
            required
          />
        </div>
        <div class="mb-6">
          <input
            type="email"
            name="reply_to"
            id="reply_to"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Email: "
            required
          />
        </div>
        <div>
          <textarea
            type="text"
            id="message"
            name="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
            required
          ></textarea>
        </div>

        <button
          variant="gradient"
          size="lg"
          className="mt-3 py-3 px-6 sm:w-[60%] my-1"
        >
          Send Message
        </button>
      </form>
      <div></div>
    </div>
  );
}

export default Support;
