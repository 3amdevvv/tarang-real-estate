import React from "react";
import { Navigate } from "react-router-dom";
// Main Component
const redirectToEnquiry = () => {
  navigate('/enquiry-form');
};

const stats = [
  { number: "75000 +", label: "Happy Customers" },
  { number: "3500 +", label: "Designs" },
  { number: "40", label: "Experience" },
  { number: "4", label: "Cities" },
]

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100">

      
      {/* Hero Section */}
      
      <section className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center "
        style={{
          backgroundImage: `url("/public/bg-image.png")`, // Replace with actual image URL
        }}>
<div>
<div
  className="YBq5"
  style={{
    textAlign: "center",
    margin: "20px auto",
    maxWidth: "600px",
  }}
>
  <h1>
    <span
      style={{
        color: "rgb(255, 255, 255)",
        fontSize: "2.5rem",
        fontWeight: "bold",
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
      }}
    >
      Bring home beautiful interiors
    </span>
    <span
      style={{
        color: "rgb(254, 204, 42)",
        fontSize: "2.5rem",
        fontWeight: "bold",
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
        display: "block",
      }}
    >
      that fit your budget
    </span>
  </h1>
  <p
    className="text-shadow body_large"
    style={{
      color: "rgb(200, 200, 200)",
      fontSize: "1.2rem",
      textShadow: "1px 1px 3px rgba(0, 0, 0, 0.4)",
      marginTop: "10px",
    }}
  >
    Experience unmatched quality &amp; timely delivery with Livspace
  </p>
</div>
</div>




        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Login Card */}
        <div className="relative z-10 bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Designs for Every Budget
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="whatsappUpdates"
                name="whatsappUpdates"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="whatsappUpdates" className="ml-2 block text-sm text-gray-900">
                Send me updates via WhatsApp
              </label>
            </div>
            <button
              type="submit"
              onClick={redirectToEnquiry}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-md"
            >Get a free Quote
            </button>
          </form>
          <p className="text-xs text-gray-600 mt-4 text-center">
            By submitting this form, you agree to our{" "}
            <a href="#" className="text-blue-500 hover:underline">
              privacy policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 hover:underline">
              terms and conditions
            </a>.
          </p>
        </div>
      </section>
      

      {/* Features Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard icon="✨" title="Personalized designs" />
            <FeatureCard icon="🏠" title="Flat 10-year warranty" />
            <FeatureCard icon="💰" title="Transparent pricing" />
          </div>
        </div>
      </section>
      <section className="py-12 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold">{stat.number}</div>
                <p className="text-sm opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="text-4xl">{icon}</div>
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
    </div>
  );
}
