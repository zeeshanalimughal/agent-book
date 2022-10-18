import React from "react";
import Agent from "../../components/agent/Agent";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import './home.scss';
import Agent_1 from '../../assets/images/agent-1.png'
const Agents = [
  {
    id:1,
    name:"Tim Hortons",
    bio:"Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the ...",
    profile:Agent_1,
    rating:5,
    phone:"8937498334"
  },
  {
    id:1,
    name:"Tim Hortons",
    bio:"Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the ...",
    profile:Agent_1,
    rating:5,
    phone:"8937498334"
  },
  {
    id:1,
    name:"Tim Hortons",
    bio:"Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the ...",
    profile:Agent_1,
    rating:5,
    phone:"8937498334"
  },
  {
    id:1,
    name:"Tim Hortons",
    bio:"Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the ...",
    profile:Agent_1,
    rating:5,
    phone:"8937498334"
  },
]
function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <Hero/>
        <section className="agents_container">
          <h3 className="title">Toronto’s Top Rated Agents </h3>
          <h4 className="sub_title">
          Clients loved working with these agents
          </h4>
          <div className="agents_card_container">
          <Agent agents={Agents}/>

          </div>
        </section>
      </div>
    </>
  )
}

export default Home