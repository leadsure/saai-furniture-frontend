"use client";
import React from "react";

interface ClientButtonProp {
  children: React.ReactNode;
  onClick: () => void;
}

export const ClientButton: React.FC<ClientButtonProp> = ({
  onClick,
  children,
}) => {
  return <div onClick={onClick}>{children}</div>;
};
