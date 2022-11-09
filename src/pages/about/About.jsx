import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        We know that building a positive culture is incredibly important. We
        believe in encouraging, supporting, challenging, learning and growing to
        be the best! Our flexible working solutions, gym rebates and educational
        opportunities create a positive work/life balance for all our employees.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              When one of our founders was a young, bright, and fit baseball
              player, working out was part of his daily routine. But, things
              took a different turn after his knee injury and university.
            </p>
            <p>
              "Instead of being just another gym equipment retailer, our
              founders wanted to be the best in the industry and set their minds
              to doing so! Over the last two decades Gym and Fitness has grown
              into one of Egypian's largest online fitness equipment retailers.
            </p>
            <p>
              helping thousands of customers live longer, happier and healthier
              lives.
            </p>
            <p>And that is how the idea of VAWULENS came about</p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              we are about real fitness. Our no-nonsense, results-driven culture
              was built on a history rooted in weightlifting culture. With our
              award-winning designs and culture,
            </p>
            <p>
              VAWULENS has effortlessly became an internationally recognized
              brand known for its commitment to health, strength, and fitness.
              Today, we continue to be one of the most celebrated fitness brands
              in the world.
            </p>
            <p>
              Our team is heavily involved in our community and closely
              connected with local public services, outreach programs, and other
              local businesses.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              The Mission at Red Lite Gym is here to love our neighbors as
              ourselves. We will help and serve our global community with red
              light therapy body sculpting and strength training.
            </p>
            <p>
              Here at THE GYM you are not only joining a gym, you join a team of
              individuals who are committed to leading strong, fit, and healthy
              lifestyles.
            </p>
            <p>
              Our amazing trainers are ready to make sure you break boundaries
              and achieve your full potential.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
