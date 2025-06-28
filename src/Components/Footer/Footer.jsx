import { FaCircleUser } from "react-icons/fa6";
import { IoLogoBuffer } from "react-icons/io5";
import { FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="sm:m-16 flex flex-col gap-8 bg-[#1a1a1f] text-white p-10 rounded-lg shadow-lg"
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-4">
          <IoLogoBuffer className="text-4xl text-[#DF8909]" />
          <p className="text-lg max-w-sm text-gray-300">
            Elevate your web experience with modern, responsive designs that
            leave an impact.
          </p>
        </div>

        <div className="sm:flex items-center gap-8 mt-6 md:mt-0">
          <div className="flex items-center gap-4 p-3 rounded-full bg-[#32323B] transition-all duration-300 hover:bg-[#41414d]">
            <FaCircleUser className="text-gray-400 text-lg" />
            <input
              className="bg-transparent w-full text-white text-base outline-none placeholder-gray-400 transition-all duration-300 focus:placeholder-gray-500"
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

      <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <div className="hover:text-[#DF8909]">
          © 2025 Habibur Rahman. All rights reserved.
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          {/* Social Icons */}
                    <div className="flex gap-4 mt-2 md:mt-0">
                      {[
                        {
                          href: "https://www.linkedin.com/in/md-habibur-rahman-9598a1368",
                          icon: <FaLinkedinIn />,
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
                          className="text-base p-1 rounded-full border border-[#B923E1] text-[#B923E1] dark:text-[#B923E1] hover:text-[#B923E1] backdrop-blur-md shadow-md transition-all duration-300"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                        >
                          {icon}
                        </a>
                      ))}
                    </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
