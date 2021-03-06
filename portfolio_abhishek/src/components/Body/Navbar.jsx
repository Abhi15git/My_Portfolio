import React from "react";
import styled from "styled-components";
import blackcat from "../images/blackcat.svg";

const NavBox = styled.div`
  background-color: rgb(32, 39, 49);
  position: absolute;
  z-index: 100;
  top: 0%;
  right: 0%;
  width: 500px;
  margin: 0%;
  display: grid;
  grid-template-columns: 40px auto;
  grid-gap: 20px;
  align-items: center;
  opacity: 1;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  overflow: visible;
  transition: transform 0.5s ease;
  box-shadow: -2px 2px 5px rgb(113, 93, 242);

  &:hover :nth-child(2) span {
    display: none;
  }

  @media only screen and (max-width: 500px) {
    width: 350px;
  }
`;

const Hover = styled.div`
  overflow: hidden;
  height: 40px;
  border-radius: 50%;
  position: relative;
  background-color: yellow;
  & > div {
    overflow: hidden;
  }
  & img {
    width: 90%;
    position: absolute;
    top: 0%;
    right: 0%;
    opacity: 1;
  }
`;

const Navlist = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  text-align: left;

  & a {
    margin: 0%;
    padding: 0%;
    text-decoration: none;
    color: white;
  }
  & a:active {
    color: rgb(113, 93, 242);
  }
  & > div {
    position: relative;
  }

  & a div {
    position: absolute;
    width: 0%;
    z-index: -1;
    height: 17px;
    background-color: rgba(113, 93, 242, 0.5);
    transform: translateY(100%);
    transition: width 0.3s ease-in-out;
  }

  & > div:hover a div {
    width: 100%;
  }

  & div a p {
    padding: 0px 5px;
    box-shadow: 0px 1px 3px rgb(113, 93, 242);
  }
  /* & div a p:hover {
    transform: translateX(0px);
    
  } */
`;

const Hoverme = styled.div`
  display: none;
  position: absolute;
  top: 105%;
  transform: translateX(-20px);
  left: 0%;
  animation: pop 1s ease-out infinite;
  & div span {
    color: #d4f37d;
  }
  @keyframes pop {
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(-40%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;

const Navbar = ({ wheelEvent }) => {
  return (
    <div>
      <NavBox>
        <Hover>
          <div>
            <img src={blackcat} alt="" />
          </div>
        </Hover>
        <Hoverme>
          <div>
            <span>
              Click <br /> me!
            </span>
          </div>
        </Hoverme>
        <Navlist>
          <div>
            <a href="/">
              <div></div>
              <p onClick={wheelEvent}>Home</p>
            </a>
          </div>
          <div>
            <a href="#about">
              <div></div>
              <p>About</p>
            </a>
          </div>
          <div>
            <a href="#project">
              <div></div> <p>Projects</p>
            </a>
          </div>
          <div>
            <a href="#contact">
              <div></div> <p>Contact</p>
            </a>
          </div>
        </Navlist>
      </NavBox>
    </div>
  );
};

export default Navbar;
