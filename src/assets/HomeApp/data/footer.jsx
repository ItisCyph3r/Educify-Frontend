import img1 from "../svgs/bottom-footer/Vector.svg";
import img2 from "../svgs/bottom-footer/Vector-1.svg";
import img3 from "../svgs/bottom-footer/Vector-2.svg";
import img4 from "../svgs/bottom-footer/Vector-3.svg";
import img5 from "../svgs/bottom-footer/Vector-4.svg";
import img6 from "../svgs/bottom-footer/Vector-5.svg";
import img7 from "../svgs/bottom-footer/Vector-6.svg";
// import { useSelector } from "react-redux";
import twitter from "../svgs/bottom-footer/twitterX.svg";
export const socials = [
  { image: img1, link: "https://www.linkedin.com/company/educifyinc" },
  { image: img2, link: "https://www.pinterest.ca/educifyinc" },
  { image: img3, link: "https://www.facebook.com/educifyinc/" },
  { image: img4, link: "https://www.instagram.com/educifyinc" },
  { image: img5, link: "https://www.youtube.com/@EducifyInc" },
  { image: img6, link: "www.vimeo.com/educifyinc" },
  { image: twitter, link: "https://twitter.com/educifyinc" },
];
export const text = {
  text: "Educify inc is a global Educational Technology company focused on making education accessible to everyone in every subject possible and in all manner of ways; be it online, in-person, or as a course that is accessible anywhere in the world. At Educify, we pride ourselves in being able to connect teachers with students in all possible ways safely and affordably.",
  copyright: "©Copyright 2024 All rights reserved",
  terms: "Educify | Terms and Conditions | Privacy Policy",
};

export const footerCols = [
  {
    name: "Students",
    links: [
      "How It Works",
      "Packages/Combos",
      "Frequently Asked Questions",
      "Virtual/Online Lessons",
      "Cancellation Policy",
      "Terms and Conditions",
    ],
    href: [
      "/#/how-it-works",
      "/#/Packages&Combos",
      "/#/faq",
      "/#/online-lessons",
      "/#/cancelation",
      "/#/terms/students",
    ],
  },
  {
    name: "Learn with us",
    links: ["Group Lessons", "Online Courses", "Private Lessons", "Blogs"],
    href: ["/#/groupLessons", "/#/tutors", "/#/Blogs"],
    //lesson fees , saftey
  },
  {
    name: "Teachers",
    links: [
      "How It Works",
      "Background Check",
      "Teacher SignUp",
      "Packages/Combos",
      "Virtual/Online Lessons",
      "Terms and Conditions",
    ],
    href: [
      "/#/how-it-works",
      "/#/bg-check",
      "/#/teacher-signup",
      "/#/Packages&Combos",
      "/#/online-lessons",
      "/#/terms/teachers",
    ],
  },
  // {
  //   name: "Apps",
  //   links: ["Play Store", "App Store"],
  //   href: ["/#", "/#"],
  // },
];

export const contact = {
  number: "+1 888 252 9485",
  email: "admin@educify.org",
  location: " 808 4th Avenue SW, Calgary, Alberta T2P 0K7 Canada",
  header: "Get In Touch",
};
