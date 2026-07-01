import { FiSend } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const form_access_key = import.meta.env.VITE_FORM_ACCESS_KEY;

export default function Contact() {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [alertbox, setAlertbox] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", form_access_key);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setSuccess("Message sent successfully!");
      event.target.reset();
    } else {
      setError("Something went wrong. Try again!");
    }
  };

  return (
    <div className="bg-[#050816] w-full flex flex-col justify-start border-t border-white/20 text-white pb-10">
      <div data-aos="fade-right" className="bg-[#050816] border-white/20">
        <h1 className="text-xl underline decoration-purple-500 decoration-2 underline-offset-4 sm:text-2xl sm:px-10 font-bold py-4 px-5">
          Contact Me
        </h1>
      </div>

      <div className="flex flex-col lg:justify-center lg:flex-row lg:pr-10">
        <form
          onSubmit={onSubmit}
          className="space-y-4 mt-8 px-5 my-10 max-w-xl sm:mx-auto sm:px-10 sm:space-y-6 md:mx-15 md:max-w-4xl lg:mx-0 lg:max-w-3xl"
        >
          {success && (
            <p
              className={`flex justify-between w-full text-center text-white text-base md:text-xl bg-green-500 p-3 rounded-xl ${alertbox ? "hidden" : ""}`}
            >
              {success}
              <IoClose size={28} onClick={() => setAlertbox(!alertbox)} />
            </p>
          )}
          {error && (
            <p
              className={`flex justify-between w-full text-center text-white text-base md:text-xl bg-red-500 p-3 rounded-xl ${alertbox ? "hidden" : ""}`}
            >
              {error}
              <IoClose size={28} onClick={() => setAlertbox(!alertbox)} />
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              data-aos="zoom-in-left"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full sm:w-1/2 bg-slate-900 p-4 rounded-xl"
            />

            <input
              data-aos="zoom-in-right"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full sm:w-1/2 bg-slate-900 p-4 rounded-xl"
            />
          </div>

          <textarea
            data-aos="zoom-in-left"
            name="message"
            rows="5"
            placeholder="Enter your message"
            required
            className="w-full bg-slate-900 p-4 rounded-xl"
          />

          <button
            data-aos="zoom-in-right"
            data-aos-offset="10"
            type="submit"
            className="w-full flex justify-center items-center gap-1 bg-linear-to-r from-purple-600 to-pink-500 
                 py-4 rounded-xl font-semibold shadow-md hover:shadow-lg 
                 transition transform active:scale-95 mx-auto"
          >
            <FiSend />
            Send
          </button>
        </form>

        <video autoPlay muted loop  className="hidden lg:w-124 lg:h-80 lg:block lg:mt-8 object-cover rounded-xl">
          <source src="/sendingVideo.mp4" />
        </video>
      </div>
    </div>
  );
}
