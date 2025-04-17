import Image from "next/image";
import Link from "next/link";

export default function SelectMitten() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-8 sm:p-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Select Your Mitten</h1>
        <p className="text-lg text-gray-600">
          Choose the perfect mitten to keep your hands warm and stylish.
        </p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-3 gap-8">
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
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Select
          </button>
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
      </main>

      <footer className="mt-16 text-center text-gray-500">
        <Link href="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </footer>
    </div>
  );
}