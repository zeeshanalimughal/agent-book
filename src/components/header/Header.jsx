import React from 'react'
import './header.scss'
import LogoImage from '../../assets/images/logo.png'
import CountryIcon from '../../assets/images/countryicon.png'
import ProfileImage from '../../assets/images/profile.png'
import {FaBars} from "react-icons/fa";
function Header() {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={LogoImage} alt="" />
        </div>
        <div className="right_nav">
            <div className="icon_box">
                <img src={CountryIcon} alt="" />
            </div>
            <div className="icon_box profile">
                <FaBars className='toggle'/>
                <img src={ProfileImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header