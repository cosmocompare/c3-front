import React from 'react';
import defaultImage from "../../assets/defaultImage.png";
import '../../styles/components/templates/header.css'


const Header = () => {
    return (
        <div className="header">
            <div className="header-logoImg">
                <img
                    src={defaultImage}
                    alt="이미지"
                    style={{width: '60px', height: '40px'}}
                />

            </div>
            <button className="header-loginButton">로그인</button>


        </div>
    );
};

export default Header;