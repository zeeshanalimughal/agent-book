import React from 'react'
import { FaStar } from 'react-icons/fa'
import './agent.scss'
function Agent({ agents }) {
    return (
        <>
            {
                agents?.map(agent => {
                    return (
                        <div className='agent_card' key={agent.id}>
                            <div className="profile_image">
                                <img src={agent.profile} alt="" />
                            </div>
                            <div className="agent_details">
                                <div className="name_row">
                                    <label htmlFor="" className="name">{agent.name}</label>
                                    <span>
                                       <FaStar/>
                                       <FaStar/>
                                       <FaStar/>
                                       <FaStar/>
                                       <FaStar/>
                                       <i>5.0</i>
                                    </span>
                                </div>
                                    <p className="bio">
                                        {agent.bio}
                                        <span>More</span>
                                    </p>
                                    <a href={"tel:"+agent.phone} className="contact_btn">Contact Agent</a>
                            </div>
                        </div>
                    )

                })
            }
        </>
    )
}

export default Agent