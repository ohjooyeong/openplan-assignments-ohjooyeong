"use client";

import { ReactNode, CSSProperties } from "react";
import "./button.css";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}

export const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  onClick,
  style,
}: ButtonProps) => {
  return (
    <button
      className={`button button-${variant} button-${size} ${className} ${disabled ? "button-disabled" : ""} ${loading ? "button-loading" : ""}`}
      onClick={onClick}
      disabled={disabled || loading}
      style={style}
    >
      {loading ? <span className="loading-spinner"></span> : children}
    </button>
  );
};
