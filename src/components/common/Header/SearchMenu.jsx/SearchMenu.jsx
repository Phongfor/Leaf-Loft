import { IoIosSearch } from "react-icons/io";

function SearchMenu() {
    return (
        <div className="flex items-center gap-2 border rounded-full px-4 h-10 w-64 bg-gray-100">
            <IoIosSearch className="text-gray-500 text-xl" />
            <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent outline-none w-full"
            />
        </div>
    );
}

export default SearchMenu;