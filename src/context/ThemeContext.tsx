"use client";

import { createContext, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export type State = {
  theme: string | null;
  handleThemeChange: () => void;
};

export const ThemeContext = createContext<State>({
  theme: "",
  handleThemeChange: () => {},
});

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<string | null>("dark");

  const handleThemeChange = () => {
    const curTheme = theme === "dark" ? "light" : "dark";

    setTheme(curTheme);
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("theme", curTheme);
    }
  };

  useEffect(() => {
    document.documentElement.className = theme!;

    if (typeof window !== "undefined" && window.localStorage) {
      setTheme(localStorage.getItem("theme") || "dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleThemeChange,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
