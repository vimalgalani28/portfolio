import { Link } from "gatsby"
import React from "react"

import { active, bottom, nav_item } from "../styles/navbar.module.css"

const items = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Education",
    link: "/education",
  },
  {
    text: "Experience",
    link: "/experience",
  },
  {
    text: "Projects",
    link: "/projects",
  },
]

const Header = () => {
  const handleOpen = () => {
    const mobileNav = document.querySelector(".mobile-nav")
    mobileNav.classList.remove("hidden")
    mobileNav.classList.add("flex")
  }

  const handleClose = () => {
    const mobileNav = document.querySelector(".mobile-nav")
    mobileNav.classList.add("hidden")
    mobileNav.classList.remove("flex")
  }

  return (
    <>
      <header className="bg-blue-900 text-white py-3 relative">
        <div className="flex items-center max-w-5xl mx-auto w-11/12">
          <div className="flex-1">
            <Link to="/" className="heading4 text-yellow-300 bold">
              VG
            </Link>
          </div>
          <button className="md:hidden xs:block" onClick={handleOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <nav className="md:flex items-center gap-x-5 xs:hidden">
            {items.map(item => (
              <Link
                to={item.link}
                key={item.text}
                className={`flex flex-col items-center justify-center ${nav_item}`}
                activeClassName={active}
              >
                <span className="py-2 px-1">{item.text}</span>
                <span
                  className={`w-full bg-yellow-500 h-1 invisible ${bottom}`}
                ></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-yellow-500 text-black px-2 py-2 text-center paragraph 1 rounded hover:bg-yellow-700 regular"
            >
              Contact Me
            </Link>
          </nav>
        </div>
      </header>
      <div className="hidden mobile-nav bg-blue-900 text-white fixed h-screen bg-opacity-50 w-screen flex-col px-3 py-10 gap-y-6 z-10">
        <button className="self-end" onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="xs:flex-col justify-center items-center gap-y-2 mx-auto">
          {items.map(item => (
            <Link
              to={item.link}
              key={item.text}
              className={`flex flex-col items-center justify-center ${nav_item}`}
              activeClassName={active}
            >
              <span className="py-2 px-1">{item.text}</span>
              <span
                className={`w-full bg-yellow-500 h-1 invisible ${bottom}`}
              ></span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-yellow-500 text-black px-2 py-2 text-center paragraph 1 rounded hover:bg-yellow-700 regular"
          >
            Contact Me
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Header
