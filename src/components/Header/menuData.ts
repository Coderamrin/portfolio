const data = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Resume",
    link: process.env.NEXT_PUBLIC_RESUME_URL,
    external: true,
  },
];

export default data;
