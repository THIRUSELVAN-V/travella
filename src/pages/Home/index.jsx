import React from "react";
import { Slider } from "../../components";
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
    <div className="w-full overflow-x-hidden">
      {/* Hero Section with Slider */}
      <section className="relative w-full overflow-hidden pt-12 mt-16 pb-8">
        <Slider 
          items={sliderItems}
          autoPlay={true}
          interval={2000}
          showArrows={true}
          showDots={true}
          className="w-full"
        />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-background via-accent to-background relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-foreground via-primary to-accent-foreground bg-clip-text text-transparent">
              Why Choose Travella?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              We make travel planning effortless and memorable with our comprehensive services and local expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:bg-card transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent-foreground rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">Expert Local Guides</h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">Our experienced local guides know the hidden gems and best spots in every destination.</p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:bg-card transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent-foreground rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">24/7 Support</h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">Round-the-clock assistance to ensure your journey is smooth and worry-free.</p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:bg-card transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent-foreground rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">Best Price Guarantee</h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">We offer competitive prices and guarantee the best value for your travel experience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
