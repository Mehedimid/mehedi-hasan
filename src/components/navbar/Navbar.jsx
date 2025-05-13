/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
"use client";

import { useState } from "react";
import {
  Home,
  User,
  Folder,
  Mail,
  FileText,
  BookOpen,
  Menu,
  SidebarClose,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { fonts } from "../shared/FontDisplay";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About Me", icon: User },
  { href: "/projects", label: "Projects", icon: Folder },
  { href: "/contact", label: "Contact", icon: Mail },
  {
    href: "https://drive.google.com/file/d/1OaOH4qDJHh4N4VqG0wpHVqmnsuvbmOXJ/view",
    label: "Resume",
    icon: FileText,
  },
  { href: "/blogs", label: "Blogs", icon: BookOpen },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div>
      {/* Mobile Toggle Button */}
      {open ? (
        <button
          onClick={() => setOpen(false)}
          className="md:hidden fixed top-4 left-4 z-50 p-2 rounded bg-black text-white"
        >
          <SidebarClose size={20} />
        </button>
      ) : (
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden fixed top-4 left-4 z-50 p-2 rounded bg-black text-white"
        >
          <Menu size={20} />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-1/2 md:w-[180px] lg:w-[200px] bg-[#1b1b1b] text-white z-40 flex flex-col justify-between
  transition-transform duration-300 ease-in-out shadow-lg md:translate-x-0
  ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Top with image and overlay */}
        <div className="relative">
          <div className="w-full h-44 md:h-52 relative">
            <Image
              src="https://i.postimg.cc/4xBV8YhJ/remove-bg1.png"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex items-end w-full">
              <h1
                className={`lg:text-xl font-bold text-white bg-primary opacity-90 w-full p-2 flex justify-center items-center uppercase ${fonts.playfair.className}`}
              >
                Mehedi Hasan
              </h1>
            </div>
          </div>

          {/* Navigation with scrollable content */}
          <nav className="ml-4 max-h-[calc(100vh-200px)] overflow-y-auto">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded transition mb-2
        ${
          pathname === link.href
            ? "text-white"
            : "text-gray-400 hover:text-white"
        }`}
                  target={link.href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <Icon size={18} className="shrink-0" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 text-center mb-4">
          © 2025 Mehedi Hasan
        </p>
      </aside>
    </div>
  );
};

export default Navbar;
