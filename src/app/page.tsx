"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

// Animated Text Component for Preview
const TypewriterText = () => {
  const [text, setText] = useState("");
  const fullText = "Build beautiful interfaces faster.";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
    if (index === fullText.length) {
      const timeout = setTimeout(() => {
        setText("");
        setIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <h2 className="text-3xl md:text-4xl font-bold text-blue-500">
      {text}
      <span className="animate-pulse">|</span>
    </h2>
  );
};

// Animated Background Component for Preview
import { ReactNode } from "react";

const AnimatedGradientBackground = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative overflow-hidden w-full h-64 rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x"></div>
      <div className="relative z-10 h-full flex items-center justify-center text-white">
        {children}
      </div>
    </div>
  );
};

// Animated Border Button Component for Preview
const AnimatedBorderButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="relative px-6 py-3 font-bold text-white rounded-lg group">
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-0 -skew-x-6 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-0"></span>
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform skew-x-6 bg-purple-700 group-hover:bg-purple-500 group-hover:skew-x-0"></span>
      <span className="relative">{children}</span>
    </button>
  );
};

// Faded Text Component for Preview
const FadedText = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Create a fade in/out animation
    const fadeInterval = setInterval(() => {
      setOpacity((prev) => {
        // Oscillate opacity between 0 and 1
        return prev >= 1 ? 0 : prev + 0.05;
      });
    }, 100);

    return () => clearInterval(fadeInterval);
  }, []);

  return (
    <div className="p-4 text-center">
      <h3
        className="text-2xl font-bold text-indigo-600 transition-opacity duration-500"
        style={{ opacity }}
      >
        Beautifully Animated Components
      </h3>
    </div>
  );
};

// Landing Page Component
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold">K</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Kinetic-Ui</h1>
          </div>
          <a
            href="/components"
            className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-sm text-white hover:bg-blue-700 transition-colors"
          >
            Component Library
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-24 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Motion-Powered UI Components
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
            Elevate your web applications with stunning animated components that
            are easy to implement and customize.
          </p>
          <div className="mb-16">
            <TypewriterText />
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="/components"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Components
            </a>
            <a
              href="/documentation"
              className="px-8 py-4 bg-white text-blue-600 border border-blue-200 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg"
            >
              Read Docs
            </a>
          </div>
        </div>
      </section>

      {/* Component Previews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Featured Components
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Preview 1 - Typewriter */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Typewriter Text
              </h3>
              <div className="h-40 flex items-center justify-center">
                <TypewriterText />
              </div>
            </div>

            {/* Preview 2 - Animated Background */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Gradient Background
              </h3>
              <AnimatedGradientBackground>
                <span className="text-xl font-bold">Dynamic Gradients</span>
              </AnimatedGradientBackground>
            </div>

            {/* Preview 3 - Animated Button */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Animated Buttons
              </h3>
              <div className="h-40 flex items-center justify-center">
                <AnimatedBorderButton>Hover Me</AnimatedBorderButton>
              </div>
            </div>
          </div>

          <div className="text-center">
            <FadedText />
            <a
              href="/components"
              className="mt-8 inline-flex items-center px-6 py-3 bg-blue-600 border border-transparent rounded-md font-semibold text-white hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              View All Components
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Kinetic-Ui?
            </h2>
            <p className="text-gray-600">
              Our components are designed for developers who want to add
              beautiful animations without the complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Performant Animations
              </h3>
              <p className="text-gray-600">
                Optimized for performance with CSS transitions and transforms
                instead of JavaScript-heavy animations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Copy & Paste Ready
              </h3>
              <p className="text-gray-600">
                Simple implementation with code snippets you can directly copy
                into your projects.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Highly Customizable
              </h3>
              <p className="text-gray-600">
                Easily customize colors, timing, and behaviors to match your
                brand&apos;s style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to add motion to your UI?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Start implementing beautiful animations in minutes with our
            copy-paste component library.
          </p>
          <a
            href="/components"
            className="px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-300 transition-colors shadow-lg"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold">K</span>
                </div>
                <span className="text-xl font-bold">Kinetic-Ui</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Beautiful animated UI components for modern web applications.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/components"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Components
                    </a>
                  </li>
                  <li>
                    <a
                      href="/documentation"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tutorials"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Tutorials
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/about"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/privacy"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Terms
                    </a>
                  </li>
                  <li>
                    <a
                      href="/license"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      License
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Kinetic-Ui. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
