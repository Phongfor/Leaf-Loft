import { Link } from "react-router-dom";

function Menu({ content,href }) {
    return (
        <Link to={href} className="relative cursor-pointer group">
            {content}
            <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </Link>
    );
}

export default Menu;