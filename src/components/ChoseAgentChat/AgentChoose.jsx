import React from 'react'
import './agent-choose.scss'
import CirculeImage2 from '../../assets/images/profiles/profile-2.jpg'
import CirculeImage3 from '../../assets/images/profiles/profile-3.jpg'
import CirculeImage4 from '../../assets/images/profiles/profile-4.jpg'
import CirculeImage6 from '../../assets/images/profiles/profile-6.jpg'
import CirculeImage7 from '../../assets/images/profiles/profile-7.jpg'
import Icon from '../../assets/images/Icon.png'
import { FaSearch } from 'react-icons/fa'
function AgentChoose({ direction }) {
    return (
        <section className={direction ? 'agent_choose_and_chat reverse' : 'agent_choose_and_chat'}>
            <div className="circule_images_box">
                <span className='icon_box'>
                    <img src={Icon} alt="" />
                </span>

                <div className="image">
                    <img src={CirculeImage4} alt="" />
                </div>
                <div className="image">
                    <img src={CirculeImage2} alt="" />
                </div>
                <div className="image">
                    <img src={CirculeImage3} alt="" />
                </div>
                <div className="image">
                    <img src={CirculeImage6} alt="" />
                </div>
                <div className="image">
                    <img src={CirculeImage7} alt="" />
                </div>

            </div>

            <div className="content">
                <label htmlFor="" className="sub_title">CHOOSING YOUR AGENT</label>
                <h2 className="title">
                    How to choose your agent
                </h2>
                <p className="desc">
                    You should choose an agent you are comfortable working with and who you feel has your best interests at heart. In order to make a decision, try asking prospective agents the following:
                </p>
                <ul className="list">
                    <li>How and where your property will be advertised</li>
                    <li>Ask to see examples of their success in selling properties like yours</li>
                    <li>How often you can expect feedback from the agent while your property is on the marke</li>
                </ul>
                <a href='#' className='search_agent_btn'><FaSearch /> Find an agent</a>
            </div>
        </section>
    )
}

export default AgentChoose