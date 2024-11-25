import React from 'react';
import ItemImg from "../atoms/itemImg";
import ItemTitle from "../atoms/itemTitle";
import LikeButton from "../atoms/likeButton";
import "../../styles/components/molecules/singleListItem.css"

const SingleListItem = ({ itemImgSrc, brand, name, price }) => {
    console.log({ brand, name, price, itemImgSrc });

    return (
        <div className="single-listItem">
            <div className="single-listItmeImg">
                <div className="single-listItme-itemImg">
                    <ItemImg itemImgSrc={itemImgSrc}/>
                </div>
                <div className="single-listItme-LikeButton">
                    <LikeButton size={25} />
                </div>


            </div>
            <ItemTitle brand={brand} name={name} price={price}/>
        </div>
    );
};

export default SingleListItem;