import React from 'react';
import MainSearchBarCategory from "../templates/mainSearchBar-Category";
import ListItem from "../templates/listItem";

const MainPage = () => {
    return (
        <div className="mainPage">
            <MainSearchBarCategory/>
            <ListItem/>

        </div>
    );
};

export default MainPage;