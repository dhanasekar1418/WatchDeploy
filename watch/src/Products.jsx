import Footer from "./Footer";
import { constants } from "./constants.js";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { additem } from "./redux/Cartslice.js";
import { additem1 } from "./redux/FavoriteSlice.js";
import { Link } from "react-router-dom";
import Toolbar from "./Toolbar.jsx";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import { setproducts } from "./redux/Productslice.js";

export default function Products(props) {
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    const res = await axios.get("https://ecommerce-faaq.onrender.com/products");
    console.log("===> res", res.data);
    dispatch(setproducts(res.data));
  }
  const cartitem = useSelector((state) => state.cart.cartarray);
  const Items = useSelector((state) => state.product.items);
  const [favStatuses, setFavStatuses] = useState(
    Items.reduce((acc, item) => {
      acc[item.id] = false;
      return acc;
    }, {})
  );
  const dispatch = useDispatch();

  const isitemincart = (props) => cartitem.some((i) => i.id === props.id);

  const addToCart = (item) => {
    dispatch(additem(item));
    toast.success("Added successfully");
  };

  const toggleFavorite = (item) => {
    const newFavStatus = !favStatuses[item.id];
    setFavStatuses((prevStatuses) => ({
      ...prevStatuses,
      [item.id]: newFavStatus,
    }));

    if (newFavStatus) {
      dispatch(additem1(item));
      toast.success("Added to your Favorite");
    }
  };

  return (
    <>
      <div className="over">
        <div className="banner">
          <img src="https://www.sonatawatches.in/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dw49f49326/images/Category%20Banners/plp-shopfor-men-desktop.jpg" />
        </div>
        {Items.slice(0, 16).map((props) => (
          <div className="product-container" key={props.id}>
            <img
              src={favStatuses[props.id] ? "favoritered.png" : "favorite.png"}
              onClick={() => toggleFavorite(props)}
              style={{
                height: "35px",
                padding: "2px",
                width: "35px",
                alignItems: "flex-end",
                cursor: "pointer",
              }}
            />
            <img
              src={props.image_url}
              alt="product"
              className="product-image"
            />
            <p className="product-price">₹{props.price}</p>
            <p className="product-description">{props.description}</p>
            
            {isitemincart(props) ? (
              <Link to="/cart">
                <button className="add-to-cart-button">Go to Cart</button>
              </Link>
            ) : (
              <button
                className="add-to-cart-button"
                onClick={() => addToCart(props)}
              >
                Add to Bag
              </button>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
