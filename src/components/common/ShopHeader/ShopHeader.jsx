import { IoSparklesSharp } from "react-icons/io5";

function ShopHeader() {
  return (
    <div className="relative bg-second-light pt-24 pb-16 px-6 overflow-hidden">

      {/* decor icon */}
      <IoSparklesSharp className="absolute left-16 top-1/2 text-green-300 opacity-60" size={40} />
      <IoSparklesSharp className="absolute left-40 bottom-8 text-green-500 opacity-60" size={24} />

      <div className="max-w-6xl mx-auto">

        {/* badge */}
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
          <IoSparklesSharp size={16} />
          NEW COLLECTION 2024
        </div>

        {/* title */}
        <h1 className="text-5xl font-bold">
          Shop <span className="text-green-500 italic">Decor</span>
        </h1>

        {/* description */}
        <p className="text-gray-500 mt-3 max-w-xl">
          Abstract shapes & playful designs to elevate your modern living space.
        </p>

      </div>
    </div>
  );
}

export default ShopHeader;