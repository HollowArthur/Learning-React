import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Project from "./assets/Project";
import Header from "./assets/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <hr />
    <section>
      <Project title="git" description="lorem epsum...." />
      <Project title="node" description="lorem epsum...." />
    </section>
  </React.StrictMode>
);
