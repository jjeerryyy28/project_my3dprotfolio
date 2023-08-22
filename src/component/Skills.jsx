import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import videoBg from "../assets/img/asteroids.mp4";
import js from "../assets/img/js.png";
import java from "../assets/img/java.png";
import cplusplus from "../assets/img/c++.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import nodejs from "../assets/img/node-js.png";
import react from "../assets/img/react.png";
import git from "../assets/img/git.png";
import figma from "../assets/img/figma.png";
import mySQL from "../assets/img/mysql.png";
import typeScript from "../assets/img/typescript.png";
import jira from "../assets/img/jira.png"
import github from "../assets/img/github.png"
import vscode from "../assets/img/vscode.png"
import intellij from "../assets/img/intellij.png"

export const Skills = () => {
  const skillsData = [
    { image: cplusplus },
    { image: java },
    { image: html },
    { image: css },
    { image: js },
    { image: typeScript },
    { image: react },
    { image: nodejs },
    { image: git },
    { image: mySQL },
    { image: figma },
  ];
  
  const toolData= [ 
    {image: vscode},
    {image: jira},
    {image: github},
    {image: intellij}
  ]
  return (
    <section className="skill" id="skills">
      <div className="video-container">
        <video autoPlay loop muted className="video-background">
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container">
        <div>
          <div>
            <div className="main">
              <h2>
                Professional <span className="color-span">Skillset</span>
              </h2>
              <div className="cards">
                {skillsData.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.image} alt={skill.name} />
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </div>
              <br /><br /><br />
              <p className="tools-p">Tools <span style={{color: "purple"}}>I Use</span></p>
              <div className="tools">
                {toolData.map((tools, index) => (
                  <div className="item" key={index}>
                    <img src={tools.image} alt={tools.name} />
                    <h5>{tools.name}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  );
};
