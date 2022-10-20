import React from "react";
import './home.scss';

import Agent from "../../components/agent/Agent";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AgentChoose from "../../components/ChoseAgentChat/AgentChoose";
import { FiSearch } from "react-icons/fi";
import Post from "../../components/post/Post";
import Footer from "../../components/footer/Footer";


import { Agents1, Agents2, chooseAgent1, chooseAgent2, articles } from '../../data'
function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <section className="agents_container">
          <h3 className="title">Toronto’s Top Rated Agents </h3>
          <h4 className="sub_title">
            Clients loved working with these agents
          </h4>
          <div className="agents_card_container">
            <Agent agents={Agents1} />
          </div>
        </section>

        <div className="pagination">
          <ul className="pagination_list">
            <li className="pagination_item arrow"><a href="#"><FaChevronLeft /></a></li>
            <li className="pagination_item active"><a href="#">1</a></li>
            <li className="pagination_item"><a href="#">2</a></li>
            <li className="pagination_item"><a href="#">3</a></li>
            <li className="pagination_item pagination_dots"><a href="#">. . .</a></li>
            <li className="pagination_item"><a href="#">6</a></li>
            <li className="pagination_item"><a href="#">7</a></li>
            <li className="pagination_item arrow"><a href="#"><FaChevronRight /></a></li>
          </ul>
        </div>

        <AgentChoose data={chooseAgent1} />

        <section className="agents_container">
          <h3 className="title">Toronto’s Top Rated Agents </h3>
          <h4 className="sub_title">
            Clients loved working with these agents
          </h4>
          <div className="agents_card_container">
            <Agent agents={Agents2} />
          </div>
        </section>

        <div className="pagination">
          <ul className="pagination_list">
            <li className="pagination_item arrow"><a href="#"><FaChevronLeft /></a></li>
            <li className="pagination_item active"><a href="#">1</a></li>
            <li className="pagination_item"><a href="#">2</a></li>
            <li className="pagination_item"><a href="#">3</a></li>
            <li className="pagination_item pagination_dots"><a href="#">. . .</a></li>
            <li className="pagination_item"><a href="#">6</a></li>
            <li className="pagination_item"><a href="#">7</a></li>
            <li className="pagination_item arrow"><a href="#"><FaChevronRight /></a></li>
          </ul>
        </div>

        <section className="contact_section">
          <div className="content">
            <h2 className="title">
              Connect with an expert local agent
            </h2>
            <p className="desc">
              Our agents are here to help you. Let’s make your home<br />search or sale easier.
            </p>
          </div>
          <form action="" className="mail_us">
            <div className="input_box">
              <input type="text" name="" id="" placeholder="Search by name or location" />
              <button><FiSearch /></button>
            </div>
          </form>
        </section>

        <AgentChoose direction="reverse" data={chooseAgent2} />


        <section className="articles_section">
          <h2 className="title">
            Latest Articles by Agents
          </h2>
          <div className="articles">
            {articles.map(article => (
              <Post key={article.id} article={article} />
            ))}
          </div>
        </section>


        <div className="pagination">
          <ul className="pagination_list">
            <li className="pagination_item arrow"><a href="#"><FaChevronLeft /></a></li>
            <li className="pagination_item active"><a href="#">1</a></li>
            <li className="pagination_item"><a href="#">2</a></li>
            <li className="pagination_item"><a href="#">3</a></li>
            <li className="pagination_item pagination_dots"><a href="#">. . .</a></li>
            <li className="pagination_item"><a href="#">6</a></li>
            <li className="pagination_item"><a href="#">7</a></li>
            <li className="pagination_item arrow"><a href="#"><FaChevronRight /></a></li>
          </ul>
        </div>
      </div>


      <Footer />
    </>
  )
}

export default Home