import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
    const {isDark, setIsDark, toggleDark, setToggleDark} = useContext(ThemeContext);

    const toggleTheme = () =>{
        setIsDark(!isDark); //리덕스 디스패쳐 
        if(toggleDark == 'false'){
            setToggleDark('ture');
        } else{
            setToggleDark('false');
        }
    };
    
    useEffect(() => {
        // console.log('toggle');
    }, [toggleTheme]);

    return (
        <footer
        className='footer'
        style={{
            backgroundColor: isDark ? 'black':'lightgray',
        }}
        >
            <button
            className='button'
            onClick={toggleTheme}
            >
                {toggleDark}
            </button>
        </footer>
    );
};

export default Footer;