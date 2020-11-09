import { type } from "os";
import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  primary: boolean;
  disabled: boolean;
  handleClick: () => void;
}

const ButtonComponent = ({
  text,
  primary,
  disabled,
  handleClick,
}: ButtonProps) => {
  return (
    <Button disabled={disabled} primary={primary} onClick={handleClick}>
      {text}
    </Button>
  );
};

const Button = styled.button`
  background-color: ${(props: { primary: boolean; disabled: boolean }) =>
    props.primary && !props.disabled ? "var(--orange)" : "var(--light-grey)"};
  color: ${(props: { primary: boolean }) =>
    props.primary ? "var(--white)" : "var(--black)"};
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 0.2rem;
  outline: none;
  cursor: pointer;
  margin-right: 3rem;
  font-family: "proxima-nova";

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 0 auto;
    width: 80%;
  }
`;

export default ButtonComponent;
