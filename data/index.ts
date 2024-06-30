export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Flutter AI & ML Streaming App",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Chop Shop Barber Web Booking Application",
    des: "Built a responsive barber booking site with React.js and Sanity Studio for seamless frontend-backend integration. Incorporated Framer Motion for animations and integrated Telegram alerts for real-time notifications.",
    img: "/pr1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://barber-chop-shop.vercel.app",
  },
  {
    id: 2,
    title: "Food Delivery - React Native",
    des: "• Engineered a dynamic, user-centric food delivery application using RESTful APIs, Redux for state management, and Git for version control. Led the project to ensure cross-device compatibility and delivered a functional prototype.",
    img: "/pr2.jpg",
    iconLists: ["/react.jpeg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "#",
  },
  {
    id: 3,
    title: "Food Web Application",
    des: "Foodies is a dynamic food web application allowing users to order favorite dishes online, book tables, and explore menus, enhancing their dining experience.",
    img: "/pr3.png",
    iconLists: ["/next.svg", "/tail.svg", "/react.jpeg", "/c.svg"],
    link: "https://thefoodies.vercel.app/",
  },
  {
    id: 4,
    title: "Hill Quest",
    des: " Introduced key features to connect business owners with customers for advertisement hoarding needs.",
    img: "/pr4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/boot.jpeg"],
    link: "/ui.apple.com",
  },
];
export const testimonials = [
  {
    quote:
      "Collaborating with CoderDecoder Solutions on the Chop Shop Barber Web Booking Application was an absolute pleasure. Their professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Their enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, CoderDecoder Solutions is the ideal partner.",
    name: "Rajveer Singh",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Working with CoderDecoder Solutions on the Food Delivery React Native project was an incredible experience. His expertise in mobile app development and his commitment to quality ensured that our project was a success. SR's ability to understand our needs and translate them into a seamless user experience was remarkable. Highly recommend his services.",
    name: "Neha Sharma",
    title: "Product Manager at Foodies Inc.",
  },
  {
    quote:
      "CoderDecoder Solutions' work on the Food Web Application was top-notch. His attention to detail and innovative approach brought our vision to life in ways we couldn't have imagined. The final product exceeded our expectations, and the feedback from our users has been overwhelmingly positive. SR is a true professional and a pleasure to work with.",
    name: "Rohan Patel",
    title: "CEO of Gourmet Delights",
  },
  {
    quote:
      "The Hill Quest project was complex, but SR from CoderDecoder Solutions handled it with ease. His technical skills and creative solutions were instrumental in overcoming the challenges we faced. SR's dedication and passion for his work are evident in every aspect of the project. We couldn't have asked for a better partner to bring Hill Quest to fruition.",
    name: "Simran Kaur",
    title: "Project Lead at Adventure Seekers",
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
