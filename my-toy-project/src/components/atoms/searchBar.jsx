import React, {Component} from 'react';
import '../../styles/searchBar.css'
import { IoMdSearch } from "react-icons/io";

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <div className="serch-barLogo">
                    <input type="text"
                           className="search-input"
                           onChange={this.props.onChange}
                           value={this.props.value}
                           placeholder="상품을 검색해보세요"/>
                    <div className="searchIcon">
                        <IoMdSearch/>
                    </div>
                </div>


            </div>
        );
    }
}

export default SearchBar;