export default function Modal({
  children,
  onClose,
}) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        {children}
        
        <button
          className="close"
          onClick={onClose}
        >
          X
        </button>

      </div>
    </div>
  )
}