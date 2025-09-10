import React from "react";
import { Slider } from "../../components";
import UnifiedLayout from "../../components/UnifiedLayout";
import beachImg from "../../assets/beach.jpg";
import meghamalaiImg from "../../assets/meghamalai.avif";
import kanyakumariImg from "../../assets/kanyakumari.jpg";
import thanjavurImg from "../../assets/thanjavur.jpeg";
import coutrallamImg from "../../assets/coutrallam.jpg";

const sliderItems = [
  {
    image: meghamalaiImg,
    title: "Meghamalai",
    subtitle: "The High Wavy Mountains",
    description: "Discover the misty mountains and sprawling tea plantations of Meghamalai, where nature meets tranquility. This hidden gem offers breathtaking views, cool climate, and pristine landscapes perfect for nature lovers and adventure seekers.",
    highlights: ["Tea Plantations", "Misty Mountains", "Cool Climate", "Nature Trails"],
    bestTime: "October to March",
    duration: "3-4 Days",
    buttonText: "Explore Meghamalai"
  },
  {
    image: kanyakumariImg,
    title: "Kanyakumari",
    subtitle: "Where Three Oceans Meet",
    description: "Witness the spectacular sunrise and sunset at India's southernmost tip, where the Arabian Sea, Bay of Bengal, and Indian Ocean converge. Experience the spiritual significance and natural beauty of this unique coastal destination.",
    highlights: ["Sunrise/Sunset Views", "Vivekananda Rock", "Thiruvalluvar Statue", "Beach Activities"],
    bestTime: "October to March",
    duration: "2-3 Days",
    buttonText: "Visit Kanyakumari"
  },
  {
    image: thanjavurImg,
    title: "Thanjavur",
    subtitle: "The Cultural Capital",
    description: "Immerse yourself in the rich cultural heritage and magnificent temples of the ancient Chola capital. Explore UNESCO World Heritage sites, traditional arts, and architectural marvels that showcase Tamil Nadu's glorious past.",
    highlights: ["Brihadeshwara Temple", "Art Galleries", "Traditional Crafts", "Cultural Heritage"],
    bestTime: "October to March",
    duration: "2-3 Days",
    buttonText: "Discover Thanjavur"
  },
  {
    image: coutrallamImg,
    title: "Coutrallam",
    subtitle: "The Healing Waters",
    description: "Experience the refreshing waterfalls and natural beauty of Coutrallam's cascading waters. Known for its therapeutic properties and stunning landscapes, this destination offers relaxation and adventure in equal measure.",
    highlights: ["Waterfalls", "Therapeutic Baths", "Natural Beauty", "Adventure Sports"],
    bestTime: "June to September",
    duration: "1-2 Days",
    buttonText: "Explore Coutrallam"
  }
];

export const Home = () => {
  return (
    <UnifiedLayout >
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Welcome to Travella</h1>
        <p className="text-slate-400 mt-2">Discover amazing destinations and plan your perfect trip</p>
      </header>

      {/* Hero Section with Slider */}
      <section className="relative w-full overflow-hidden mb-8">
        <Slider 
          items={sliderItems}
          autoPlay={true}
          interval={2000}
          showArrows={true}
          showDots={true}
          className="w-full"
        />
      </section>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="flex flex-col gap-2 rounded-lg p-6 bg-slate-900">
          <p className="text-slate-400 text-sm font-medium">Destinations</p>
          <p className="text-3xl font-bold">50+</p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg p-6 bg-slate-900">
          <p className="text-slate-400 text-sm font-medium">Happy Travelers</p>
          <p className="text-3xl font-bold">10,000+</p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg p-6 bg-slate-900">
          <p className="text-slate-400 text-sm font-medium">Years Experience</p>
          <p className="text-3xl font-bold">15+</p>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Travella?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We make travel planning effortless and memorable with our comprehensive services and local expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="group text-center p-6 rounded-lg bg-slate-900 hover:bg-slate-800 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-white text-2xl">place</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Expert Local Guides</h3>
            <p className="text-slate-400 text-sm">Our experienced local guides know the hidden gems and best spots in every destination.</p>
          </div>
          
          <div className="group text-center p-6 rounded-lg bg-slate-900 hover:bg-slate-800 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-white text-2xl">support_agent</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">24/7 Support</h3>
            <p className="text-slate-400 text-sm">Round-the-clock assistance to ensure your journey is smooth and worry-free.</p>
          </div>
          
          <div className="group text-center p-6 rounded-lg bg-slate-900 hover:bg-slate-800 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-white text-2xl">verified</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Best Price Guarantee</h3>
            <p className="text-slate-400 text-sm">We offer competitive prices and guarantee the best value for your travel experience.</p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="flex gap-4">
          <button className="flex items-center justify-center rounded-md h-10 px-4 bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors">
            <span className="material-symbols-outlined mr-2">explore</span>
            <span className="truncate">Explore Destinations</span>
          </button>
          <button className="flex items-center justify-center rounded-md h-10 px-4 bg-slate-800 text-white text-sm font-bold hover:bg-slate-700 transition-colors">
            <span className="material-symbols-outlined mr-2">event_note</span>
            <span className="truncate">Plan My Trip</span>
          </button>
        </div>
      </div>
    </UnifiedLayout>
  );
};
