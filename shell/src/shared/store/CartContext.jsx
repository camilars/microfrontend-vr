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

        return {

          ...state,

          cart: state.cart.map(item =>

            item.id === action.payload.id

              ? {
                ...item,
                quantity: item.quantity + 1,
              }

              : item
          ),
        }
      }

      return {

        ...state,

        cart: [

          ...state.cart,

          {
            ...action.payload,
            quantity: 1,
          },
        ],
      }
    }

    case 'INCREMENT_ITEM': {

      return {

        ...state,

        cart: state.cart.map(item =>

          item.id === action.payload

            ? {
              ...item,
              quantity: item.quantity + 1,
            }

            : item
        ),
      }
    }

    case 'DECREMENT_ITEM': {

      const updatedCart = state.cart
        .map(item => {

          if (item.id === action.payload) {

            return {
              ...item,
              quantity: item.quantity - 1,
            }
          }

          return item
        })

        .filter(item => item.quantity > 0)

      return {
        ...state,
        cart: updatedCart,
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

  function incrementItem(id) {
    dispatch({
      type: 'INCREMENT_ITEM',
      payload: id,
    })
  }

  function decrementItem(id) {
    dispatch({
      type: 'DECREMENT_ITEM',
      payload: id,
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        removeFromCart,
        incrementItem,
        decrementItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}