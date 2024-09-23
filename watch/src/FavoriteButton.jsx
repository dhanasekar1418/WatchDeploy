import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { remove } from "./redux/FavoriteSlice.js";
import './FavoriteButton.css';
export default function fav  ()  {
    const fav = useSelector((state) => state.Favorite.Favoritearray);
    if(fav.length===0){
      return <h3 style={{fontSize:"50px",display:"flex",alignItems:'center',justifyContent:"center",height:"80vh", fontFamily:"cursive"}}>You Have No Favorites 💕</h3>
    }
    const dispatch = useDispatch();
    const removeitem = (props) => {
      dispatch(remove(props));
    }
    return (
      <div className="overall">
        <div className="left">
          {fav.map((props) => (
            <div className="container1" key={props.id}>
              <h1 className="title1">{props.title}</h1>
              <h3 className="category1">{props.category}</h3>
              <img src={props.image_url} alt="product" className="image1" />
              <p className="price1">${props.price}</p>
              <p className="description">{props.description}</p>
              <button className="button1" onClick={() => removeitem(props)} >Remove</button>
            </div>
          ))}
        </div>
        </div>        
    );
}
