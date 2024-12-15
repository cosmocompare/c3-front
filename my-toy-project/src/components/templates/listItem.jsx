import React from "react";
import SingleListItem from "../molecules/singleListItem";
import "../../styles/components/templates/listItem.css"

const ListItem = ({items}) => {


    // 5개씩 데이터 묶어 출력
    const chunkedItems = [];
    for (let i = 0; i < items.length; i += 5) {
        chunkedItems.push(items.slice(i, i + 5));
    }

    return (
        <div className="list-items">
            {chunkedItems.map((chunk, index) => (
                <ul key={index} className="list-group">
                    {chunk.map((item) => (
                        <li key={item.id} className="list-item">
                            <SingleListItem
                                brand={item.brand}
                                name={item.name}
                                price={item.price}
                                itemImgSrc={item.itemImgSrc}
                            />
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    );
};

export default ListItem;
