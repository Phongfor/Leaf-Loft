function ProductColor({ colors, selectedColor, setSelectedColor }) {

  return (
    <div className="mt-6">

      <p className="font-medium mb-2">
        Color: {selectedColor.name}
      </p>

      <div className="flex gap-3">

        {colors.map((color, index) => (

          <div
            key={index}
            onClick={() => setSelectedColor(color)}
            className={`w-8 h-8 rounded-full cursor-pointer border-2 
              ${selectedColor.name === color.name ? "border-green-500" : "border-transparent"}`}
            style={{ backgroundColor: color.code }}
          />

        ))}

      </div>

    </div>
  );
}

export default ProductColor;