"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

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
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed text-gray-800"
      style={{
        backgroundImage: "url('/images/holding-hands.png')", // Replace with the correct path to your image
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(255, 255, 255, 0.3)", // Adds a faint white overlay
      }}
    >
      {/* Hero Section */}
      <header className="relative bg-blue-600 text-white text-center py-32 bg-opacity-90">
        <h1 className="text-7xl font-extrabold mb-6 animate-fade-in">Coastal Cozyhands</h1>
        <p className="text-2xl max-w-4xl mx-auto animate-fade-in delay-200">
          Keep your hands warm and stylish with our premium hand warmers, inspired by the beauty of the coast.
        </p>
        <Link href="#choose-mitten">
          <button className="mt-8 bg-white text-blue-600 py-4 px-12 rounded-lg font-bold text-xl hover:bg-gray-100 transition shadow-2xl hover:scale-110">
            Shop Now
          </button>
        </Link>
      </header>

      {/* Product Section */}
      <main className="py-24 px-12 sm:px-32">
        <div className="flex flex-col sm:flex-row items-center gap-16">
          {/* Product Image */}
          <div className="relative w-96 h-96 animate-fade-in">
            <Image
              src="/images/coastal-cozyhands.jpg"
              alt="Coastal Cozyhands"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          {/* Product Details */}
          <div className="max-w-lg text-center sm:text-left animate-fade-in delay-300">
            <h2 className="text-5xl font-bold mb-6 text-blue-600">Stay Warm, Stay Stylish</h2>
            <p className="text-xl text-gray-600 mb-8">
              Coastal Cozyhands are designed to keep your hands warm during chilly days while adding a touch of coastal elegance to your outfit. Perfect for outdoor adventures, cozy nights, or gifting to loved ones.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-600 mb-8">
              <li>Soft and breathable fabric</li>
              <li>Available in multiple colors</li>
              <li>Eco-friendly and durable</li>
            </ul>
            <p className="text-3xl font-bold text-gray-800 mb-6">$29.99</p>
            <button className="bg-blue-600 text-white py-3 px-10 rounded-lg text-xl font-bold hover:bg-blue-700 transition shadow-2xl hover:scale-110">
              Buy Now
            </button>
          </div>
        </div>
      </main>

      {/* Choose Your Mitten Section */}
      <section id="choose-mitten" className="mt-24 bg-white py-16 px-12 sm:px-32 bg-opacity-90">
        <h2 className="text-6xl font-bold text-center mb-12 text-blue-600 animate-fade-in">Choose Your Mitten</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {/* Mitten Option 1 */}
          <div className="text-center border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition hover:scale-110 animate-fade-in">
            <Image
              src="/images/mitten1.jpg"
              alt="Mitten 1"
              width={200}
              height={200}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Classic Blue</h3>
            <p className="text-lg text-gray-600 mb-6">A timeless design in a vibrant blue color.</p>
            <Link href="/select-mitten">
              <button className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-bold hover:bg-blue-700 transition shadow-lg hover:scale-110">
                Select
              </button>
            </Link>
          </div>

          {/* Mitten Option 2 */}
          <div className="text-center border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition hover:scale-110 animate-fade-in delay-200">
            <Image
              src="/images/mitten2.jpg"
              alt="Mitten 2"
              width={200}
              height={200}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Coastal White</h3>
            <p className="text-lg text-gray-600 mb-6">Elegant and versatile for any outfit.</p>
            <Link href="/select-mitten">
              <button className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-bold hover:bg-blue-700 transition shadow-lg hover:scale-110">
                Select
              </button>
            </Link>
          </div>

          {/* Mitten Option 3 */}
          <div className="text-center border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition hover:scale-110 animate-fade-in delay-400">
            <Image
              src="/images/mitten3.jpg"
              alt="Mitten 3"
              width={200}
              height={200}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Eco Green</h3>
            <p className="text-lg text-gray-600 mb-6">Sustainably made with a fresh green hue.</p>
            <Link href="/select-mitten">
              <button className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-bold hover:bg-blue-700 transition shadow-lg hover:scale-110">
                Select
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 bg-blue-600 text-white text-center py-12 animate-fade-in">
        <p className="text-xl font-bold">© 2025 Coastal Cozyhands. All rights reserved.</p>
      </footer>
    </div>
  );
}