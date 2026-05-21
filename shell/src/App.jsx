import {
  lazy,
  Suspense,
} from 'react'

import {
  CartProvider,
  useCart,
} from './shared/store/CartContext'

import './shared/styles/global.css'

const Header =
  lazy(() => import('header/Header'))

const Footer =
  lazy(() => import('footer/Footer'))

const Cards =
  lazy(() => import('cards/Cards'))

function AppContent() {
  const {
    cart,
    addToCart,
    removeFromCart,
    incrementItem,
    decrementItem,
  } = useCart()

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Header
        cart={[...cart]}
        removeFromCart={removeFromCart}
        incrementItem={incrementItem}
        decrementItem={decrementItem}
      />
      <Cards addToCart={addToCart} />

      <Footer />
    </Suspense>
    
  )
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  )
}