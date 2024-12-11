import React from 'react';
import defaultImage from '../../assets/defaultImage.png';
import '../../styles/components/atoms/itemImg.css'

const ItemImg = ({itemImgSrc}) => {
    return (
        <div className="img-container">
            <img
                src={itemImgSrc}
                onError={(e) => {
                    e.target.src = defaultImage;}}
                alt="이미지"
            />
        </div>
    );
};

export default ItemImg;