import React from 'react';
import MainSearchBarCategory from "../templates/mainSearchBar-Category";
import ListItem from "../templates/listItem";

const MainPage = () => {
    const items = [
        { id: 1, brand: "헤라", name: "헤라 블랙 쿠션 파운데이션 세트", price: "13,000", itemImgSrc: "image1.png" },
        { id: 2, brand: "아이패드", name: "아이패드 10세대 아이패드 10세대 아이패드 10세대", price: "500,000", itemImgSrc: "image2.png" },
        { id: 3, brand: "삼성", name: "갤럭시 Z 폴드 5", price: "2,000,000", itemImgSrc: "image3.png" },
        { id: 4, brand: "삼성", name: "갤럭시 Z 플립 5", price: "1,800,000", itemImgSrc: "image4.png" },
        { id: 5, brand: "LG", name: "LG 55인치 TV", price: "1,000,000", itemImgSrc: "image5.png" },
        { id: 6, brand: "애플", name: "아이폰 15", price: "1,300,000", itemImgSrc: "image6.png" },
        { id: 7, brand: "구글", name: "구글 픽셀 8", price: "800,000", itemImgSrc: "image7.png" },
        { id: 8, brand: "삼성", name: "갤럭시 북", price: "1,500,000", itemImgSrc: "image8.png" },
        { id: 9, brand: "샤오미", name: "미 13", price: "600,000", itemImgSrc: "image9.png" },
        { id: 10, brand: "소니", name: "소니 WH-1000XM5", price: "400,000", itemImgSrc: "image10.png" },
        { id: 11, brand: "소니", name: "소니 WH-1000XM5", price: "400,000", itemImgSrc: "image10.png" },
    ];
    return (
        <div className="mainPage">
            <MainSearchBarCategory/>
            <ListItem items={items}/>

        </div>
    );
};

export default MainPage;