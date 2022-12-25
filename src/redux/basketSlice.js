import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // array of items to map  
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  // reducer tells how to perform action - addToBasket and removeFromBasket 
  // reducer ke ander ke key are actions whose value is a function taking (state,actions) as arg
  reducers: {
    // here actions contains payload inside them
    addToBasket: (state, action) => {
      // dispatch sends things here, we are passing the dispatched things in the items array,... means we dont lose previous items, action.payload is the item we want to add
      state.items = [...state.items, action.payload]

    },
    
    removeFromBasket: (state, action) => {
      //here we use filter in items array to filter the one that are not equal to action.payload.id
      let newBasket=state.items.filter(basketItem=>  basketItem.id !== action.payload.id)

      state.items=newBasket
    },
  },
});

// we are destructuring the actions here from basketSlice
export const { addToBasket, removeFromBasket } = basketSlice.actions;

//Selectores - slice, here state is there which contain a slice named basket which has items so we are selecting them
// it is a variable that can be used around to access the items
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total,item)=>total+item.price,0);



export default basketSlice.reducer;  // it is the {basketReducer} for the Store
