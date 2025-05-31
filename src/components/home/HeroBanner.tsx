
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="bg-car-primary text-white">
      <div className="car-container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold">
              Find Your Perfect Car in the UAE
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Browse thousands of verified used cars from trusted sellers across the Emirates.
              Find the best deals on luxury, economy, and family vehicles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/browse">
                <Button className="bg-car-accent text-black hover:brightness-110">
                  Browse Cars
                </Button>
              </Link>
              <Link to="/sell">
                <Button variant="outline" className="border-white text-black bg-white hover:bg-white/90">
                  Sell Your Car
                </Button>
              </Link>
            </div>
          </div>
          <div className="animate-fade-in hidden md:block">
            <img 
              src="/uploads/5b6d3abe-76c2-47b2-bb91-51a3cfd410f7.png" 
              alt="Car dealership lot" 
              className="rounded-lg object-cover w-full h-[400px] shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-car-primary/80 to-car-light h-16"></div>
    </div>
  );
};

export default HeroBanner;
