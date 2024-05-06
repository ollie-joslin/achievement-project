import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, fallout4, batmanArkhamKnight, eldenRing, destiny2, blackOps3, skyrim } from "../assets/images";

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "games", label: "Games" },
    { href: "#about-us", label: "About Us" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Guides' },
    { value: '500+', label: 'Games' },
    { value: '250k+', label: 'Achievements' },
];

export const products = [
    {
        imgURL: fallout4,
        name: "Fallout 4",
        rating: "4.6",
        link:"/"
    },
    {
        imgURL: batmanArkhamKnight,
        name: "Batman: Arkham Knight",
        rating: "4.9",
        link:"/"

    },
    {
        imgURL: eldenRing,
        name: "Elden Ring",
        rating: "4.1",
        link:"/"

    },
    {
        imgURL: destiny2,
        name: "Destiny 2",
        rating: "4.0",
        link:"/"

    },
    {
        imgURL: blackOps3,
        name: "Call of Duty: Black Ops 3",
        rating: "5.0",
        link:"/"

    },
    {
        imgURL: skyrim,
        name: "The Elder Scrolls V: Skyrim",
        rating: "5.0",
        link:"/"

    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Full Walkthroughs",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Easy Achievement Tracker",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Guides for All",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Achievements",
        links: [
            { name: "Xbox Games", link: "/" },
            { name: "Playstation Games", link: "/" },
            { name: "PC Games", link: "/" },
            { name: "Mobile Games", link: "/" },
            { name: "Nintendo Games", link: "/" },
            { name: "Other Games", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];