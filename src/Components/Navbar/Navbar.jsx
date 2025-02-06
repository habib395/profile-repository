import './Navbar.css';
import logo from "../../assets/logo3.jpg.png";

const Navbar = () => {
    return (
        <div className='navbar-container flex items-center justify-between p-4 bg-opacity-90 backdrop-blur-sm shadow-lg'>
            {/* Logo */}
            <img className="h-16 w-auto transform hover:scale-110 transition-transform duration-300 cursor-pointer" src={logo} alt="Logo" />

            {/* Navigation Links */}
            <ul className="flex items-center list-none gap-14 text-xl font-medium">
                <li className="nav-link relative hover:text-[#B923E1] transition-colors duration-300">
                    Home
                </li>
                <li className="nav-link relative hover:text-[#B923E1] transition-colors duration-300">
                    About Me
                </li>
                <li className="nav-link relative hover:text-[#B923E1] transition-colors duration-300">
                    Services
                </li>
                <li className="nav-link relative hover:text-[#B923E1] transition-colors duration-300">
                    Portfolio
                </li>
                <li className="nav-link relative hover:text-[#B923E1] transition-colors duration-300">
                    Contact
                </li>
            </ul>

            {/* Connect Button */}
            <div className="connect-button px-6 py-3 flex items-center text-xl font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer rounded-full bg-gradient-to-r from-[#B923E1] to-[#ff004f] text-white shadow-lg hover:shadow-xl">
                Connect With Me
            </div>
        </div>
    );
};

export default Navbar;