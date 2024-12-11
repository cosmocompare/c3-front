import React from 'react';
import SearchBar from "../atoms/searchBar";
import MainCategoryButton from "../molecules/mainCategoryButton";
import '../../styles/components/templates/mainSearchBar-Category.css'
import defaultImage from '../../assets/defaultImage.png';

const MainSearchBarCategory = () => {
    return (
        <div className="mainSearchBarCategory">
            <div className="SearchBar-Category">
                <div className="mainLogoImg">
                    <img
                        src={defaultImage}
                        alt="이미지"
                        style={{width: '300px', height: '180px'}}
                    />
                </div>
                <SearchBar/>
                <MainCategoryButton/>

            </div>


        </div>
    );
};

export default MainSearchBarCategory;