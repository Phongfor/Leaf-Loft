import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BsPentagonFill } from "react-icons/bs";

function LeftImage() {
    return (  
           <div className="relative w-full h-full bg-gradient-to-br from-green-200 to-green-100 flex flex-col justify-center items-center p-8 text-center">

                <div className="bg-lime-500 w-24 h-24 rounded-2xl flex items-center justify-center shadow-md mb-6 rotate-6">
                    <div className="w-10 h-10 border-4 border-black rounded"></div>
                </div>

                <h2 className="text-xl font-bold text-dark mb-1">
                    YOUR FUTURE AWAITS
                </h2>

                <p className="text-gray-500 text-xs">
                    Join 50k+ members shopping the future.
                </p>
                <FaStar className="absolute text-7xl text-second-light top-0 left-2"/>
                <FaHeart className="absolute text-7xl text-purple-300 bottom-0 right-2"/>
                <BsPentagonFill className="absolute text-3xl text-lime-300 left-15"/>
            </div> );
}

export default LeftImage;