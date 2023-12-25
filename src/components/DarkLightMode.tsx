"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";

export default function DarkLightMode() {
  const { handleThemeChange, theme } = useContext(ThemeContext);

  return (
    <div className="py-4 ">
      <button
        className="hover:opacity-60 transition-all duration-300"
        onClick={handleThemeChange}
      >
        {theme === "dark" ? (
          <Image
            className="w-full h-full object-cover"
            src="/assets/icon-sun.svg"
            alt="sun"
            width={50}
            height={50}
          />
        ) : (
          <Image
            className="w-full h-full object-cover"
            src="/assets/icon-moon.svg"
            alt="sun"
            width={50}
            height={50}
          />
        )}
      </button>
    </div>
  );
}
