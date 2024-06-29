export const addDecimals = (num: number): string => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

interface CartItem {
  id: number;
  price: number;
  qty: number;
}

interface CartState {
  cartItems: CartItem[];
  itemsPrice: string;
  shippingPrice: string;
  taxPrice: string;
  totalPrice: string;
}

export const updateCart = (state: CartState): CartState => {
  const itemsPrice = parseFloat(state.itemsPrice);

  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  state.shippingPrice = addDecimals(itemsPrice > 100 ? 0 : 10);

  state.taxPrice = addDecimals(0.15 * itemsPrice);

  state.totalPrice = addDecimals(itemsPrice + parseFloat(state.shippingPrice) + parseFloat(state.taxPrice));

  localStorage.setItem('cart', JSON.stringify(state));

  return state;
};
