import heroImg from "@assets/Images/heroImg.svg"
import Button from "../Button/Button";

function Hero() {
    return ( <section className="bg-[#EEF2E9] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

        {/* Left Content */}
        <div>
          {/* Badge */}
          <span className="inline-block bg-second-light text-gray-700 text-sm px-4 py-1 rounded-full mb-6">
             KRK NEW SUMMER DROP
          </span>

          {/* Title */}
          <h1 className="text-5xl font-bold text-dark leading-tight mb-6">
            Elevate Your <br />
            Daily Essentials
          </h1>

          {/* Description */}
          <p className="text-gray-600 max-w-md mb-8">
            Experience a curated collection of modern goods designed for your
            lifestyle. Playful design meets minimalist utility in every piece.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <Button content={"Shop Now"} isPrimary={true}/>
            <Button content={"View Collection"} isPrimary={false}/>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <div className="border-2 border-dashed border-lime-400 rounded-2xl p-4">
            <img
              src={heroImg}
              alt="hero"
              className="rounded-xl object-cover w-[380px]"
            />
          </div>
        </div>
      </div>
    </section> );
}

export default Hero;