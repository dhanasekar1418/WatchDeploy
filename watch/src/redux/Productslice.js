import { createSlice } from "@reduxjs/toolkit";
import { constants } from "../constants";


const Productslice = createSlice({
    name: "product",
    initialState: {
        items : []
    },
    reducers: {
        setproducts: (state,action)=>{
            state.items = action.payload;
        },
        searchProduct:(state,action) => {
            if (action.payload==""){
                state.items = constants;
            }
            else {
                state.items = constants.filter((item) =>item.name.toLowerCase().includes(action.payload.toLowerCase()));
            }
        },
    },
});

export default Productslice.reducer
export const { setproducts,searchProduct} = Productslice.actions;