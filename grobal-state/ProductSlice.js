import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    data: [],
    status:'idle'
};


const productSlice =createSlice({
    name:'products',
    initialState,
    reducers:{
        // fetchProducts(state,action){
        //     state.data = action.payload;
        // }
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.pending,(state,action)=>{
         state.status="loading";
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.status= "idle";
        })
        .addCase(getProducts.rejected,(state,action)=>{
         state.status="error"
        })
    }
}
);
export const {fetchProducts} = productSlice.actions
export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get',async ()=>{
    const Data = await fetch('https://fakestoreapi.com/products');// api url
        const result = await Data.json();
        return result;
})
//export function getProducts(){
    //return async function getProductsThunk(dispatch,getState){
      //  const Data = await fetch('https://fakestoreapi.com/products');// api url
      //  const result = await Data.json();
       // dispatch(fetchProducts(result));
        //console.log('getProductsThunk_data',result)
   // }
//}

