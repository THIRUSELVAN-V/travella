import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { destinationsAPI } from "../../axious/destinationsAPI";

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
    <div className="px-6 md:px-12 lg:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-full max-w-[1080px] flex-1">


        {/* Popular Destinations */}
        <h2 className="text-[#0d141c] dark:text-white text-[22px] font-bold px-1 md:px-4 pb-3 pt-5">
          Popular Destinations
        </h2>
        {isLoading && (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-2 md:p-4">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="flex flex-col gap-3 pb-3">
                <div className="w-full aspect-video rounded-xl border border-black/10 overflow-hidden">
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 md:p-4">
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
                  className="group relative rounded-xl overflow-hidden border border-black/10 bg-white dark:bg-[#0d141c] shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => navigate(`/destinations/${encodeURIComponent(place._id || place.id || '')}`)}
                >
                  <div className="relative w-full aspect-video">
                    <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-2 left-2 flex gap-2">
                      {category ? (
                        <span className="px-2 py-1 text-xs rounded-full bg-white/90 dark:bg-black/60 text-[#0d141c] dark:text-white backdrop-blur">
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
                      <div className="absolute bottom-2 right-2 px-2 py-1 text-xs rounded-md bg-white/90 dark:bg-black/60 text-[#0d141c] dark:text-white">
                        {priceCurrency ? `${priceCurrency} ` : ""}{priceAmount}
                      </div>
                    ) : null}
                  </div>
                  <div className="p-3">
                    <h3 className="text-[#0d141c] dark:text-white text-sm font-semibold line-clamp-1 group-hover:underline">
                      {title}
                    </h3>
                    {locationText ? (
                      <p className="text-[#49739c] dark:text-gray-300 text-xs mt-0.5 line-clamp-1">{locationText}</p>
                    ) : null}
                    {description ? (
                      <p className="text-[#49739c] dark:text-gray-300 text-xs mt-1 line-clamp-2">{description}</p>
                    ) : null}
                  </div>
                </div>
              );
            })}
            {popularDestinations.length === 0 && (
              <div className="p-4 text-[#49739c] dark:text-gray-300">No destinations found.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
