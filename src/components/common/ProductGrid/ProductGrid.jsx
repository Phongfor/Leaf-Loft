import { useContext } from "react";
import { FilterContext } from "@contexts/FilterProvider";
import ShopProductCard from "@components/common/ShopProductCard/ShopProductCard";
import GridLayout from "@components/layout/GridLayout/GridLayout";
import products from "@components/common/ShopProductCard/contants";

const ITEMS_PER_PAGE = 8;

function ProductGrid() {
  const { category, brand, price, currentPage } =
    useContext(FilterContext);

  const filteredProducts = products.filter((p) => {
    const matchCategory =
      category === "All Items" || p.category === category;

    const matchBrand =
      brand === "all" || p.brand === brand;

    const matchPrice =
      price === "all" ||
      (price === "low" && p.price < 50) ||
      (price === "medium" && p.price >= 50 && p.price <= 100) ||
      (price === "high" && p.price > 100);

    return matchCategory && matchBrand && matchPrice;
  });

  const offset = currentPage * ITEMS_PER_PAGE;

  const currentProducts = filteredProducts.slice(
    offset,
    offset + ITEMS_PER_PAGE
  );

  return (
    <GridLayout>
      {currentProducts.map((p) => (
        <ShopProductCard key={p.id} product={p} />
      ))}
    </GridLayout>
  );
}

export default ProductGrid;