import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItem: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
        cartTotalAmount: 0,
        cartTotalItem: 0
    },
    reducers: {
        add(state, action) {
            // cons

            const itemIndex = state.cartItem.findIndex(item => item.id === action.payload.id);

            if (itemIndex >= 0) {
                state.cartItem[itemIndex].cartQuantity += 1;
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItem.push(tempProduct);
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItem))

        },
        remove(state, action) {
            const nextCartItems = state.cartItem.filter(item => item.id !== action.payload.id)
            state.cartItem = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItem))
        },
        decreaseQuantity(state, action) {
            const itemIndex = state.cartItem.findIndex(item => item.id === action.payload.id)

            if (state.cartItem[itemIndex].cartQuantity > 1) {
                state.cartItem[itemIndex].cartQuantity -= 1
            } else if (state.cartItem[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItem.filter(item => item.id !== action.payload.id)
                state.cartItem = nextCartItems;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItem))
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItem))

        },
        addQuantity(state , action){
            const itemIndex = state.cartItem.findIndex(item=>item.id===action.payload.id)

            if(state.cartItem[itemIndex].cartQuantity>=1){
                state.cartItem[itemIndex].cartQuantity +=1
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItem))

        }
    }


})

export const { add, remove, decreaseQuantity ,addQuantity } = CartSlice.actions;

export default CartSlice.reducer;
