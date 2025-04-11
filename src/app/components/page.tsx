"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./shared/Sidebar";
import ComponentDetail from "./shared/ComponentDetail";
import categories from "../data/categories";

export default function ComponentLibrary() {
  const [activeCategory, setActiveCategory] = useState("text");
  const [activeComponent, setActiveComponent] = useState("typewriter");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            UI Component Library
          </h1>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar for Component Navigation */}
        <Sidebar
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              About This Library
            </h2>
            <p className="text-gray-600">
              Welcome to our component library! Here you&apos;ll find a
              collection of ready-to-use animated components for your Next.js,
              React, and Tailwind CSS projects. Browse components by category in
              the sidebar.
            </p>
          </div>

          {/* Component Detail View */}
          <ComponentDetail
            categories={categories}
            categoryId={activeCategory}
            componentId={activeComponent}
          />
        </main>
      </div>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <p>
            &copy; {new Date().getFullYear()} Component Library. All rights
            reserved.
          </p>
          <p className="mt-2">
            Built with React, TypeScript, Next.js, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
