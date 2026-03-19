function ProductImage({ images, mainImage, setMainImage }) {
    return (
        <div>
            {/* MAIN IMAGE */}
            <div className="mb-4">
                <img
                    src={mainImage}
                    alt=""
                    className="w-full h-[400px] object-cover rounded-xl"
                />
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-3">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt=""
                        onClick={() => setMainImage(img)}
                        className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 
                            ${mainImage === img ? "border-green-500" : "border-transparent"}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductImage;