import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <img 
                    src='Media/IMAGES/images/homeHero.png' 
                    alt='A confident investor looking at financial charts on a digital screen in a modern workspace, surrounded by graphs and stock market data, conveying a sense of optimism and opportunity. The image includes the text Invest in everything.' 
                    className='mb-5' 
                />
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives,mutual funds, and more</p>
                <button className='p-2 btn btn-primary fs-5' style={{width:"20%", margin: "0 auto"}}>Signup Now</button>
            </div>
             
        </div>
    );
}

export default Hero;