import React from 'react'
import '../Homepage/Home.css'
import Image from '../Homepage/Vector.png'
import About from '../Homepage/About.png'
import Card from '../Homepage/card'

export default function Home() {
    const cards = [
        {
            image: "https://via.placeholder.com/300",
            title: "Card 1",
            description: "This is the description for card 1.",
        },
        {
            image: "https://via.placeholder.com/300",
            title: "Card 2",
            description: "This is the description for card 2.",
        },
        {
            image: "https://via.placeholder.com/300",
            title: "Card 3",
            description: "This is the description for card 3.",
        },

        {
            image: "https://via.placeholder.com/300",
            title: "Card 3",
            description: "This is the description for card 3.",
        },

        {
            image: "https://via.placeholder.com/300",
            title: "Card 3",
            description: "This is the description for card 3.",
        },

        {
            image: "https://via.placeholder.com/300",
            title: "Card 3",
            description: "This is the description for card 3.",
        },
    ];



    return (
        <div className="first-div">
            <div className="second-div">
                <p className="">Voices form the Cosmos:</p>
                <p>Spaces Meets Imagination and</p>
                <p>Discovery</p>

                <div className="input-div gap-5 ">
                    <input type="text" className="search-input" />
                    <button className="search-button"><img src={Image} alt="icon" class="button-icon w-10 h-10" /></button>
                </div>

                <div className="about-div">
                    <div className="about-img">
  <img src={About} alt="about-image"  />
  </div>

  <div className="about-text-div">
  <h1 className="my-10 text-white">ABOUT</h1>
  <p className=" text-grey p-about">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
  </p>
</div>



</div>


                <div className="cards-div">
                    <p>Recent Posts</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                        {cards.map((card, index) => (
                            <Card
                                key={index}
                                image={card.image}
                                title={card.title}
                                description={card.description}
                            />
                        ))}
                    </div>

                </div>


                <div className="View-post-div">

                    <button className="view-post-btn">View All Posts</button>

                </div>

            </div>






        </div>
    )
}
