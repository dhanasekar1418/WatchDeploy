import React, { useEffect, useMemo, useState } from "react";
import './Cart.css';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {decrementItem, incrementItem,remove } from "./redux/Cartslice.js";
export default function Cart  ()  {
    const cart = useSelector((state) => state.cart.cartarray);
    useEffect(() => {
      putCart();
    }, []);
    const putCart = async () => {
      const res = await axios.get("https://ecommerce-faaq.onrender.com/products");
      console.log("===> res", res.data);
      dispatch(putCart(res.data));
    }
    const total = useMemo(() => {
      let sum = 0;
      cart.forEach((item) => {
        sum += item.quantity * item.price;
      });
      return sum;
    }, [cart]);

    if(cart.length===0){
      return <h3 style={{fontSize:"50px",display:"flex",alignItems:'center',justifyContent:"center",height:"80vh", fontFamily:"cursive"}}>🤷‍♂️Cart is empty !!</h3>
    }
    const dispatch = useDispatch();
    const handleIncrement = (props) => {
        dispatch(incrementItem(props));
    }
    const handlDecrement = (props) => {
      dispatch(decrementItem(props));
    }
    const removeitem = (props) => {
      dispatch(remove(props));
    }
    return (
      <div className="overall">
        <div className="left">
          {cart.map((props) => (
            <div className="container1" key={props.id}>
              <h1 className="title1">{props.title}</h1>
              <h3 className="category1">{props.category}</h3>
              <img src={props.image_url} alt="product" className="image1" />
              <p className="price1">${props.price}</p>
              <p className="description">{props.description}</p>
              <div className="btn1">
              <button className="button1" onClick={() => handleIncrement(props)}>+</button>
              <button className="button1" onClick={() => handlDecrement(props)}>-</button>
              </div>
              <button className="button1" onClick={() => removeitem(props)} >Remove</button>
            </div>
          ))}
        </div>
        <div className="right">
          <div className="bill">
            <h3>Price Details</h3><hr></hr>
            {
              cart.map((item) => (
                <div className="inside">
                <p>Product : {item.title}</p>
                <p>Price : {item.price}</p>
                <p>Quantity : {item.quantity}</p>
                </div>
              ))
            }
            <p className="in">Total : {total}</p>
          </div>
        </div>
        </div>        
    );
}
