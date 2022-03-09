import React from 'react';
import './style.css'


const Home = () => {
    return (
        <div className='home-container'>
            <div className='popular-items'>Popular items this week</div>
            <div className='product-container'>
                <div>
                    <a href="/hotsandwiches">
                    <img src="https://images.squarespace-cdn.com/content/v1/5a278006c027d8380e567fd0/1634531238085-FK59GDYG7XR00RRR1HQL/IMG_8657.jpg" alt="Italian Philly Cheesestake" />
                    </a>
                    <p>Italian Philly Cheesestake</p>
                </div>
                <div>
                    <a href="/chickenmeals">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Crispy_Chicken_Strips_-_FotoosVanRobin.jpg" alt="Chicken Strips" />
                    </a>
                    <p>Five Piece Chicken Strips</p>
                </div>
                <div>
                    <a href="/toiletries">
                    <img src="https://i5.peapod.com/c/LP/LP8N9.png" alt="Lysol All Purpose Cleaner" />
                    </a>
                    <p>Lysol All Purpose Cleaner</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
