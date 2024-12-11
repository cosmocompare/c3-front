import React from 'react';
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

const LikeButton = ({size}) => {

    const [liked, setLiked] = React.useState(false);

    const handleClick = () => {
        setLiked(!liked);
    }

    return (
        <div onClick={handleClick} style={{cursor: 'pointer'}}>
            {liked ? <GoHeartFill  color="red" size={size}/> : <GoHeart color="red" size={size}/>}
        </div>
    );
};

export default LikeButton;
