
import { Button } from "@/components/ui/button";
import CarCard, { CarListing } from "@/components/cars/CarCard";
import { Link } from "react-router-dom";
import { useCarListings } from "@/hooks/useCarListings";

const FeaturedListings = () => {
  // Use shared car listings hook - will get first 6 items from cache
  const { data: allCars = [], isLoading: loading } = useCarListings();
  
  // Get first 6 cars for featured section
  const featuredCars = allCars.slice(0, 6);

  return (
    <section className="py-12 bg-white">
      <div className="car-container">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="section-title">Featured Listings</h2>
            <p className="section-subtitle">Discover our latest vehicle listings</p>
          </div>
          <Link to="/browse">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        
        {loading ? (
          <div className="text-center py-12">
            <p>Loading listings...</p>
          </div>
        ) : featuredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No listings yet</h3>
            <p className="text-muted-foreground mb-6">Be the first to list your car for sale</p>
            <Link to="/sell">
              <Button>Sell Your Car</Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedListings;
