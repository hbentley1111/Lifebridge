
import React from "react";

export default function HomePage() {
  return (
    <div className="font-sans text-gray-800">
      <section className="bg-blue-50 py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Clarity and support when it matters most</h1>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          LifeBridge Support Services offers digital organization, human guidance, and peace of mind for life’s most challenging moments.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow">Get Started</button>
          <button className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-2xl shadow">Book a Demo</button>
        </div>
      </section>
    </div>
  );
}
