import React from "react";
import Agent from "../../components/agent/Agent";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import './home.scss';
import Agent_1 from '../../assets/images/agent-1.png'
import DaveImage from '../../assets/images/profiles/dave.png'
import JoanImage from '../../assets/images/profiles/joan.png'
import LydiaImage from '../../assets/images/profiles/lydia.png'

import Tim2 from '../../assets/images/profiles/tim2.png'
import DaveImage2 from '../../assets/images/profiles/dave2.png'
import JoanImage2 from '../../assets/images/profiles/joan2.png'
import LydiaImage2 from '../../assets/images/profiles/ladia2.png'


import Article1 from '../../assets/images/articles/article-1.png'
import Article2 from '../../assets/images/articles/article-2.png'
import Article3 from '../../assets/images/articles/article-3.png'

import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";
import AgentChoose from "../../components/ChoseAgentChat/AgentChoose";
import { FiSearch } from "react-icons/fi";
import Post from "../../components/post/Post";
import Footer from "../../components/footer/Footer";
const Agents1 = [
  {
    id: 1,
    name: "Tim Hortons",
    bio: "Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the ...",
    profile: Agent_1,
    rating: 5,
    phone: "8937498334"
  },
  {
    id: 2,
    name: "Joan Wrigley",
    bio: "Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the ...",
    profile: JoanImage,
    rating: 5,
    phone: "8937498334"
  },
  {
    id: 3,
    name: "Lydia Hollie",
    bio: "Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the ...",
    profile: LydiaImage,
    rating: 5,
    phone: "8937498334"
  },
  {
    id: 4,
    name: "Dave Lordsky",
    bio: "Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the ...",
    profile: DaveImage,
    rating: 5,
    phone: "8937498334"
  },
]
const Agents2 = [
  {
    id: 1,
    name: "Tim Hortons",
    bio: "Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the ...",
    profile: Tim2,
    rating: 5,
    phone: "8937498334"
  },
  {
    id: 2,
    name: "Joan Wrigley",
    bio: "Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the ...",
    profile: DaveImage2,
    rating: 5,
    phone: "8937498334"
  },
  {
    id: 3,
    name: "Lydia Hollie",
    bio: "Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the ...",
    profile: LydiaImage2,
    rating: 5,
    phone: "8937498334"
  },
  {
    id: 4,
    name: "Dave Lordsky",
    bio: "Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the ...",
    profile: JoanImage2,
    rating: 5,
    phone: "8937498334"
  },
]

const articles = [
  {
    title: "How to get multiple offers on your home",
    date_created: 'MARCH 21, 2022',
    author: "Joan Hollie",
    post_image: Article1,
    author_image: DaveImage2,
    category: "SELLING"
  },
  {
    title: "10 home buying tips for first-time home buyers",
    date_created: 'MARCH 21, 2022',
    author: "tim hortons",
    post_image: Article2,
    author_image: JoanImage2,
    category: "BUYING"
  },
  {
    title: "15 simple and relaxing  decor ideas to transform your home ",
    date_created: 'MARCH 21, 2022',
    author: "Joan Hollie",
    post_image: Article3,
    author_image: DaveImage2,
    category: "BUYING"
  },
]
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
            <li className="pagination_item"><a href="#">4</a></li>
            <li className="pagination_item"><a href="#">5</a></li>
            <li className="pagination_item"><a href="#">6</a></li>
            <li className="pagination_item arrow"><a href="#"><FaChevronRight /></a></li>
          </ul>
        </div>

        <AgentChoose />

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
            <li className="pagination_item"><a href="#">4</a></li>
            <li className="pagination_item"><a href="#">5</a></li>
            <li className="pagination_item"><a href="#">6</a></li>
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

        <AgentChoose direction="reverse" />


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
            <li className="pagination_item"><a href="#">4</a></li>
            <li className="pagination_item"><a href="#">5</a></li>
            <li className="pagination_item"><a href="#">6</a></li>
            <li className="pagination_item arrow"><a href="#"><FaChevronRight /></a></li>
          </ul>
        </div>
      </div>


      <Footer />
    </>
  )
}

export default Home