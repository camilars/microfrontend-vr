import {
  createContext,
  useContext,
  useReducer,
} from 'react'

const CartContext = createContext()

const initialState = {
  cart: [],
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const exists = state.cart.find(
        item => item.id === action.payload.id
      )

      if (exists) {
        return state
      }

      return {
        ...state,
        cart: [...state.cart, action.payload],
      }
    }

    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        cart: state.cart.filter(
          item => item.id !== action.payload
        ),
      }
    }

    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  )

  function addToCart(product) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    })
  }

  function removeFromCart(id) {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id,
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}