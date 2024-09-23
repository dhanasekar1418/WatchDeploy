
import { createSlice } from "@reduxjs/toolkit";
 

const cartSlice = createSlice({
    name: "cart",
    initialState: {
       cartarray  : []
    },
    reducers: {
        additem : (state, action) => {
            state.cartarray.push( {...action.payload, quantity: 1 });
        },
        incrementItem: (state,action) => {
            const selectedItem = state.cartarray.find(
                (item) => item.id === action.payload.id
            );
            selectedItem.quantity += 1;
        },
        decrementItem : (state,action) => {
            const selectedItem = state.cartarray.find(
                (item) => item.id === action.payload.id
            );
            if(selectedItem.quantity >1){
                selectedItem.quantity -= 1
            }
        },
        remove : (state,action) => {
            state.cartarray=state.cartarray.filter((i) => i.id !== action.payload.id);
        }
    },
});

export const { additem , incrementItem, decrementItem, remove} = cartSlice.actions;
export default cartSlice.reducer;