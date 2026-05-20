import {
  useEffect,
  useState,
} from 'react'

import {
  getProducts,
} from './shared/services/products'

export default function Cards({
  addToCart,
}) {
  const [products, setProducts] = useState([])

  const [loading, setLoading] =
    useState(true)

  const [error, setError] =
    useState(false)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts()

        setProducts(data)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return <p>Carregando produtos...</p>
  }

  if (error) {
    return <p>Erro ao carregar produtos</p>
  }

  return (
    <main>
      <section className="products-grid">
        {products.map(product => (
          <article
            key={product.id}
            className="card"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
            />

            <h3>{product.title}</h3>

            <p>
              R$ {product.price}
            </p>

            <button
              onClick={() =>
                addToCart(product)
              }
            >
              Adicionar
            </button>
          </article>
        ))}
      </section>
    </main>
  )
}