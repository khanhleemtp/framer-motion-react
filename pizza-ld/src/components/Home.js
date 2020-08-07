import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home container">
            <h2>
                Welcome to pizza LD
            </h2>
            <Link to="/base">
            <button>
                Create Your Pizza
            </button>
            </Link>
        </div>
    )
}

export default Home
