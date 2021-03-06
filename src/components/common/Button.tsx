import styled from "styled-components";
import { MouseEventHandler } from "react";

export interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  children: React.ReactNode;
  size?: "large" | "medium" | "small";
  className?: string;
}

const Button = ({ onClick, type = "button", children, size = "medium", className }: ButtonProps) => {
  return <S.Container {...{ onClick, type, size, className }}>{children}</S.Container>;
};

const S = {
  Container: styled.button<{ size: string }>`
    outline: none;
    border: none;
    //border: 0.1rem solid;
    cursor: pointer;
    ${({ theme, size }) => (size === "small" ? theme.borderRadius.small : theme.borderRadius.medium)};
    padding: ${({ size }) => (size === "small" ? "0.5rem 1rem" : " 1.5rem 3rem")};
    width: ${({ size }) => size === "large" && "90%"};
  `,
};

export default Button;
