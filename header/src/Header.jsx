import { useState } from 'react'
import Modal from './shared/components/Modal'
import "./Header.css"

export default function Header({
  cart,
  removeFromCart,
}) {
  const [open, setOpen] = useState(false)
  console.log("HEADER CART", cart)

  const cartCount = cart?.length || 0

  const total = (cart || []).reduce(
    (acc, item) => acc + item.price,
    0
  )

  const totalPrice =
    Number(total).toFixed(2)

  return (
    <header className="header">
      <h1>Minha Loja</h1>

      <button onClick={() => setOpen(true)}>
        Carrinho (
        <span className="cart-count">
          {cartCount}
        </span>
        )
      </button>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <h2>Carrinho</h2>

          {(cart || []).length === 0 && (
            <p>Carrinho vazio</p>
          )}

          {(cart || []).map(item => (
            <div key={item.id} className="cart-item">
              <img
                src={item.thumbnail}
                alt={item.title}
                width="60"
              />
              <div>
                <h4>{item.title}</h4>

                <p>
                  R$ {item.price}
                </p>
              </div>

              <button onClick={() => removeFromCart(item.id)}>remover</button>
            </div>
          ))}

          <h3 className="total-price">
            Total: R$
            <span>
              {totalPrice}
            </span>
          </h3>
        </Modal>
      )}
    </header>
  )
}