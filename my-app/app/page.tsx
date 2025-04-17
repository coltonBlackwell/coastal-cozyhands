"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState("fig");
  const galleryRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Add this scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Product data
  const products = [
    {
      id: 1,
      name: "Classic Blue",
      image: "/images/mitten1.jpg",
      color: "blue",
      description: "A timeless design in a vibrant blue color."
    },
    {
      id: 2,
      name: "Coastal White",
      image: "/images/mitten2.jpg",
      color: "white",
      description: "Elegant and versatile for any outfit."
    },
    {
      id: 3,
      name: "Eco Green",
      image: "/images/mitten3.jpg",
      color: "green",
      description: "Sustainably made with a fresh green hue."
    },
    {
      id: 4,
      name: "Sunset Pink",
      image: "/images/mitten4.jpg",
      color: "pink",
      description: "Soft pink reminiscent of coastal sunsets."
    },
    {
      id: 5,
      name: "Sand Beige",
      image: "/images/mitten5.jpg",
      color: "beige",
      description: "Neutral tone that matches everything."
    }
  ];

  const colorOptions = [
    { name: "Fig", value: "fig", image: "/images/colours/fig.png" },
    { name: "Blue", value: "blue", image: "/images/colours/blue.png" },
    { name: "Red", value: "red", image: "/images/colours/red.png" },
    { name: "Dark Blue", value: "dark_blue", image: "/images/colours/dark_blue.png" },
    { name: "Black", value: "black", image: "/images/colours/black.png" },
    { name: "White", value: "white", image: "/images/colours/white.png" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scrolling gallery effect
  useEffect(() => {
    if (isLoading || isPaused) return;

    const gallery = galleryRef.current;
    if (!gallery) return;

    const scrollAmount = 1;
    const scrollSpeed = 30;

    const scrollInterval = setInterval(() => {
      if (gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth) {
        gallery.scrollLeft = 0;
      } else {
        gallery.scrollLeft += scrollAmount;
      }
    }, scrollSpeed);

    return () => clearInterval(scrollInterval);
  }, [isLoading, isPaused]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const getSelectedImage = () => {
    const selected = colorOptions.find(option => option.value === selectedColor);
    return selected ? selected.image : "/images/coastal-cozyhands.jpg";
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blue-600 text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white border-opacity-75 mb-4"></div>
          <p className="text-2xl font-bold">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-gray-800">
      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center text-white text-center min-h-screen overflow-hidden border-b border-black">
        {/* Fading Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/poses/holding-hands.png')",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(128, 170, 237, 0.2)",
            animation: "fadeIn 2s ease-in-out forwards",
            opacity: 0, // Start with opacity 0
            zIndex: 0,
          }}
        ></div>

        {/* Content Container */}
        <div className="relative z-10 backdrop-blur-sm bg-white/30 text-gray-800 p-8 sm:p-10 rounded-2xl shadow-2xl border border-black/20 max-w-3xl w-full mx-4 animate-fade-in transform transition-all hover:scale-[1.01]">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 font-serif">Coastal Cozyhands</h1>
          <p className="text-xl sm:text-2xl mb-8 leading-relaxed">
            Keep your hands warm and stylish with our premium hand warmers, inspired by the beauty of the coast.
          </p>
          {/* Modified Shop Now button */}
          <button 
            onClick={() => scrollToSection('product-section')}
            className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-12 rounded-lg font-bold text-xl transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
          >
            Shop Now
          </button>
        </div>
      </header>

      {/* Product Section */}
      <main id="product-section" className="py-24 px-4 sm:px-8 lg:px-32 border-b border-black bg-gradient-to-b from-blue-50 to-white">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
          {/* Product Image */}
          <div className="relative w-full lg:w-1/2 aspect-square max-w-xl animate-fade-in">
            <Image
              src={getSelectedImage()}
              alt="Coastal Cozyhands"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl shadow-2xl border-4 border-white"
            />
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2 max-w-2xl animate-fade-in delay-300 bg-white p-8 rounded-3xl shadow-xl border border-blue-100">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600 font-serif">Coastal Cozyhands</h2>
            
            <div className="mb-6 flex justify-between items-center">
              <div>
                <p className="text-3xl font-bold text-blue-600">C$17</p>
                <p className="text-lg line-through text-gray-400">was C$25</p>
              </div>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-bold">New With Tags</span>
            </div>

            {/* Color Picker */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-700 mb-3">Color: {colorOptions.find(c => c.value === selectedColor)?.name}</h3>
              <div className="flex flex-wrap gap-2">
                {colorOptions.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => handleColorSelect(color.value)}
                    className={`w-10 h-10 rounded-full border-2 ${selectedColor === color.value ? 'border-blue-600' : 'border-gray-300'} transition-all`}
                    style={{ backgroundColor: color.value === 'fig' ? '#d597b3' : color.value === 'blue' ? '#93c5fd' : color.value === 'red' ? '#bf4545' : color.value === 'dark_blue' ? '#113242' : color.value === 'black' ? '#000000' : '##ffffff' }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              These hand-knit, chunky wool fingerless gloves are designed to keep your hands warm on chilly days. The perfect blend of comfort and style, ideal for outdoor activities or lounging indoors. Available in six beautiful colors.
            </p>

            <div className="mb-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-lg text-gray-600">Unisex design</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-lg text-gray-600">80% Acrylic, 20% Wool (Machine washable)</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-lg text-gray-600">Stretchable to fit most hands (4" width × 7" length)</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-lg text-gray-600">Perfect for biking, gardening, walking, or indoor use</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-lg text-gray-600">Great for arthritic hands</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl mb-8">
              <p className="text-lg text-gray-700 mb-2">
                <span className="font-bold">Note:</span> Not for sale, but you can like and save for later!
              </p>
              <p className="text-lg text-gray-700">
                Use code <span className="font-bold bg-blue-100 px-2 py-1 rounded">CALLASTREASURES</span> for $15 off your first Poshmark purchase.
              </p>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Like and Save for Later
            </button>
          </div>
        </div>
      </main>

      {/* Choose Your Mitten Section */}
      <section 
        id="choose-mitten" 
        className="bg-white py-16 px-4 sm:px-8 border-b border-black"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-blue-600 animate-fade-in font-serif">
            Gallery
          </h2>
          
          {/* Auto-scrolling Gallery */}
          <div 
            ref={galleryRef}
            className="flex overflow-x-auto scrollbar-hide space-x-8 py-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="flex-shrink-0 w-80 bg-white border border-gray-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative w-full aspect-square mb-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-blue-600">{product.name}</h3>
                <p className="text-lg text-gray-600 mb-6">{product.description}</p>
                <Link href="/select-mitten">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg hover:scale-105 active:scale-95">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Manual Navigation (optional) */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={() => {
                if (galleryRef.current) {
                  galleryRef.current.scrollLeft -= 300;
                }
              }}
              className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => {
                if (galleryRef.current) {
                  galleryRef.current.scrollLeft += 300;
                }
              }}
              className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-12 animate-fade-in">
        <p className="text-xl font-bold">© 2025 Coastal Cozyhands. All rights reserved.</p>
      </footer>
    </div>
  );
}