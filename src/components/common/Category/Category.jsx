import CategoryList from "./CategoryList/CategoryList";

function Category() {
    return (<section className="bg-third py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-dark">
          Shop by Category
        </h2>

        <p className="text-dark mt-2 mb-10">
          Find exactly what you're looking for
        </p>

        <CategoryList />

      </div>

    </section> );
}

export default Category;