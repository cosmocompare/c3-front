import React from 'react';
import SingleCategoryButton from '../atoms/singleCategoryButton';
import categoryMakeup from '../../assets/category_Makeup.png';
import categorySkincare from '../../assets/category_Skincare.png';
import '../../styles/components/molecules/mainCategoryButton.css'

const CategoryList = () => {
    const categories = [
        { image: categoryMakeup, text: '메이크업' },
        { image: categorySkincare, text: '스킨케어' },
        { image: categoryMakeup, text: '메이크업' },
        { image: categorySkincare, text: '스킨케어' },
        { image: categoryMakeup, text: '메이크업' },
        { image: categorySkincare, text: '스킨케어' },

    ];

    return (
        <div className = "mainCategoryList">
            {categories.map((category, index) => (
                <SingleCategoryButton
                    key={index}
                    categoryImage={category.image}
                    categoryText={category.text}
                />
            ))}
        </div>
    );
};


export default CategoryList;
