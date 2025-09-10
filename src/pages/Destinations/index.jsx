import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { destinationsAPI } from "../../axious/destinationsAPI";
import UnifiedLayout from "../../components/UnifiedLayout";

export default function Destinations() {
  const navigate = useNavigate();
  const [popularDestinations, setPopularDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isActive = true;
    const fetchDestinations = async () => {
      setIsLoading(true);
      setErrorMessage("");
      try {
        const data = await destinationsAPI.getAll();
        // Support either {data: [...]} or direct array
        const list = Array.isArray(data) ? data : data?.data || [];
        if (isActive) {
          setPopularDestinations(list);
        }
      } catch (error) {
        if (isActive) {
          setErrorMessage(typeof error === "string" ? error : (error?.message || "Failed to load destinations"));
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };
    fetchDestinations();
    return () => {
      isActive = false;
    };
  }, []);

  return (
    <UnifiedLayout>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Popular Destinations</h1>
        <p className="text-slate-400 mt-2">Discover amazing places to visit</p>
      </header>
        {isLoading && (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 mt-4">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="flex flex-col gap-3 pb-3 ">
                <div className="w-full aspect-video rounded-xl border border-black/10 overflow-hidden ">
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        )}
        {!isLoading && errorMessage && (
          <div className="p-4 text-red-600 dark:text-red-400">{errorMessage}</div>
        )}
        {!isLoading && !errorMessage && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {popularDestinations.map((place, index) => {
              const imageUrl = place.image || place.photo || place.coverImage || (place.images && place.images[0] && place.images[0].url) || "";
              const title = place.name || place.title || "Untitled";
              const description = place.desc || place.description || "";
              const locationText = [place.city, place.country].filter(Boolean).join(", ");
              const category = place.category;
              const rating = place.rating;
              const priceAmount = place.price && place.price.amount;
              const priceCurrency = place.price && place.price.currency;
              const isFeatured = !!place.featured;
              return (
                <div
                  key={index}
                  className="group relative rounded-lg overflow-hidden bg-slate-900 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => navigate(`/destinations/${encodeURIComponent(place._id || place.id || '')}`)}
                >
                  <div className="relative w-full aspect-video">
                    <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-2 left-2 flex gap-2">
                      {category ? (
                        <span className="px-3 py-1 text-xs rounded-full bg-white/90 text-slate-900 backdrop-blur">
                          {category}
                        </span>
                      ) : null}
                      {isFeatured ? (
                        <span className="px-2 py-1 text-xs rounded-full bg-yellow-400/90 text-black font-medium">Featured</span>
                      ) : null}
                    </div>
                    {typeof rating === "number" ? (
                      <div className="absolute top-2 right-2 px-2 py-1 text-xs rounded-full bg-black/60 text-white flex items-center gap-1">
                        <span>★</span>
                        <span>{rating.toFixed(1)}</span>
                      </div>
                    ) : null}
                    {priceAmount ? (
                      <div className="absolute bottom-2 right-2 px-2 py-1 text-xs rounded-md bg-white/90 text-slate-900">
                        {priceCurrency ? `${priceCurrency} ` : ""}{priceAmount}
                      </div>
                    ) : null}
                  </div>
                  <div className="p-4">
                    <h3 className="text-white text-lg font-semibold line-clamp-1 group-hover:underline">
                      {title}
                    </h3>
                    {locationText ? (
                      <p className="text-slate-400 text-sm mt-1 line-clamp-1">{locationText}</p>
                    ) : null}
                    {description ? (
                      <p className="text-slate-400 text-sm mt-2 line-clamp-2">{description}</p>
                    ) : null}
                  </div>
                </div>
              );
            })}
            {popularDestinations.length === 0 && (
              <div className="p-4 text-slate-400">No destinations found.</div>
            )}
          </div>
        )}
    </UnifiedLayout>
  );
}
