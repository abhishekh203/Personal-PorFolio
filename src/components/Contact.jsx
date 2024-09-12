import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { BounceLoader } from "react-spinners";

function Contact() {
  const [loading, setLoading] = useState(false); // State for loading
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userInfo = { name: data.name, email: data.email, message: data.message };
    setLoading(true); // Show loader
    try {
      await axios.post("https://getform.io/f/aroljvzb", userInfo);
      toast.success("Your message has been sent", {
        duration: 3000, // Duration in milliseconds (3 seconds)
        style: {
          background: '#4CAF50', // Green background for success
          color: '#fff', // White text
          fontSize: '16px',
        },
        iconTheme: {
          primary: '#fff', // Icon color
          secondary: '#4CAF50', // Icon background color
        },
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", {
        duration: 3000, // Duration in milliseconds (3 seconds)
        style: {
          background: '#f44336', // Red background for error
          color: '#fff', // White text
          fontSize: '16px',
        },
        iconTheme: {
          primary: '#fff', // Icon color
          secondary: '#f44336', // Icon background color
        },
      });
    } finally {
      setLoading(false); // Hide loader
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen  text-white"
    >
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Me</h1>
      <span className="block text-center mb-8 text-gray-">
        Please fill out the form below to get in touch with me.
      </span>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 shadow-lg rounded-lg p-6 sm:p-8 max-w-lg w-full"
        >
          <h1 className="text-2xl font-semibold mb-6 text-white">Send Your Message</h1>
          <div className="flex flex-col mb-5">
            <label className="block text-white font-medium mb-2">Full Name</label>
            <input
              {...register("name", { required: "Full Name is required" })}
              className="shadow-sm border border-gray-600 rounded-lg px-4 py-2 text-gray-200 bg-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
          </div>
          <div className="flex flex-col mb-5">
            <label className="block text-white font-medium mb-2">Email Address</label>
            <input
              {...register("email", { required: "Email Address is required" })}
              className="shadow-sm border border-gray-600 rounded-lg px-4 py-2 text-gray-200 bg-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
          </div>
          <div className="flex flex-col mb-6">
            <label className="block text-white font-medium mb-2">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="shadow-sm border border-gray-600 rounded-lg px-4 py-2 text-gray-200 bg-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200"
              id="message"
              name="message"
              rows="4"
              placeholder="Enter your message here"
            />
            {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
          </div>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg px-6 py-3 font-semibold hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
            >
              Send
            </button>
            {loading && (
              <div className="flex justify-center mt-4">
                <BounceLoader color="#007bff" size={60} />
              </div>
            )}
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default Contact;
