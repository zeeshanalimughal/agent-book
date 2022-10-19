import React from 'react'
import { FaCalendarAlt, FaMobile, FaReadme } from 'react-icons/fa'
import './post.scss'
function Post({ article }) {
    return (
        <div className='article'>
            <div className="date_row">
                <span>
                    <FaCalendarAlt />
                    {article.date_created}
                </span>
                <span>
                    <FaReadme />
                    {article.date_created}
                </span>
            </div>
            <div className="post_image">
                <img src={article.post_image} alt="" />
            </div>
            <h2 className="post_title">
                {article.title}
            </h2>
            <div className="article_bottom_row">
                <div className="author">
                    <img src={article.author_image} alt="" />
                    {article.author}
                </div>
                <div className="category">
                    <FaMobile />
                    {article.category}
                </div>
            </div>
        </div>
    )
}

export default Post