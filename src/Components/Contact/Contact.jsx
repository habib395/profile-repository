import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 m-10 w-10/12 mx-auto">
      <div className="relative">
        <h1 className="py-5 text-5xl font-semibold ">Get in Touch</h1>
      </div>
      <div className="flex gap-16">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-semibold hero">Let's Talk</h1>
          <p className="text-[#D8D8D8] text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quaerat pariatur voluptates quia, aspernatur obcaecati.
          </p>
          <div className="flex flex-col gap-6 text-[D8D8D8]">
            <div className="flex items-center gap-3">
              <MdEmail />
              <p>md.habiburrahmanjwd@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 text-[D8D8D8]">
            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <p>+880 1742923499</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 text-[D8D8D8]">
            <div className="flex items-center gap-3">
              <FaSquareWhatsapp />
              <p>+880 1742923499</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 text-[D8D8D8]">
            <div className="flex items-center gap-3">
              <IoHome />
              <p>Rajshahi, Bangladesh</p>
            </div>
          </div>
        </div>
        <form className="flex flex-col items-start gap-6">
          <label className="text-[#D8D8D8] text-xl font-medium" htmlFor="">
            Your Name
          </label>
          <input className="border-none w-[500px] h-14 pl-4 rounded-md bg-[#32323c] text-[#A0A0A0]font-outfit text-xl" type="text" placeholder="Enter your name" name="name" />
          <label className="text-[#D8D8D8] text-xl font-medium" htmlFor="">
            Your Email
          </label>
          <input className="border-none w-[500px] h-14 pl-4 rounded-md bg-[#32323c] text-[#A0A0A0]font-outfit text-xl"  type="email" placeholder="Enter your email" name="email" />
          <label className="text-[#D8D8D8] text-xl font-medium" htmlFor="">
            Write your message here
          </label>
          <textarea className="w-[500px] border-none pl-4 rounded-md bg-[#32323c] text-[#A0A0A0]font-outfit text-xl"
            name="message"
            rows="4"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="flex-1 p-4 h-3 rounded-full bg-gradient-to-r from-[#DF8909] to-[#B415FF] border-none transition duration-300">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
