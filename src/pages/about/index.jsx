import React from "react";
import "./style.css";
import { Introduction } from "../../sections/about/introduction";
import { Vision } from "../../sections/about/vision";

export const About = () => {
  return (
    <div className="ABOUT">
        <Introduction/>
        <Vision/>
    </div>
  );
};
