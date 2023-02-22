import React from 'react';
import TrollFace from '../images/Troll Face.png';

function Header() {
    return (
        <div className='header'>
            <img src={TrollFace} className="header-image"/>
            <h2 className='title'>Meme Generator</h2>
            <h4 className='project'>React Course Project - 3</h4>
        </div>
    )
}
export default Header