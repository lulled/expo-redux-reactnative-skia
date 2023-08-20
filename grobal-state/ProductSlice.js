import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    data: [],
};


const productSlice =createSlice({
    name:'products',
    initialState,
    reducers:{
        fetchProducts(state,action){
            state.data = action.payload;
        }
        
    }
}
);
export const {fetchProducts} = productSlice.actions
export default productSlice.reducer;

export function getProducts(){
    return async function getProductsThunk(dispatch,getState){
        const Data = await fetch('https://fakestoreapi.com/products');// api url
        const result = await Data.json();
        dispatch(fetchProducts(result));
        //console.log('getProductsThunk_data',result)
    }
}

