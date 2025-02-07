import { FaCircleUser } from "react-icons/fa6";
import { IoLogoBuffer } from "react-icons/io5";
import { FaFacebook, FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer id="footer" className="m-16 flex flex-col gap-8 bg-[#1a1a1f] text-white p-10 rounded-lg shadow-lg">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Text */}
        <div className="flex items-center gap-4">
          <IoLogoBuffer className="text-4xl text-[#DF8909]" />
          <p className="text-lg max-w-sm text-gray-300">
            Elevate your web experience with modern, responsive designs that
            leave an impact.
          </p>
        </div>

        {/* Email Subscription */}
        <div className="flex items-center gap-6 mt-6 md:mt-0">
          <div className="flex items-center gap-3 p-3 rounded-full bg-[#32323B] transition-all duration-300 hover:bg-[#41414d]">
            <FaCircleUser className="text-gray-400 text-lg" />
            <input
              className="bg-transparent text-white text-base outline-none placeholder-gray-400 transition-all duration-300 focus:placeholder-gray-500 "
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#DF8909] to-[#B415FF] text-white font-semibold shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:from-[#B415FF] hover:to-[#DF8909]">
            Subscribe
          </button>
        </div>
      </div>

      <hr className="border-gray-600" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <div className="hover:text-[#DF8909]">
          © 2025 Habibur Rahman. All rights reserved.
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <p className="cursor-pointer hover:text-white transition">
            Terms of Service
          </p>
          <p className="cursor-pointer hover:text-white transition">
            Privacy Policy
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/md.habibur.rahman.sujon.788802"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-[#B923E1] transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/habib395"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-[#B923E1] transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
