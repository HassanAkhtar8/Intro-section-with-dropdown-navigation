import React, { useState } from 'react';
import { useEffect } from 'react';
import mobileImg from './images/image-hero-mobile.png';
import desktopImg from './images/image-hero-desktop.png';

function Main(){
        
        const [widthIs, setWidthIs] = useState(window.innerWidth > 500?false:true);
        
        /*
        const [widthIs, setWidthIs] = useState(true);
        */

        function handleImage(){
                
                setWidthIs(window.innerWidth > 500?false:true);
               
        }
        useEffect(() => {

                window.addEventListener('resize', handleImage);
                
                return () => {
                        window.removeEventListener('resize', handleImage);
                }
        });
        return(
                <main>
                    <img className='hero' src={widthIs?mobileImg:desktopImg} alt="hero"/>
                        <div className='hero-text'>
                                <h1>Make remote work</h1>
                                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                                <button>Learn more</button>
                        </div>
                </main>
        );
}
export default Main;