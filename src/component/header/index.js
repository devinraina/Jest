import React from "react";
import './style.scss';
import Logo from '../../logo512.png';

const Header = (props) =>{
    return(
        <header  data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img
                        data-test="logoIMG"
                        alt="logo"
                        src={Logo}
                        height="20px"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;