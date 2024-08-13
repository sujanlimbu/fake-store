import React from "react";
import { Link } from "react-router-dom";

const carouselItems = [
    {
        link: "https://dummyimage.com/1080x300/e8829a/000000.png",
        description: "This is the First carousel item",
        id: 1
    },
    {
        link: "https://dummyimage.com/1080x300/e0a6e0/000000.png",
        description: "This is the Second carousel item",
        id: 2
    },
    {
        link: "https://dummyimage.com/1080x300/8685f5/000000.jpg",
        description: "This is the Third carousel item",
        id: 3
    },
    {
        link: "https://dummyimage.com/1080x300/87f590/000000.jpg",
        description: "This is the Fourth carousel item",
        id: 4
    },
]

const altImage = {
    link: "https://dummyimage.com/1080x300/000/fff.png&text=image+not+found"
}

function HomeCarousel() {
    return (
        <>
            ---- Carousel Slider here ----
        </>

    );
}

export default HomeCarousel;