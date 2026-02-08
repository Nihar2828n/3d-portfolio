const config = {
  title: "Nihar Vasavada | learning ",
  description: {
    long: "I’m a 12th-grade student exploring the world of programming and web development.
Currently learning Python and frontend basics, and building skills step by step
with a strong interest in creating clean and interactive websites.",
    short:
      "Discover the portfolio of Naresh, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Nihar",
    "portfolio",
    "learning",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Nihar vasavada",
  email: "niharvasavda@gmail.com",
  site: "https://nareshkhatri.site",

  // for github stars button
  githubUsername: "Nihar2828n",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/N_I_H_A_R_2_8",
    linkedin: "https://www.linkedin.com/in/Niharvasavada/",
    instagram: "https://www.instagram.com/nihar_vasavada",
    facebook: "https://www.facebook.com/Nihar2828n/",
    github: "https://github.com/Nihar2828n",
  },
};
export { config };
