'use client';

import { useState, useEffect } from "react";

const DarkModeToggle = () => {
    const [theme, setTheme] = useState(() =>
        typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
            ? "dark"
            : "light"
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="btn-outline p-2 rounded-full transition-all"
        >
            {theme === "light" ? "🌙 Dark Mode" : "☀ Light Mode"}
        </button>
    );
}

export default DarkModeToggle;