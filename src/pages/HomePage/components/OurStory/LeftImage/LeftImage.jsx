import { FaBuilding } from "react-icons/fa";


function LeftImage() {
    return (  
        <div className="relative w-[520px]">
          <div className="bg-white p-10 rounded-3xl shadow-sm">
            <div className="border-2 border-dashed border-second-light rounded-2xl py-30 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <FaBuilding className="w-20 h-20 mb-5 text-second-light mx-auto" />
                <p className="text-sm tracking-widest">
                  OUR CREATIVE STUDIO SPACE
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -top-6 -right-6 w-28 h-28 border-4 border-lime-300 rounded-full opacity-50"></div>
          <div className="absolute -bottom-6 -right-2 w-14 h-14 border-4 border-gray-300 rounded-full opacity-50"></div>
          <div className="absolute top-6 left-6 w-10 h-10 bg-lime-500 rounded-full"></div>

        </div> );
}

export default LeftImage;