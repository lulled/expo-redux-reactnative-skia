import { configureStore} from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import productSlice from "./ProductSlice";


const store = configureStore({
    reducer:{
        cart:cartSlice,
        products:productSlice
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
}
);
export default store;
