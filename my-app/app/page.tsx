"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState("fig");
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for forward, -1 for backward

  // Add this scroll function
  const scrollToSection = (id: string) => {
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
      image: "/images/poses/bike.png",
    },
    {
      id: 2,
      image: "/images/poses/driving.png",
    },
    {
      id: 3,
      image: "/images/poses/holding-hands.png",
    },
    {
      id: 4,
      image: "/images/poses/reading.png",
    },
    {
      id: 5,
      image: "/images/poses/typing.png",
    }
  ];

  const colorOptions = [
    { 
      name: "Fig", 
      value: "fig", 
      image: "/images/colours/fig.png",
      url: "https://poshmark.ca/listing/NWT-Hand-Knit-Chunky-Wool-Fingerless-Gloves-Unisex-66f8a70ff625338bab0d155f" 
    },
    { 
      name: "Light Blue", 
      value: "blue", 
      image: "/images/colours/blue.png",
      url: "https://poshmark.ca/listing/NWT-Handknit-Chunky-Wool-Fingerless-Gloves-Unisex-66f8ab94eba4c47ebbd03895" 
    },
    { 
      name: "Cranberry Red", 
      value: "red", 
      image: "/images/colours/red.png",
      url: "https://poshmark.ca/listing/NWT-Handknit-Fingerless-Chunky-Wool-Gloves-Unisex-66f8aa46eba4c45057cf7262" 
    },
    { 
      name: "Dark Blue", 
      value: "dark_blue", 
      image: "/images/colours/dark_blue.png",
      url: "https://poshmark.ca/listing/NWT-HandKnit-Chunky-Wool-Fingerless-Gloves-Unisex-66f8acd7eba4c425c4d0f09b" 
    },
    { 
      name: "Black", 
      value: "black", 
      image: "/images/colours/black.png",
      url: "https://poshmark.ca/listing/NWT-Hand-Knit-Chunky-Wool-Fingerless-Gloves-Unisex-66f8a8ba027427c8c9247ab6" 
    },
    { 
      name: "Ivory", 
      value: "white", 
      image: "/images/colours/white.png",
      url: "https://poshmark.ca/listing/NWT-Handknit-Chunky-Wool-Fingerless-Gloves-Unisex-66f89f77694d72aad9a34483" 
    },
    { 
      name: "Seaglass", 
      value: "seaglass", 
      image: "/images/colours/seaglass.png",
      url: "https://poshmark.ca/listing/NWT-Handknit-Chunky-Wool-Fingerless-Gloves-Unisex-66f89b1139a1f660a59e5742" 
    },
    { 
      name: "Oatmeal", 
      value: "oatmeal", 
      image: "/images/colours/oatmeal.png",
      url: "https://poshmark.ca/listing/Hand-Knit-Chunky-Wool-Fingerless-Gloves-Unisex-66f8a3ae963c425bc08e65e4" 
    },
    { 
      name: "Charcoal", 
      value: "charcoal", 
      image: "/images/colours/charcoal.png",
      url: "https://poshmark.ca/listing/NWT-Hand-Knit-Chunky-Wool-Fingerless-Gloves-Charcoal-718" 
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scrolling gallery effect with direction change
  useEffect(() => {
    if (isLoading || isPaused) return;

    const gallery = galleryRef.current;
    if (!gallery) return;

    const scrollAmount = 1;
    const scrollSpeed = 30;

    const scrollInterval = setInterval(() => {
      // Check if we've reached either end
      if (gallery.scrollLeft <= 0) {
        setScrollDirection(1); // Switch to forward
      } else if (gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth) {
        setScrollDirection(-1); // Switch to backward
      }

      // Scroll in the current direction
      gallery.scrollLeft += scrollAmount * scrollDirection;
    }, scrollSpeed);

    return () => clearInterval(scrollInterval);
  }, [isLoading, isPaused, scrollDirection]);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const getSelectedImage = () => {
    const selected = colorOptions.find(option => option.value === selectedColor);
    return selected ? selected.image : "/images/coastal-cozyhands.jpg";
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#2f62a1] text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white border-opacity-75 mb-4"></div>
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
            opacity: 0,
            zIndex: 0,
          }}
        ></div>

        {/* Content Container */}
        <div className="relative z-10 backdrop-blur-sm bg-white/30 text-gray-800 p-8 sm:p-10 rounded-2xl shadow-2xl border border-black/20 max-w-3xl w-full mx-4 animate-fade-in transform transition-all hover:scale-[1.01]">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 font-serif">Coastal Cozy Hands</h1>
          <p className="text-xl sm:text-2xl mb-8 leading-relaxed">
            Keep your hands warm and stylish with our premium hand warmers.
          </p>
          <button 
            onClick={() => scrollToSection('product-section')}
            className="bg-[#1878f0] hover:bg-blue-700 text-white py-4 px-12 rounded-lg font-bold text-xl transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
          >
            Learn More
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Coastal Cozy Hands</h2>
            
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
                    style={{ backgroundColor: color.value === 'fig' ? '#d597b3' : color.value === 'blue' ? '#93c5fd' : color.value === 'red' ? '#bf4545' 
                      : color.value === 'dark_blue' ? '#113242' : color.value === 'black' ? '#000000' : color.value === 'seaglass' ? '#9da9b0' : color.value === 'oatmeal' ? '#a89a94' : color.value === 'charcoal' ? '#29292e' :'#f2f2f2' }}
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
              {/* <p className="text-lg text-gray-700 mb-2">
                <span className="font-bold">Note:</span> Not for sale, but you can like and save for later!
              </p> */}
              <p className="text-lg text-gray-700">
                Use code <span className="font-bold bg-blue-100 px-2 py-1 rounded">CALLASTREASURES</span> for $15 off your first Poshmark purchase.
              </p>
            </div>

            <button 
              onClick={() => window.open(
                colorOptions.find(c => c.value === selectedColor)?.url || "https://poshmark.ca/default", 
                "_blank"
              )}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
            >
              Order Now!
            </button>
          </div>
        </div>
      </main>

      {/* Gallery Section with Bouncing Scroll */}
      <section 
        id="choose-mitten" 
        className="bg-[#cfdbfc] py-16 px-4 sm:px-8 border-b border-black"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-7xl mx-auto">
          {/* <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 animate-fade-in font-serif">
            Gallery
          </h2> */}
          
          <div 
            ref={galleryRef}
            className="flex overflow-x-auto scrollbar-hide space-x-8 py-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="flex-shrink-0 w-100 bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative w-full aspect-square">
                  <Image  
                    src={product.image}
                    alt="Coastal Cozyhands in use"
                    width={400}
                    height={400}
                    className="rounded-2xl object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={() => {
                if (galleryRef.current) {
                  galleryRef.current.scrollLeft -= 300;
                  setScrollDirection(-1); // Force backward direction
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
                  setScrollDirection(1); // Force forward direction
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

      <footer className="bg-[#2a6dbf] text-white text-center py-12 animate-fade-in">
        <p className="text-xl font-bold">© 2025 Coastal Cozy Hands. All rights reserved.</p>
      </footer>
    </div>
  );
}