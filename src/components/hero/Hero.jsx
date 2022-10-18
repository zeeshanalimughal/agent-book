import React from 'react'
import './hero.scss'
import { FiSearch } from "react-icons/fi";

function Hero() {
  return (
    <section className='hero_container'>
        <label className="hero_title">
            Find The Perfect Real Estate Agent
        </label>
        <p className="hero_subtitle">
        Make your search and sale easier and faster by connecting with one of our<br/> expert local agent in your neighborhood
        </p>

        <div className="search_box">
            <form action="">
         <span className='search_icon'>
         <FiSearch/>
         </span>
            <input type="text"/>
            <button className='search_btn'>Search Agents</button>
            </form>
        </div>

    </section>
  )
}

export default Hero