import React from 'react'
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"
import logo from "../assets/HarshitKumarLogo.png"
const Navbar = () => {
  return (
    <nav className=" mb20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify center gap-4 text-2xl">
        <FaLinkedin/>
        <FaGithub/>
        <FaInstagram/>
        <FaSquareTwitter/>
      </div>
    </nav>
  )
}

export default Navbar
