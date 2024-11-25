import React from 'react';
import "../../styles/components/atoms/itemTitle.css"

const ItemTitle = ({brand, name, price}) => {
    return (
        <div className="itemTitle">
            <div className="itemBrand">{brand}</div>
            <div className="itemName">{name}</div>
            <div className="itemPrice">{price}원~</div>
        </div>
    );
};

export default ItemTitle;