import React from "react";
import styled from "styled-components";
import blackcat from "../images/blackcat.svg";

const NavBox = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 5%;
  right: 0%;
  background-color: #00000040;
  color: white;
  height: 300px;
  width: 150px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding: 20px;
  transform: translateX(70%);
  opacity: 0.5;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  & img {
    position: absolute;
    width: 90%;
    top: 0%;
    opacity: 0.5;
  }

  & p {
    transform: translateX(0%);
    transition: transform 0.1s linear;
  }

  &:hover {
    transform: translateX(40%);
    opacity: 1;
    box-shadow: -2px 2px 8px white;
  }

  &:hover p {
    transform: translateX(-18%);
  }

  & > div > a:hover p {
    transform: translateX(0%);
    animation: color 4s ease-in infinite;
    cursor: pointer;
  }
  & a {
    text-decoration: none;
    color: white;
  }

  @keyframes color {
    0% {
      color: red;
    }
    25% {
      color: yellow;
    }
    50% {
      color: green;
    }
    75% {
      color: blue;
    }
    100% {
      color: red;
    }
  }
`;

const Navbar = ({ wheelEvent }) => {
  return (
    <NavBox>
      <img src={blackcat} alt="" />
      <div>
        <a href="/">
          <p onClick={wheelEvent}>nav.home</p>
        </a>
      </div>
      <div>
        <a href="#about">
          <p>nav.about</p>
        </a>
      </div>
      <div>
        <a href="#project">
          <p>nav.projects</p>
        </a>
      </div>
      <div>
        <a href="#contact">
          <p>nav.contact</p>
        </a>
      </div>
    </NavBox>
  );
};

export default Navbar;
