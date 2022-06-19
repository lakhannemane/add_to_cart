import { createSlice } from "@reduxjs/toolkit";



export const STATUS = Object.freeze({
    IDLE: "idel",
    ERROR: "error",
    LOADING: "loding"

})


const SubcategorySlice = createSlice({
    name: "subcategory",
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },
    reducers: {
        setSubcategory(state, action) {
            state.data = action.payload
            // console.log(action.payload)
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
       
    }
})

export const { setSubcategory, setStatus } = SubcategorySlice.actions;

export default SubcategorySlice.reducer;

// console.log(url)
// console.log("thunk outisde area")
export function fetchSubcategory() {
    console.log("thunk inside area")
    return async function fetchSubcategorythunk(dispatch, getstate) {
        dispatch(setStatus(STATUS.LOADING))
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json()
            // console.log(data)
            // alert(res)
            console.log("thunk error")
            dispatch(setSubcategory(data))
            console.log(data)
            dispatch(setStatus(STATUS.IDLE))


            // console.log(data)

        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUS.ERROR))

        }
        // fetchSubcategorythunk()
    }
}
