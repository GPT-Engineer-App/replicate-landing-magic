import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-orange-500">YC</div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Companies</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Jobs</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Resources</a>
          </nav>
          <Button variant="default">Apply</Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Empowering Startups</h1>
          <p className="text-xl text-gray-600 mb-8">We give startups the resources they need to succeed.</p>
          <Button size="lg">Learn More</Button>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Funding</h3>
            <p className="text-gray-600">We provide seed funding to get your startup off the ground.</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Mentorship</h3>
            <p className="text-gray-600">Access to experienced mentors in various industries.</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Network</h3>
            <p className="text-gray-600">Join a community of founders and industry experts.</p>
          </Card>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-4xl font-bold text-orange-500">1000+</p>
              <p className="text-xl">Startups Funded</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500">$10B+</p>
              <p className="text-xl">Total Valuation</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500">&copy; 2024 Startup Accelerator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;