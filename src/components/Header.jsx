import React from "react"
import logo from "../assets/logo.png"
import icon from "../assets/icon.svg"
import { Link } from "react-router-dom"
import { IoIosSearch } from "react-icons/io"

const linkStyle = ["text-slate-50 m-5 text-lg"]

const Header = () => {
  return (
    <nav className="box-border flex h-[100px] items-center justify-between bg-black p-1">
      <img
        src={logo}
        alt="Netflix"
        className="hidden cursor-pointer lg:ml-7 lg:block lg:h-[70%]"
      />

      <img
        src={icon}
        alt="Netflix"
        className="ml-4 h-[60%] cursor-pointer lg:hidden"
      />

      <div className="ml-10 hidden w-[100%] md:block lg:ml-[5rem]">
        <Link to="/tvshows" className={[...linkStyle]}>
          TV Shows
        </Link>
        <Link to="/movies" className={[...linkStyle]}>
          Movies
        </Link>
        <Link to="/recentlyadded" className={[...linkStyle]}>
          Recently Added
        </Link>
        <Link to="/mylist" className={[...linkStyle]}>
          My List
        </Link>
      </div>

      <div className="text-white md:hidden">==</div>

      <IoIosSearch className="mr-7 hidden cursor-pointer text-3xl text-white md:block" />
    </nav>
  )
}

export default Header
