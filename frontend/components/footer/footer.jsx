import React from 'react';

const Footer = () => {
    return (
        <div className="footer-div">
            <button className ="personal-links" onClick={()=> window.open("https://github.com/gonsaje/Conterest", "_blank")}>
                <i  className="fab fa-github"></i>
            </button>
            <button className ="personal-links" onClick={()=> window.open("https://angel.co/u/gonsaje", "_blank")}>
                <i className="fab fa-angellist"></i>
            </button>
            <button className ="personal-links" onClick={()=> window.open("https://www.linkedin.com/in/jaesong2/", "_blank")}> 
                <i  className="fab fa-linkedin"></i>
            </button>
            <button className ="personal-links" onClick={()=> window.open("https://gonsaje.github.io/", "_blank")}> 
                <i  className="fas fa-user-astronaut"></i>
            </button>
            
           
           
        </div>
    )
}

export default Footer;