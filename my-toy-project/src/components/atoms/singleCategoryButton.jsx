import React from 'react';
import '../../styles/components/atoms/singleCategoryButton.css';

const SingleCategoryButton = ({ categoryImage, categoryText }) => {
    console.log('categoryImage:', categoryImage, 'categoryText:', categoryText);
    return (
        <div className="SingleCategoryButton">
            <div
                className="category-button"
                style={{
                    backgroundImage: `url(${categoryImage})`,
                    width: '80px',
                    height: '80px',
                    backgroundPosition: 'center',
                    backgroundSize: '65%',
                }}
            />
            <div className="category-text">{categoryText}</div>
        </div>
    );
};

export default SingleCategoryButton;
