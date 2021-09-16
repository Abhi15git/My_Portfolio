import React from "react";
import styled from "styled-components";
import blackcat from "../images/blackcat.svg";

const NavBox = styled.div`


  position: absolute;
  z-index: 10;
  top: 5%;
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
  transform: translateX(90%);
  transition: transform 0.5s ease;
  &:hover{
       transform: translateX(0%);
       box-shadow:-2px 2px 5px rgb(113,93,242);
  }
  &:hover :nth-child(2) span{
    display: none;
  }

  @media only screen and (max-width: 500px){
    width: 350px;
   
  }

`;

const Hover = styled.div`
  height: 40px;
  border-radius: 50%;
  position: relative;
  background-color: yellow;
  & > div{
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
  & a:active{
    color: rgb(113,93,242);
  }
  & div {
    overflow: hidden;
  }

  & div a p {
    transform: translateX(-28px);
    transition: transform .3s ease;
  }
  & div a p:hover {
    transform: translateX(0px);
    box-shadow: 0px 1px 3px rgb(113,93,242);
  }

  @media only screen and (max-width: 500px){
    

    & div a p {
      transform: translateX(-20px);
    font-size: small;
  }
  }
`;

const Hoverme = styled.div`
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
          <span>Click <br /> me!</span>
        </div>
      </Hoverme>
      <Navlist>
        <div>
          <a href="/">
            <p onClick={wheelEvent}>nav.Home</p>
          </a>
        </div>
        <div>
          <a href="#about">
            <p>nav.About</p>
          </a>
        </div>
        <div>
          <a href="#project">
            <p>nav.Projects</p>
          </a>
        </div>
        <div>
          <a href="#contact">
            <p>nav.Contact</p>
          </a>
        </div>
      </Navlist>
      
    </NavBox>
   
    </div>
  );
};

export default Navbar;
