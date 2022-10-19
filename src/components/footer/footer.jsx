import React from 'react'
import './footer.scss'
import FooterImage from '../../assets/images/footer.png'
import Logo from '../../assets/images/logo.png'
import { FaDribbble, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
function Footer() {
    return (
        <div className='footer_section'>
            <img src={FooterImage} alt="" className="footer_image" />

            <div className="top_footer">

                <div className="footer_widget">
                    <img src={Logo} className="footer_logo" alt="" />
                    <p className="footer_text">
                        Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.
                    </p>
                    <ul className='social_links'>
                        <li><a href="/#"><FaInstagram /></a></li>
                        <li><a href="/#"><FaDribbble /></a></li>
                        <li><a href="/#"><FaTwitter /></a></li>
                        <li><a href="/#"><FaYoutube /></a></li>
                    </ul>
                </div>

                <div className="footer_widget">
                    <h2 className="footer_label">
                        Company
                    </h2>
                    <ul className='footer_links'>
                        <li><a href="/#">About</a></li>
                        <li><a href="/#">Blog</a></li>
                        <li><a href="/#">Contact</a></li>
                        <li><a href="/#">Careere <span>we're hiring</span></a></li>
                    </ul>
                </div>
                <div className="footer_widget">
                    <h2 className="footer_label">
                        Agentbook
                    </h2>
                    <ul className='footer_links'>
                        <li><a href="/#">Search for agent</a></li>
                        <li><a href="/#">Search for sale</a></li>
                        <li><a href="/#">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer_widget">
                    <h2 className="footer_label">
                        Resources
                    </h2>
                    <ul className='footer_links'>
                        <li><a href="/#">Articles</a></li>
                        <li><a href="/#">Guides</a></li>
                        <li><a href="/#">Real Estate News</a></li>
                    </ul>
                </div>

            </div>

            <div className="footer_bottom">
                <span>
                2022 Agentbook All Rights Reserved
                </span>
                <div className="right">
                    <span><a href="/#">Terms & Conditions</a></span>
                    <span><a href="/#">Privacy Policy</a></span>
                    <span><a href="/#">Cookie Policy</a></span>
                </div>
            </div>
        </div>
    )
}

export default Footer