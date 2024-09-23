import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Cartslice";
import Productslice from "./Productslice";
import FavoriteSlice from "./FavoriteSlice";

const store = configureStore({
    reducer: {
        cart: Cartslice,
        product: Productslice,
        Favorite: FavoriteSlice
    }
})

export default store;