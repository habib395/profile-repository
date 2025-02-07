import project1_img from "../assets/12.png";
import project2_img from "../assets/11.png";
import project3_img from "../assets/1.png";
import project4_img from "../assets/nine.png";
import project5_img from "../assets/eight.png";
import project6_img from "../assets/seven.png";

const Project_data = [
  {
    id: 1,
    name: "ParcelCall",
    image: project1_img,
    description: "A full-stack parcel management application where users can book parcels, admins can assign delivery personnel, and delivery personnel can track and deliver parcels. The system includes user authentication, parcel tracking, and an admin dashboard with analytics and management features.",
    technology: "React, Tailwind CSS, Shadcn, TanStack Query, Firebase Authentication, Node.js, Express.js, MongoDB, Mongoose, JWT Authentication, Stripe Payment, MapBox (React Leaflet), ApexCharts.",
    live: "https://crabby-square.surge.sh/",
    github: "https://github.com/habib395/parcelCall-twelve",
    challenges: "Ensuring real-time parcel updates with minimal latency and optimizing database queries for faster response times.",
    improvements: "Implementing machine learning for predictive delivery estimates and automated customer support chatbots."
  },
  {
    id: 2,
    name: "SkillStack",
    image: project2_img,
    description: "A web application where users can post queries about products they want alternatives for, view other users' queries, and provide recommendations. Users can manage their queries, delete or update recommendations, and interact with a dynamic query-based system.",
    technology: "React, Tailwind CSS, Firebase Authentication, Node.js, Express.js, MongoDB, Mongoose, JWT Authentication, Cloud Storage, Fully Responsive UI",
    live: "https://discreet-birth.surge.sh/",
    github: "https://github.com/habib395/SkillStack-eleven",
    challenges: "Developing an efficient recommendation algorithm and handling spam or irrelevant responses from users.",
    improvements: "Integrating a ranking system for recommendations and implementing AI-based query tagging for improved organization."
  },
  {
    id: 3,
    name: "FIELD",
    image: project3_img,
    description: "Field is a responsive e-commerce platform for sports equipment, allowing users to browse, add, update, and manage sports accessories. It includes authentication, product management, and sorting features for an enhanced shopping experience.",
    technology: "React, Tailwind CSS, Firebase Authentication, Node.js, Express.js, MongoDB, Mongoose, JWT Authentication, Lottie React, React Awesome Reveal, React Tooltip",
    live: "https://finicky-camp.surge.sh/",
    github: "https://github.com/habib395/Playing-field",
    challenges: "Optimizing product search functionality and ensuring a seamless checkout process.",
    improvements: "Implementing AR-based product previews and personalized product recommendations."
  },
  {
    id: 4,
    name: "LIFE COACH",
    image: project4_img,
    description: "This project involves developing a Career Counseling Website to guide users in making informed career decisions. The website will offer personalized career advice, resources, and professional guidance through various services like career counseling sessions, resume reviews, and skill development recommendations.",
    technology: "React, React Router, Firebase, Tailwind CSS, Daisy UI, Swiper.js, AOS Animation, ImgBB (for image hosting), Toast/SweetAlert (for notifications).",
    live: "https://burly-box.surge.sh/",
    github: "https://github.com/habib395/career-coach",
    challenges: "Maintaining user engagement with personalized career suggestions and ensuring accurate career predictions.",
    improvements: "Adding AI-driven career path suggestions and automated mentorship matching."
  },
  {
    id: 5,
    name: "Gadget-Heaven",
    image: project5_img,
    description: "This project is a gadget e-commerce platform designed based on Figma specifications. It includes a responsive Navbar and Banner Section. The Gadget Section displays categories and a grid of 6-9 gadget cards, each with a Details button. The Gadget Details Page shows gadget-specific information with a cart and wishlist button.",
    technology: "HTML5, CSS3, Tailwind CSS, Daisy UI, JavaScript, React, React Router DOM,",
    live: "https://greasy-person.surge.sh/",
    github: "https://github.com/habib395/Gadget-Heaven?tab=readme-ov-file",
    challenges: "Ensuring seamless payment gateway integration and optimizing product images for faster load times.",
    improvements: "Incorporating virtual try-on features for gadgets and adding voice-assisted search functionality."
  },
  {
    id: 6,
    name: "Ultimate Dream 11",
    image: project6_img,
    description: "This project involves creating an interactive Player Selection Website where users can browse available players, select them, and manage their selections dynamically. The interface is designed based on Figma specifications, ensuring a visually appealing and user-friendly experience.",
    technology: "React, React Router, Tailwind CSS, Daisy UI, JSON, React-Toastify",
    live: "https://aback-rake.surge.sh/",
    github: "https://github.com/habib395/Ultimate-Dream-Eleven?tab=readme-ov-file",
    challenges: "Handling dynamic team selection with real-time player stats and ensuring fair player balancing.",
    improvements: "Adding AI-based player performance predictions and a collaborative team-building feature."
  }
];

export default Project_data;