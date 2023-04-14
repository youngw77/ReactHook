import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';


const Footer = () => {
    const {isDark} = useContext(ThemeContext);

    return (
        <div
        className='content'
        style={{
            backgroundColor: isDark ? 'black' : 'white',
            color: isDark ? 'white' : 'black',
        }}
        >
            <p>좋은 하루 되세요</p>
        </div>
    );
};

export default Footer;