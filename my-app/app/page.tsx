import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Coastal Cozyhands</h1>
        <p className="text-lg text-gray-600">
          Experience the ultimate comfort and warmth with our premium hand warmers.
        </p>
      </header>

      {/* Product Section */}
      <main className="flex flex-col sm:flex-row items-center gap-12">
        {/* Product Image */}
        <div className="relative w-80 h-80">
          <Image
            src="/images/coastal-cozyhands.jpg" // Replace with your product image path
            alt="Coastal Cozyhands"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="max-w-md text-center sm:text-left">
          <h2 className="text-2xl font-semibold mb-4">Stay Warm, Stay Stylish</h2>
          <p className="text-gray-600 mb-6">
            Coastal Cozyhands are designed to keep your hands warm during chilly days while adding a touch of coastal elegance to your outfit. Perfect for outdoor adventures, cozy nights, or gifting to loved ones.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Soft and breathable fabric</li>
            <li>Available in multiple colors</li>
            <li>Eco-friendly and durable</li>
          </ul>
          <p className="text-xl font-bold text-gray-800 mb-4">$29.99</p>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
            Buy Now
          </button>
        </div>
      </main>

      {/* Choose Your Mitten Section */}
      <section className="mt-16 bg-white py-12 px-8 sm:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">Choose Your Mitten</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Mitten Option 1 */}
          <div className="text-center border rounded-lg p-4 shadow-md">
            <Image
              src="/images/mitten1.jpg" // Replace with your mitten image path
              alt="Mitten 1"
              width={150}
              height={150}
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Classic Blue</h3>
            <p className="text-gray-600 mb-4">A timeless design in a vibrant blue color.</p>
            <Link href="/select-mitten">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                Select
              </button>
            </Link>
          </div>

          {/* Mitten Option 2 */}
          <div className="text-center border rounded-lg p-4 shadow-md">
            <Image
              src="/images/mitten2.jpg" // Replace with your mitten image path
              alt="Mitten 2"
              width={150}
              height={150}
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Coastal White</h3>
            <p className="text-gray-600 mb-4">Elegant and versatile for any outfit.</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              Select
            </button>
          </div>

          {/* Mitten Option 3 */}
          <div className="text-center border rounded-lg p-4 shadow-md">
            <Image
              src="/images/mitten3.jpg" // Replace with your mitten image path
              alt="Mitten 3"
              width={150}
              height={150}
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Eco Green</h3>
            <p className="text-gray-600 mb-4">Sustainably made with a fresh green hue.</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              Select
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500">
        <p>© 2025 Coastal Cozyhands. All rights reserved.</p>
      </footer>
    </div>
  );
}