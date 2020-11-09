import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import ButtonComponent from "../Button/Button";
import Modal from "../Modal/Modal";
import Timer from "../Timer/Timer";
import { Logo, TextLogo } from "../../assets";
import "./navbar.css";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [minutesLeft, setMinutesLeft] = useState(10);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const endClass = () => {
    console.log("end class");
    setMinutesLeft(0);
    setModalOpen(false);
  };

  return (
    <>
      <Navigation>
        <div className="left-nav">
          <img src={isTabletOrMobile ? TextLogo : Logo} alt="logo" />
          {!isTabletOrMobile && <hr />}
          <h4>Trial Lesson [Grade 1-3]</h4>
        </div>
        <Toggle onClick={() => setNavbarOpen(!navbarOpen)}>
          <Hamburger open={navbarOpen} />
        </Toggle>
        <Navbox open={!navbarOpen}>
          <Timer
            initialMinute={minutesLeft}
            initialSeconds={0}
            key={minutesLeft}
          />
          <ButtonComponent
            text={minutesLeft === 0 ? "Class Over" : "End Class"}
            disabled={minutesLeft === 0 ? true : false}
            primary
            handleClick={openModal}
          />
        </Navbox>
      </Navigation>
      {isModalOpen && <Modal closeModal={closeModal} endClass={endClass} />}
    </>
  );
};

const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;
  margin-top: 1.3rem;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`;

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  margin-top: 1rem;
  padding: 0 3vw;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 15vh;
    left: ${(props: { open: boolean }) => (props.open ? "-100%" : "0")};
  }
`;

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props: { open: boolean }) =>
    props.open ? "rotate(-45deg)" : "inherit"};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props: { open: boolean }) =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${(props: { open: boolean }) => (props.open ? "0" : "1")};
    transform: ${(props: { open: boolean }) =>
      props.open ? "rotate(90deg) " : "rotate(0deg)"};
    top: 10px;
  }
`;

export default Navbar;
