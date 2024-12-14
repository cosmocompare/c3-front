import React from 'react';
import defaultImage from "../../assets/defaultImage.png";
import '../../styles/components/templates/footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-logoImg">
                    <img
                        src={defaultImage}
                        alt="이미지"
                        style={{width: '180px', height: '120px'}}
                    />
                </div>
                <div className="footer-title">
                    <h2>주)코스모 컴페어</h2>
                    <p>Concept and Design: 최현지, 현세미</p>
                    <p> backend developer: 최현지</p>
                    <p> frontend developer: 현세미</p>
                </div>
                <div className="footer-details">
                    <p>Github: https://github.com/cosmocompare</p>
                </div>
            </div>


        </div>
    );
};

export default Footer;