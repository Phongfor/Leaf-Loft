import CategoryItem from '../CategoryItem/CategoryItem ';
import categories from '../contants'
function CategoryList() {
    return (
         <div className="grid grid-cols-6 gap-8">
      {categories.map((item, index) => (
        <CategoryItem
          key={index}
          icon={item.icon}
          title={item.title}
        />
      ))}
    </div>
    );
}

export default CategoryList;
