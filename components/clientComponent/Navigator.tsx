"use client";
import { useRouter } from "next/navigation";

interface NavigatorProp {
  children: React.ReactNode;
  to?: string;
}

export const Navigator: React.FC<NavigatorProp> = ({ children, to }) => {
  const navigate = useRouter();

  return (
    <div
      onClick={() => {
        navigate.push(to!);
      }}
    >
      {children}
    </div>
  );
};
