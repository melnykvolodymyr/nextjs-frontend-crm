"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const PrimaryButton = ({
  children,
  href,
  handleClick,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  handleClick?: Function;
  className?: string;
}) => {
  const router = useRouter();

  const handleButtonClick = () => {
    if (href == "" || href == "#" || href == undefined) {
      if (handleClick) handleClick();
    } else {
      if (href) router.push(href);
    }
  };

  return (
    <span
      className={`${className} px-8 sm:px-4 py-3 bg-primary hover:bg-primary rounded-md normal-case text-white cursor-pointer`}
      onClick={handleButtonClick}
    >
      {children}
      {/* <Link
        className="text-primaryButtonTextColor text-bigPrimaryButtonTextSize sm:text-[20px] text-[14px]"
        href={href}
      >
        {children}
      </Link> */}
    </span>
  );
};

PrimaryButton.displayName = "PrimaryButton";

export { PrimaryButton };
