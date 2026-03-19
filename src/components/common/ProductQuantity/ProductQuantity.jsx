function ProductQuantity({ quantity, setQuantity }) {

  return (
    <div>

      <p className="mb-2 font-medium">Quantity</p>

      <div className="flex items-center border rounded-lg">

        <button
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          className="px-4 py-2 border-r"
        >
          -
        </button>

        <span className="px-4">{quantity}</span>

        <button
          onClick={() => setQuantity(quantity + 1)}
          className="px-4 py-2 border-l"
        >
          +
        </button>

      </div>

    </div>
  );
}

export default ProductQuantity;