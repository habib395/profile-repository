import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


const Contact = () => {
  
  const whatsappNumber = "+8801742923499";

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "c945b874-6631-4896-9c6b-da5c3e446e9c");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const result = await res.json();

      if (result.success) {
        alert("Message sent successfully!");
        event.target.reset();
      } else {
        alert("Failed to send message. Try again!");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center gap-10 px-6 py-4 mx-auto w-full max-w-7xl"
    >
      <div className="text-center">
        <h1 className="py-6 text-4xl font-bold text-[#B923E1]">Get in Touch</h1>
        <div className="w-full h-1 bg-gradient-to-r from-[#B923E1] to-[#ff004f]"></div>
        <p className="text-xl py-2 text-gray-400 max-w-2xl mx-auto">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 w-full">
        <div className="flex flex-col gap-8 w-full lg:w-1/2 bg-gray-900 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold bg-gradient-to-l from-[#ff004f] to-[#B415FF] bg-clip-text text-transparent">
            Let's Talk
          </h2>
          <p className="text-gray-400 text-lg">
            I'm happy to connect and collaborate on exciting projects.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-gray-300 hover:text-[#B923E1] transition">
              <MdEmail />
              <p className="text-xs sm:text-xl">
                md.habiburrahmanjwd@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition">
              <FaPhoneAlt />
              <p className="text-lg">+880 1742923499</p>
            </div>
            <div className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition">
              <FaSquareWhatsapp />
              <p className="text-lg">{whatsappNumber}</p>
            </div>
            <div className="flex items-center gap-3 text-gray-300 hover:text-[#DF8909] transition">
              <IoHome size={24} />
              <p className="text-lg">Rajshahi, Bangladesh</p>
            </div>
           <div className="flex gap-2 mt-2 md:mt-0">
                      {[
                        {
                          href: "https://www.linkedin.com/in/md-habibur-rahman-9598a1368",
                          icon: <FaLinkedin />,
                          label: "LinkedIn",
                        },
                        {
                          href: "https://github.com/habib395",
                          icon: <FaGithub />,
                          label: "GitHub",
                        },
                        {
                          href: "https://www.facebook.com/md.habibur.rahman.sujon.788802",
                          icon: <FaFacebook />,
                          label: "Facebook",
                        },
                      ].map(({ href, icon, label }, idx) => (
                        <a
                          key={idx}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          className="text-xl p-3 rounded-full border border-[#B923E1] text-[#B923E1] dark:text-[#B923E1] hover:text-[#B923E1] backdrop-blur-md shadow-md transition-all duration-300"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                        >
                          {icon}
                        </a>
                      ))}
                    </div>
            <div>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-6 w-full lg:w-1/2 bg-gray-900 p-8 rounded-xl shadow-lg pt-4"
        >
          <h2 className="text-3xl font-semibold bg-gradient-to-l from-[#ff004f] to-[#B415FF] bg-clip-text text-transparent">
            Send a Message
          </h2>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-lg">Your Name</label>
            <input
              name="name"
              className="w-full h-14 pl-4 rounded-md bg-gray-800 text-white text-lg focus:ring-2 focus:ring-purple-500"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-lg">Your Email</label>
            <input
              name="email"
              className="w-full h-14 pl-4 rounded-md bg-gray-800 text-white text-lg focus:ring-2 focus:ring-purple-500"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-lg">
              Write your message here
            </label>
            <textarea
              name="message"
              className="w-full h-32 pl-4 pt-3 rounded-md bg-gray-800 text-white text-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your message"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full h-14 text-lg font-semibold text-white rounded-md bg-gradient-to-r from-[#DF8909] to-[#B415FF] hover:scale-105 transition-transform"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
