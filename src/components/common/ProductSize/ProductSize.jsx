

function ProductSize({ sizes, selectedSize, setSelectedSize }) {

  return (
    <div>

      <p className="mb-2 font-medium">Size</p>

      <select
        value={selectedSize}
        onChange={(e) => setSelectedSize(e.target.value)}
        className="border rounded-lg px-4 py-2"
      >

        {sizes.map((size, index) => (
          <option key={index} value={size}>
            {size}
          </option>
        ))}

      </select>

    </div>
  );
}

export default ProductSize;