// 'use client'
// import { usePathname } from "next/navigation";
// import { PiVinylRecord } from "react-icons/pi";
// import { RiPlayListFill } from "react-icons/ri";
// import { FaStar,FaToggleOff } from "react-icons/fa";
// import { BiSolidCategory } from "react-icons/bi";
// import { NavItem } from "./navigation-utils";

// const navItems = [
//   { href: "/albums", icon: PiVinylRecord, size: 25, activeMatch: "includes", matchPath: "/album" },
//   { href: "/playlists", icon: RiPlayListFill, size: 25, activeMatch: "exact" },
//   { href: "/", icon: FaStar, size: 30, isSpecial: true, activeMatch: "exact" },
//   { href: "/categories", icon: BiSolidCategory, size: 25, activeMatch: "includes", matchPath: "/categories" },
//   { href: "", icon: FaToggleOff, size: 25, activeMatch: "never" },
// ];

// function getIsActive(pathname, item) {
//   switch (item.activeMatch) {
//     case "includes":
//       return pathname.includes(item.matchPath || item.href);
//     case "startsWith":
//       return pathname.startsWith(item.matchPath || item.href);
//     case "exact":
//       return pathname === item.href;
//     case "never":
//       return false;
//     default:
//       return pathname === item.href;
//   }
// }

// export default function Footer() {
//   const pathname = usePathname();

//   return (
//     <nav className="fixed w-full bottom-0 left-0 flex justify-evenly py-3 items-center bg-white shadow-[0_-4px_8px_rgba(0,0,0,0.1)] ">
//       {navItems.map((item) => (
//         <NavItem
//           key={item.href}
//           {...item}
//           isActive={getIsActive(pathname, item)}
//         />
//       ))}
      
//     </nav>
//   )
// }

'use client'
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { PiVinylRecord } from "react-icons/pi";
import { RiPlayListFill } from "react-icons/ri";
import { FaStar, FaToggleOff, FaToggleOn } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { NavItem } from "./navigation-utils";

function getIsActive(pathname, item) {
  switch (item.activeMatch) {
    case "includes":
      return pathname.includes(item.matchPath || item.href);
    case "startsWith":
      return pathname.startsWith(item.matchPath || item.href);
    case "exact":
      return pathname === item.href;
    case "never":
      return false;
    default:
      return pathname === item.href;
  }
}

export default function Footer() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme ? JSON.parse(savedTheme) : prefersDark;
    
    setIsDarkMode(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  const navItems = [
    { href: "/albums", icon: PiVinylRecord, size: 25, activeMatch: "includes", matchPath: "/album" },
    { href: "/playlists", icon: RiPlayListFill, size: 25, activeMatch: "exact" },
    { href: "/", icon: FaStar, size: 30, isSpecial: true, activeMatch: "exact" },
    { href: "/categories", icon: BiSolidCategory, size: 25, activeMatch: "includes", matchPath: "/categories" },
    { icon: isDarkMode ? FaToggleOn : FaToggleOff, size: 25, isToggle: true, onClick: toggleDarkMode, isActive: isDarkMode },
  ];

  return (
    <nav className="fixed w-full bottom-0 left-0 flex justify-evenly py-3 items-center bg-white dark:bg-black shadow-[0_-4px_8px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_8px_rgba(255,255,255,0.1)]">
      {navItems.map((item, index) => (
        <NavItem
          key={item.href || index}
          {...item}
          isActive={item.isToggle ? item.isActive : getIsActive(pathname, item)}
        />
      ))}
    </nav>
  )
}