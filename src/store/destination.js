import { create } from "zustand";

export const useTravelStore = create((set) => ({
    upcomingTrips: [ 
        { id: 1, city: "Aspen", dates: "Dec 15 – Dec 20", img: "https://picsum.photos/id/1018/300/200" },
        { id: 2, city: "Cancun", dates: "Jan 5 – Jan 10", img: "https://picsum.photos/id/1015/300/200" },
    ],
    popularDestinations: [
        { id: 1, city: "Paris", tagline: "City of Lights", img: "https://picsum.photos/id/1011/300/200" },
        { id: 2, city: "Tokyo", tagline: "Vibrant Metropolis", img: "https://picsum.photos/id/1012/300/200" },
        { id: 3, city: "Rome", tagline: "Eternal City", img: "https://picsum.photos/id/1013/300/200" },
        { id: 4, city: "New York", tagline: "The Big Apple", img: "https://picsum.photos/id/1014/300/200" },
    ],
    addTrip: (trip) => set((state) => ({ upcomingTrips: [...state.upcomingTrips, trip] })),
    addDestination: (destination) => set((state) => ({ popularDestinations: [...state.popularDestinations, destination] })),
}));