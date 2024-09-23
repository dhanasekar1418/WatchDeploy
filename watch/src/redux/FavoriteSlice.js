
import { createSlice } from "@reduxjs/toolkit";
 

const FavoriteSlice = createSlice({
    name: "Favorite",
    initialState: {
       Favoritearray  : []
    },
    reducers: {
        additem1 : (state, action) => {
            state.Favoritearray.push( {...action.payload, quantity: 1 });
        },
        remove : (state,action) => {
            state.Favoritearray=state.Favoritearray.filter((i) => i.id !== action.payload.id);
        }
    },
});

export const { additem1 , remove} = FavoriteSlice.actions;
export default FavoriteSlice.reducer;