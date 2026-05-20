export default function Modal({
  children,
  onClose,
}) {
  return (
    <div className="overlay">
      <div className="modal">
        <button
          className="close"
          onClick={onClose}
        >
          X
        </button>

        {children}
      </div>
    </div>
  )
}