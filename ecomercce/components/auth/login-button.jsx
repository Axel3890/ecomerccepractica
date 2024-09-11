"use client";

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}) => {
  return (
    <span className="cursor-pointer">
      {children}
    </span>
  );
};
