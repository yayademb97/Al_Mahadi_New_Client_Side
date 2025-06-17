
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems: (state, action) => {
      const newItem = action.payload
      const existingItem = state.cartItems
      .find((item) => item.id === newItem.id)

      state.totalQuantity++
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          image: newItem.imgUrl,
          price: newItem.price,
          qunatity: 1,
          totalPrice: newItem.price,
        })
      }

      else{
        existingItem.qunatity++
        existingItem.totalPrice = Number(existingItem.totalPrice) + Number(existingItem.price)
      }

      state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.qunatity))


      
    }
  }
});

export const cartActions = cartSlice.actions

export default cartSlice.reducer