import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Foodie Finds App",
    image: "/images/foodie-finds.png",
    languages: "html, css, javascript, handlebars",
    packages:
      "express, mysql12, sequelize, bcrypt, connect-session-sequelize, express-handlebars, express-session, dotenv",
    description:
      "Foodie finds was created to help people who are looking for restaurants that cater to their specific dietary needs. This app has a minimalist design and a user-friendly interface with a clear navigational structure that makes it easy to use. The user will be able to add their own review for a restaurant they've visted which will be saved to their account dashboard, as well as see other reviews of restaurants based off their filters.",
    repo: "https://github.com/nicholascatalano/foodie-finds-app",
    live: "https://restaurant-blog-3f12d3a2bc88.herokuapp.com/",
  },
  {
    id: 1,
    title: "Book Organizer",
    image: "/images/book-organizer.png",
    languages: "html, css, javascript",
    packages:
      "bootstrap, google-preview-api, library-of-congress-api, google-fonts",
    description:
      "The all in one place for book researchers and readers, that allows for the creation of your own library that you can revisit whenever you want. Our motivation was to develop an app that allows users to discover, explore, and organize their favorite books and other valuable information.",
    repo: "https://github.com/nicholascatalano/book-organizer",
    live: "",
  },
  {
    id: 2,
    title: "J.A.T.E, Text Editor",
    image: "/images/text-editor.png",
    languages: "html, css, javascript",
    packages:
      "express, babel-loader, css-loader, html-webpack-plugin, http-server, style-loader, webpack, webpacl-cli, webpack-dev-server, webpack-pwa-manifest, workbox-webpack-plugin",
    description:
      "J.A.T.E is a Progressive Web Application (PWA) that runs in the browser, offline and can be installed locally to your machine. This application features a number of data persistence techniques, insuring the application runs regardless of browser supported function. J.A.T.E uses an IndexedDB database and the idb package.",
    repo: "https://github.com/nicholascatalano/text-editor",
    live: "https://text-editor-cu-e0ae20bad742.herokuapp.com/",
  },
  {
    id: 3,
    title: "Note Taker",
    image: "/images/note-taker.png",
    languages: "html, css, javascript",
    packages: "express, uuid",
    description:
      "This is an application that allows the user to create, save, and delete notes. The application uses Express.js in the backend to retrieve and save the created notes to a JSON file. The application was deployed using Heroku.",
    repo: "https://github.com/nicholascatalano/note-taker",
    live: "https://note-taker-cu-3e28c82291c5.herokuapp.com/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project project={projects} />
    </div>
  );
}

export default Portfolio;
