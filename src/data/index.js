import Agent_1 from '../assets/images/agent-1.png'
import DaveImage from '../assets/images/profiles/dave.png'
import JoanImage from '../assets/images/profiles/joan.png'
import LydiaImage from '../assets/images/profiles/lydia.png'

import Tim2 from '../assets/images/profiles/tim2.png'
import DaveImage2 from '../assets/images/profiles/dave2.png'
import JoanImage2 from '../assets/images/profiles/joan2.png'
import LydiaImage2 from '../assets/images/profiles/ladia2.png'


import Article1 from '../assets/images/articles/article-1.png'
import Article2 from '../assets/images/articles/article-2.png'
import Article3 from '../assets/images/articles/article-3.png'

export const Agents1 = [
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
export const Agents2 = [
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

export const articles = [
    {
        id: 1,
        title: "How to get multiple offers on your home",
        date_created: 'MARCH 21, 2022',
        author: "Joan Hollie",
        post_image: Article1,
        author_image: DaveImage2,
        category: "SELLING"
    },
    {
        id: 2,
        title: "10 home buying tips for first-time home buyers",
        date_created: 'MARCH 21, 2022',
        author: "tim hortons",
        post_image: Article2,
        author_image: JoanImage2,
        category: "BUYING"
    },
    {
        id: 3,
        title: "15 simple and relaxing  decor ideas to transform your home ",
        date_created: 'MARCH 21, 2022',
        author: "Joan Hollie",
        post_image: Article3,
        author_image: DaveImage2,
        category: "BUYING"
    },
]

export const chooseAgent1 = {
    id: 1,
    subtitle: "CHOOSING YOUR AGENT",
    title: "How to choose your agent",
    text: "You should choose an agent you are comfortable working with and who you feel has your best interests at heart. In order to make a decision, try asking prospective agents the following:",
    lists: [
        'How and where your property will be advertised',
        'Ask to see examples of their success in selling properties like yours',
        'How often you can expect feedback from the agent while your property is on the marke'
    ]
}
export const chooseAgent2 = {
    id: 2,
    subtitle: "CHAT WITH AN AGENT",
    title: "Real Time Conversation",
    text: "You should choose an agent you are comfortable working with and who you feel has your best interests at heart. you should be able to get your best agent by considering the following simple steps:",
    lists: [
        'Search for an agent by name or location',
        'Filter the results base on your interests',
        'Select and contact your best match agent'
    ]
}