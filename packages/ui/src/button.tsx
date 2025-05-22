"use client";

import { ReactNode, CSSProperties } from "react";
import "./button.css";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}

export const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  style,
}: ButtonProps) => {
  return (
    <button
      className={`button button-${variant} button-${size} ${className} ${disabled ? "button-disabled" : ""}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};
