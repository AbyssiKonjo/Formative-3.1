import React from 'react'
import { useNavigate } from 'react-router-dom'

// API KEY
const apiKey = import.meta.env.VITE_NEWS_API_KEY

const Home = () => {
    const navigate = useNavigate('');

    const handleCategoryClick = (category) => {
        navigate(`/${category}`);
    }
    return (
        <>
        <div id='home-container'>
            <div id='boxContainer'>
                <div className='box'>
                    <h2>GENERAL</h2>
                </div>
                <div className='box' onClick={() => handleCategoryClick('news')}>
                    <h2>NEWS</h2>
                </div>
                <div className='box' onClick={() => handleCategoryClick('health')}>
                    <h2>HEALTH</h2>
                </div>
                <div className='box'>
                    <h2>BUSINESS</h2>
                </div>
                <div className='box' onClick={() => handleCategoryClick('sports')}>
                    <h2>SPORTS</h2>
                </div>
                <div className='box'>
                    <h2>SCIENCE</h2>
                </div>
                <div className='box'>
                    <h2>ENTERTAINMENT</h2>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
