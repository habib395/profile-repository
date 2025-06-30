import project1_img from "../assets/12.png";
import project2_img from "../assets/11.png";
import project3_img from "../assets/1.png";
import project5_img from "../assets/eight.png";
import project6_img from "../assets/seven.png";
import project7_img from "../assets/group.png";


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
    id: 5,
    name: "Ultimate Dream 11",
    image: project6_img,
    description: "This project involves creating an interactive Player Selection Website where users can browse available players, select them, and manage their selections dynamically. The interface is designed based on Figma specifications, ensuring a visually appealing and user-friendly experience.",
    technology: "React, React Router, Tailwind CSS, Daisy UI, JSON, React-Toastify",
    live: "https://aback-rake.surge.sh/",
    github: "https://github.com/habib395/Ultimate-Dream-Eleven?tab=readme-ov-file",
    challenges: "Handling dynamic team selection with real-time player stats and ensuring fair player balancing.",
    improvements: "Adding AI-based player performance predictions and a collaborative team-building feature."
  },
  {
  id: 6,
  name: "DevDiscuss - Group Project",
  image: project7_img, // Replace with your imported image variable
  description: "DevDiscuss is a responsive developer forum designed for seamless discussion, question sharing, and content exploration. It features dark/light mode, Firebase authentication, and an interactive user experience. Users can post, edit, and manage questions, blogs, and events with ease.",
  technology: "React, Tailwind CSS, Redux Toolkit, React Router DOM, Firebase Auth, JWT, Axios, Moment.js, React Helmet, Vite",
  live: "http://null-car.surge.sh", // Replace with actual live link
  github: "https://github.com/LIBx09/Dev_Discuss_Client", // Replace with actual repo link
  challenges: "Integrating real-time content updates, ensuring role-based access, and managing nested discussion threads while keeping the UI fully responsive.",
  improvements: "Adding real-time chat, advanced markdown support, and personalized feed based on user interactions."
}
];

export default Project_data;