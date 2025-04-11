"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Menu,
  Code,
  Layers,
  Package,
  Search,
  ChevronRight,
  X,
} from "lucide-react";
import Sidebar from "./shared/Sidebar";
import ComponentDetail from "./shared/ComponentDetail";
import categories from "../data/categories";
import Link from "next/link";

export default function ComponentLibrary() {
  const [activeCategory, setActiveCategory] = useState("text");
  const [activeComponent, setActiveComponent] = useState("typewriter");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  interface SearchResult {
    categoryId: string;
    categoryName: string;
    components: { id: string; name: string; description: string }[];
  }

  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get current component details for breadcrumb
  const currentCategory = categories.find((cat) => cat.id === activeCategory);
  const currentComponent = currentCategory?.components.find(
    (comp) => comp.id === activeComponent
  );

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setIsSearching(false);
      setSearchResults([]);
      return;
    }

    setIsSearching(true);

    const query = searchQuery.toLowerCase().trim();
    const results: SearchResult[] = [];

    // Search through all categories and their components
    categories.forEach((category) => {
      const matchingComponents = category.components.filter(
        (component) =>
          component.name.toLowerCase().includes(query) ||
          component.description.toLowerCase().includes(query)
      );

      if (matchingComponents.length > 0) {
        results.push({
          categoryId: category.id,
          categoryName: category.name,
          components: matchingComponents,
        });
      }
    });

    setSearchResults(results);
  }, [searchQuery]);

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
    setIsSearching(false);
    setSearchResults([]);
  };

  // Calculate component statistics
  const totalComponents = useMemo(() => {
    return categories.reduce(
      (sum, category) => sum + category.components.length,
      0
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header
        className={`bg-white sticky top-0 z-50 transition-all duration-200 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-10 h-10 rounded-lg flex items-center justify-center">
                <Code className="text-white" size={20} />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Kinetic UI
              </h1>
            </div>
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4 mt-4 md:mt-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-10 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={16}
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            <Link
              href="/"
              className="px-3 py-2 text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors"
            >
              Home
            </Link>
            <a
              href="/docs"
              className="px-3 py-2 text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors"
            >
              Docs
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg text-sm font-medium transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Breadcrumb navigation */}
        <div className="container mx-auto px-4 py-2 flex items-center text-sm text-gray-500 border-t border-gray-100">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="mx-2" />
          <a
            href="/components"
            className="hover:text-blue-600 transition-colors"
          >
            Components
          </a>
          {!isSearching && currentCategory && (
            <>
              <ChevronRight size={14} className="mx-2" />
              <span className="text-blue-600 font-medium">
                {currentCategory.name}
              </span>
            </>
          )}
          {!isSearching && currentComponent && (
            <>
              <ChevronRight size={14} className="mx-2" />
              <span className="text-gray-700">{currentComponent.name}</span>
            </>
          )}
          {isSearching && (
            <>
              <ChevronRight size={14} className="mx-2" />
              <span className="text-blue-600 font-medium">Search Results</span>
            </>
          )}
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar for Component Navigation or Search Results */}
        {isSearching ? (
          <div className="w-64 bg-white border-r border-gray-200 overflow-y-auto hidden md:block">
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-bold text-lg flex items-center justify-between">
                Search Results
                <button
                  onClick={clearSearch}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={16} />
                </button>
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {searchResults.reduce(
                  (count, category) => count + category.components.length,
                  0
                )}{" "}
                components found
              </p>
            </div>

            {searchResults.length > 0 ? (
              <div className="p-2">
                {searchResults.map((result) => (
                  <div key={result.categoryId} className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-500 px-3 py-1">
                      {result.categoryName}
                    </h3>
                    {result.components.map((component) => (
                      <button
                        key={component.id}
                        className={`w-full text-left px-3 py-2 rounded text-sm my-1 hover:bg-gray-100 flex items-center ${
                          activeCategory === result.categoryId &&
                          activeComponent === component.id
                            ? "bg-blue-50 text-blue-700"
                            : "text-gray-800"
                        }`}
                        onClick={() => {
                          setActiveCategory(result.categoryId);
                          setActiveComponent(component.id);
                        }}
                      >
                        {component.name}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 text-center">
                <p className="text-gray-500">No components found</p>
                <p className="text-sm text-gray-400 mt-1">
                  Try another search term
                </p>
              </div>
            )}
          </div>
        ) : (
          <Sidebar
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activeComponent={activeComponent}
            setActiveComponent={setActiveComponent}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          {isSearching ? (
            <>
              <div className="mb-8 bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  Search Results for &quot;{searchQuery}&quot;
                </h2>
                <p className="text-gray-600">
                  Found{" "}
                  {searchResults.reduce(
                    (count, category) => count + category.components.length,
                    0
                  )}{" "}
                  components matching your search.
                </p>
              </div>

              {/* Mobile Search Results */}
              <div className="md:hidden mb-6">
                {searchResults.length > 0 ? (
                  <div className="rounded-lg border border-gray-200 overflow-hidden">
                    {searchResults.map((result) => (
                      <div
                        key={result.categoryId}
                        className="border-b border-gray-200 last:border-b-0"
                      >
                        <h3 className="text-sm font-semibold text-gray-700 px-4 py-2 bg-gray-50">
                          {result.categoryName}
                        </h3>
                        {result.components.map((component) => (
                          <button
                            key={component.id}
                            className={`w-full text-left px-4 py-3 border-t border-gray-100 flex items-center ${
                              activeCategory === result.categoryId &&
                              activeComponent === component.id
                                ? "bg-blue-50 text-blue-700"
                                : "text-gray-800"
                            }`}
                            onClick={() => {
                              setActiveCategory(result.categoryId);
                              setActiveComponent(component.id);
                            }}
                          >
                            {component.name}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center bg-white rounded-lg border border-gray-200">
                    <p className="text-gray-500">No components found</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Try another search term
                    </p>
                    <button
                      onClick={clearSearch}
                      className="mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-200"
                    >
                      Clear Search
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <div className="mr-6 bg-white p-3 rounded-lg shadow-sm">
                  <Layers className="text-blue-600" size={28} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-1">
                    Interactive Component Library
                  </h2>
                  <p className="text-gray-600">
                    Explore our collection of ready-to-use animated components
                    for your Next.js, React, and Tailwind CSS projects. Browse
                    categories in the sidebar or use the search to find specific
                    components.
                  </p>
                </div>
              </div>

              {/* Component stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center">
                  <div className="mr-4 bg-blue-100 p-2 rounded-md">
                    <Package className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Components</p>
                    <p className="text-2xl font-bold text-gray-800">
                      {totalComponents}
                    </p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center">
                  <div className="mr-4 bg-purple-100 p-2 rounded-md">
                    <Layers className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Categories</p>
                    <p className="text-2xl font-bold text-gray-800">
                      {categories.length}
                    </p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center">
                  <div className="mr-4 bg-green-100 p-2 rounded-md">
                    <Code className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Framework</p>
                    <p className="text-2xl font-bold text-gray-800">
                      Next.js + Tailwind
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Component Detail View */}
          <ComponentDetail
            categories={categories}
            categoryId={activeCategory}
            componentId={activeComponent}
          />
        </main>
      </div>

      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-8 h-8 rounded-md flex items-center justify-center">
                  <Code className="text-white" size={16} />
                </div>
                <h3 className="text-xl font-bold">Kinetic UI</h3>
              </div>
              <p className="text-gray-400 max-w-sm">
                A collection of beautiful, animated UI components for modern web
                applications. Built with React, Next.js, and Tailwind CSS.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-white">
                  Resources
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      API Reference
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Examples
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-white">
                  Community
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Discord
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-white">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      License
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Kinetic UI. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.137 20.164 22 16.42 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
