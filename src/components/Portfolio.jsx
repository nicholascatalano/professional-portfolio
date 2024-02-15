import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Fresh Finder",
    image: "/images/fresh_finder.png",
    languages: "react, html, javascript, css",
    packages:
      "react, mongodb, @apollo/server, graphql, image-to-base64, express, jwt",
    description:
      "Fresh Finder is a peer to peer web application designed to connect local farmers and food producers with health and environmentally focused consumers.",
    repo: "https://github.com/YuliyaTsoy/food-marketplace-app",
    live: "https://market-place-app.onrender.com/",
  },
  {
    id: 1,
    title: "Foodie Finds App",
    image: "/images/foodie-finds.png",
    languages: "html, css, javascript, handlebars",
    packages:
      "express, mysql12, sequelize, bcrypt, connect-session-sequelize, express-handlebars, express-session, dotenv",
    description:
      "Foodie finds was created to help people who are looking for restaurants that cater to their preferences. Users can add their own reviews for restaurants they've visited, or search for restaurants using the side filter.",
    repo: "https://github.com/nicholascatalano/foodie-finds-app",
    live: "https://foodie-finds.onrender.com/",
  },
  {
    id: 2,
    title: "Book Organizer",
    image: "/images/book-organizer.png",
    languages: "html, css, javascript",
    packages:
      "bootstrap, google-preview-api, library-of-congress-api, google-fonts",
    description:
      "The all in one place for book researchers and readers, that allows for the creation of your own library that you can revisit whenever you want. Our motivation was to develop an app that allows users to discover, explore, and organize their favorite books and other valuable information.",
    repo: "https://github.com/nicholascatalano/book-organizer",
    live: "https://book-researcher-and-organizer.onrender.com/",
  },
  {
    id: 3,
    title: "Placeholder",
    image: "https://placehold.co/600x400/png",
    languages: "TBD",
    packages: "TBD",
    description: "TBD",
    repo: "https://github.com/nicholascatalano/",
    live: "https://github.com/nicholascatalano/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
