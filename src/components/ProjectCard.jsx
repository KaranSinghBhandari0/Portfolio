import React from 'react'

export default function ProjectCard() {
  return (
    <div className="card item">
        <img src="/e-commerce.jpg" alt="Trending Food" />
        <div className="card-body">
            <h3>Food Delivery App</h3>
            <p className="card-text">
                A food delivery app built with the MERN stack enables users to explore restaurants, browse menus, and place orders online. React powers the user-friendly interface, while Node.js and Express.js handle authentication, orders, and API requests. MongoDB stores user data, restaurant details, and order histories. Users can search restaurants, customize orders, and track deliveries, while admins manage restaurants, menus, and orders via a dedicated dashboard. The app is scalable and responsive, offering a seamless user experience.
            </p>
            <div className="card-links">
                <button>
                    <i className="fa-solid fa-link"></i>
                    Visit
                </button>
                <button>
                    Github
                    <i className="fa-brands fa-github"></i>
                </button>
            </div>
        </div>
    </div>
  )
}
