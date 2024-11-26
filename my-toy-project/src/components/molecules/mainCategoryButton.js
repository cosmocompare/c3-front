import React from 'react';
import CategoryButton from '../atoms/singleCategoryButton';

import categoryMakeup from '../../assets/category_Makeup.png'; // 이미지 import

const CategoryList = () => {
    const categories = [
        { categoryImage: categoryMakeup, categoryText: '메이크업' },
    ];

    return (
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            {categories.map((category, index) => (
                <CategoryButton
                    key={index}
                    categoryImage={category.categoryImage}
                    categoryText={category.categoryText}
                />
            ))}
        </div>
    );
};

export default CategoryList;
