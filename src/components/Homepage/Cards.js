import React from 'react'
import Card from '../Homepage/card'


export default function Cards() {
    const cards = [
        {
            image: "https://via.placeholder.com/300",
            title: "Card 1",
            description: "Task 1 lorem lorem",
        },
        {
            image: "https://via.placeholder.com/300",
            title: "Card 2",
            description: "Task 2 lorem lorem",
        },
        {
            image: "https://via.placeholder.com/300",
            title: "Card 3",
            description: "Task 3 lorem lorem",
        },

        {
            image: "https://via.placeholder.com/300",
            title: "Card 3",
            description: "Task 4 lorem lorem",
        },

        {
            image: "https://via.placeholder.com/300",
            title: "Card 3",
            description: "Task 5 lorem lorem",
        },

        {
            image: "https://via.placeholder.com/300",
            title: "Card 3",
            description: "Task 6 lorem lorem",
        },
    ];







  return (
    <>
    
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
    
    
    
    </>
  )
}
