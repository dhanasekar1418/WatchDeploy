import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProduct} from "./redux/Productslice";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Toolbar = () => {
    const dispatch = useDispatch();
    const [SearchText,setSearchText] = useState();
    const handleInputChange = (e) => {
        setSearchText(e.target.value);
        dispatch(searchProduct(SearchText));
    };

    const handleSearch = () => {
        dispatch(searchProduct(SearchText));
    };

    return(
    <div className="toolbar">
        {/* <div className="search-container"> 
            <input type="text" value={SearchText} onChange={handleInputChange}  placeholder=" Search Products, Styles, more ..."/>
            <button className="primary-btn" onClick={handleSearch} > Search </button> 
        </div>  */}
        <div className="search-container">
            <input type="text" value={SearchText} onChange={handleInputChange} className="search-input" placeholder=" Search Products, Styles, etc ..." />
            <FontAwesomeIcon icon={faSearch} className="search-icon"  onClick={handleSearch}/>
        </div>
    </div>
    );
}
export default Toolbar;

