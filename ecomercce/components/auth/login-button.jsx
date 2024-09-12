"use client";
import { useRouter } from "next/navigation";
export const LoginButton = ({ children, mode = "redirect", asChild }) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login")
  };

  if (mode === "modal"){
    return(
      <span>
        TODO: hacer el modal
      </span>
    )
  }
  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};
