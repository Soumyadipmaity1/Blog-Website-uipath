import React from "react";

function Card({ image, title, description }) {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
                src={image}
                alt={title}
                className="rounded-t-lg w-full h-40 object-cover"
            />
            <div className="p-3">
                <h3 className="text-lg font-bold text-gray-800">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
            </div>
        </div>
    );
}

export default Card;
