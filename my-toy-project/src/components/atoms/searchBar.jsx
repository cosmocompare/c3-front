import React, {Component} from 'react';
import '../../styles/components/atoms/searchBar.css'
import { IoMdSearch } from "react-icons/io";

class SearchBar extends Component {
    render() {

        const { onChange, value, placeholder, styleVariant } = this.props;

        const searchBarClass = `search-barLogo ${this.props.styleVariant || ''}`;

        return (
            <div className="search-bar">
                <div className={searchBarClass}>
                    <input
                    type="text"
                    className="search-input"
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder || "상품을 검색해보세요"}
                    />
                    <div className="searchIcon">
                        <IoMdSearch/>
                    </div>
                </div>


            </div>
        );
    }
}

export default SearchBar;