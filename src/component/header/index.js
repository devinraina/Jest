import React from "react";
import './style.scss';
import Logo from '../../logo512.png';

const Header = (props) =>{
    return(
        <header>
            <div className="wrap">
                <div className="logo">
                    <img
                        alt="react"
                        src={Logo}
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;