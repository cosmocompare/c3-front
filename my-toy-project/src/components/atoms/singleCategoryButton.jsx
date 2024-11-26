import React from 'react';
import '../../styles/components/atoms/singleCategoryButton.css';
import categoryMakeup from '../../assets/category_Makeup.png';


const SingleCategoryButton = ({ categoryImage, categoryText }) => {
    console.log(categoryImage, categoryText);
    return (
        <div className="SingleCategoryButton">
            <div
                className="category-button"
                style={{ backgroundImage: `url(${categoryMakeup})` ,
                    width: '80px',
                    height: '80px',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
            }}
            />
            <div className="category-text">메이크업</div>
        </div>
    );
};

export default SingleCategoryButton;
