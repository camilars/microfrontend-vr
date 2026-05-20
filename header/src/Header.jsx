import { useState } from 'react'
import Modal from './shared/components/Modal'


export default function Header({
  cart,
  removeFromCart,
}) {
  const [open, setOpen] = useState(false)

  const total = (cart || []).reduce(
    (acc, item) => acc + item.price,
    0
  )

  return (
    <header className="header">
      <h1>Micro Front-End Store</h1>

      <button onClick={() => setOpen(true)}>
        Carrinho ({cart || [].length})
      </button>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <h2>Carrinho</h2>

          {cart || [].length === 0 && (
            <p>Carrinho vazio</p>
          )}

          {(cart || []).map(item => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 12,
              }}
            >
              <span>{item.title}</span>

              <button
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                remover
              </button>
            </div>
          ))}

          <h3
            style={{ marginTop: 20 }}
          >
            Total: R$ {total}
          </h3>
        </Modal>
      )}
    </header>
  )
}