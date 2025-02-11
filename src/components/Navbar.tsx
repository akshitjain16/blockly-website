import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-bold text-xl text-primary">
              BlocklyCode
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/tutorials" className="text-gray-600 hover:text-primary transition-colors">
              Tutorials
            </Link>
            <Link to="/examples" className="text-gray-600 hover:text-primary transition-colors">
              Examples
            </Link>
            <Link to="/workspace" className="text-gray-600 hover:text-primary transition-colors">
              Workspace
            </Link>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
             aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-200">
            <Link
              to="/tutorials"
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
            >
              Tutorials
            </Link>
            <Link
              to="/examples"
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
            >
              Examples
            </Link>
            <Link
              to="/workspace"
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
            >
              Workspace
            </Link>
            <button className="w-full text-left px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;