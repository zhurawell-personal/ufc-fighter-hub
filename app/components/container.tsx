// consistent max width and horizontal padding

import React from "react";

export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-6xl px-[20px] md:px-[30px] lg:px-[40px] ${className}`}>
      {children}
    </div>
  );
}
