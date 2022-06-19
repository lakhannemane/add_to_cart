import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import SubcategorySlice from "./SubcategorySlice";

export const store = configureStore({
    reducer:{
        subcategory:SubcategorySlice,
        cart:CartSlice,
        
    }
})