"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import { ComponentCategory } from "../../types";

interface SidebarProps {
  categories: ComponentCategory[];
  activeCategory: string;
  activeComponent: string;
  setActiveCategory: (category: string) => void;
  setActiveComponent: (component: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
  activeComponent,
  setActiveComponent,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const [expandedCategories, setExpandedCategories] = useState(
    categories.map((cat) => cat.id)
  );

  const toggleCategory = (categoryId: string) => {
    if (expandedCategories.includes(categoryId)) {
      setExpandedCategories(
        expandedCategories.filter((id) => id !== categoryId)
      );
    } else {
      setExpandedCategories([...expandedCategories, categoryId]);
    }
  };

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:sticky top-0 z-30 md:z-10 h-screen md:h-auto md:max-h-screen overflow-y-auto bg-white shadow-lg md:shadow-none w-64 transform ${
          mobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4 border-b md:hidden">
          <h2 className="font-bold">Components</h2>
          <button onClick={() => setMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="p-4">
          <h2 className="text-lg font-bold mb-4">Components</h2>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="mb-2">
                <div
                  className="flex items-center cursor-pointer hover:bg-sky-300 p-2 rounded"
                  onClick={() => toggleCategory(category.id)}
                >
                  {expandedCategories.includes(category.id) ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                  <span className="ml-2 font-medium">{category.name}</span>
                </div>

                {expandedCategories.includes(category.id) && (
                  <div className="ml-6 space-y-1 mt-1">
                    {category.components.map((component) => (
                      <div
                        key={component.id}
                        className={`p-2 rounded cursor-pointer ${
                          activeCategory === category.id &&
                          activeComponent === component.id
                            ? "bg-blue-100 text-blue-800"
                            : "hover:bg-sky-300"
                        }`}
                        onClick={() => {
                          setActiveCategory(category.id);
                          setActiveComponent(component.id);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {component.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
