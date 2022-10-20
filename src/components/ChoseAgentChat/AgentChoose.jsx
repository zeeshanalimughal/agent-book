import React from 'react'
import './agent-choose.scss'
import CirculeImage2 from '../../assets/images/profiles/profile-2.jpg'
import CirculeImage3 from '../../assets/images/profiles/profile-3.jpg'
import CirculeImage4 from '../../assets/images/profiles/profile-4.jpg'
import CirculeImage6 from '../../assets/images/profiles/profile-6.jpg'
import CirculeImage7 from '../../assets/images/profiles/profile-7.jpg'
import Icon from '../../assets/images/Icon.png'
import { FaSearch } from 'react-icons/fa'
function AgentChoose({ direction, data }) {
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
                <label htmlFor="" className="sub_title">{data.subtitle}</label>
                <h2 className="title">
                    {data.title}
                </h2>
                <p className="desc">
                    {data.text}
                </p>
                <ul className="list">
                    {data.lists.map((list, id) => (
                        <li key={id}>{list}</li>
                    ))}
                </ul>
                <a href='#' className='search_agent_btn'><FaSearch /> Find an agent</a>
            </div>
        </section>
    )
}

export default AgentChoose