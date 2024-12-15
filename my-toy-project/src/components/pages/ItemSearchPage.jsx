import React, { useState } from 'react';
import SearchBar from "../atoms/searchBar";
import '../../styles/components/atoms/searchBar.css'
import ListItem from "../templates/listItem";
import '../../styles/components/pages/itemSearchPage.css';


const ItemSearchPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const items = [
        { id: 1, brand: "헤라", name: "헤라 블랙 쿠션 파운데이션 세트", price: "80,000", itemImgSrc: "hera_foundation.png" },
        { id: 2, brand: "랑콤", name: "랑콤 압솔뤼 리퀴드 립스틱", price: "40,000", itemImgSrc: "lancome_lipstick.png" },
        { id: 3, brand: "설화수", name: "설화수 자음생크림", price: "150,000", itemImgSrc: "sulwhasoo_cream.png" },
        { id: 4, brand: "이니스프리", name: "이니스프리 그린티 씨드 세럼", price: "30,000", itemImgSrc: "innisfree_serum.png" },
        { id: 5, brand: "미샤", name: "미샤 타임레볼루션 스킨 엑스퍼트", price: "25,000", itemImgSrc: "missha_skin.png" },
        { id: 6, brand: "스킨푸드", name: "스킨푸드 블랙슈가 퍼펙트 에센스", price: "20,000", itemImgSrc: "skinfood_essence.png" },
        { id: 7, brand: "에스티로더", name: "에스티로더 더블웨어 파운데이션", price: "75,000", itemImgSrc: "estee_laudder_foundation.png" },
        { id: 8, brand: "아모레퍼시픽", name: "아모레퍼시픽 더 페이스 아이템", price: "120,000", itemImgSrc: "amorepacific_item.png" },
        { id: 9, brand: "바닐라코", name: "바닐라코 클린 잇 제로 클렌징 밤", price: "30,000", itemImgSrc: "banilaco_cleanser.png" },
        { id: 10, brand: "토니모리", name: "토니모리 슈퍼 그린 티시드 수분크림", price: "28,000", itemImgSrc: "tonymoly_cream.png" },
        { id: 11, brand: "네이처리퍼블릭", name: "네이처리퍼블릭 알로에베라 수딩젤", price: "15,000", itemImgSrc: "nature_republic_aloe.png" },
    ];

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };


    return (
        <div className="ItemSearchPage">
            <div className="ItemSearchPage-searchBar">
                <SearchBar
                    onChange={handleSearchChange}
                    value={searchValue}
                    styleVariant="itemSearchBar"
                />
            </div>

            <div className="ItemSearchPage-listItem">
                <ListItem items={items}/>
            </div>


        </div>
    );
};

export default ItemSearchPage;