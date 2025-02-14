import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, User, Bell } from 'lucide-react';

// Define types for the navigation items
interface NavItemType {
  name: string;
  href?: string;
  dropdown?: boolean;
  items?: { name: string; href: string }[];
  isOpen?: boolean; // Added for mobile dropdown state
}

// Define props for the NavItem component
interface NavItemProps {
  item: NavItemType;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItemType[] = [
    {
      name: 'Our Solutions',
      dropdown: true,
      items: [
        { name: 'For Individual Investors', href: '/solutions/individual' },
        { name: 'For Institutional Clients', href: '/solutions/institutional' }
      ]
    },
    {
      name: 'Technology',
      href: '/technology'
    },
    {
      name: 'Research & Insights',
      href: '/research'
    },
    {
      name: 'About Us',
      dropdown: true,
      items: [
        { name: 'Our Story', href: '/about/story' },
        { name: 'Leadership Team', href: '/about/leadership' },
        { name: 'Careers', href: '/about/careers' },
        { name: 'Press Room', href: '/about/press' }
      ]
    },
    {
      name: 'Pricing',
      href: '/pricing'
    },
    {
      name: 'Resources',
      dropdown: true,
      items: [
        { name: 'Help Center', href: '/resources/help' },
        { name: 'Blog', href: '/resources/blog' }
      ]
    },
    {
      name: 'Contact',
      href: '/contact'
    }
  ];

  const NavItem: React.FC<NavItemProps> = ({ item }) => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    return (
      <div className="relative">
        {item.dropdown ? (
          <div
            className="group flex items-center"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="flex items-center text-gray-100 px-2 py-2 text-gray-700 hover:text-blue-600 focus:outline-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>{item.name}</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 z-10 mt-4 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {item.items?.map((subItem) => (
                  <a
                    key={subItem.name}
                    href={subItem.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {subItem.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ) : (
          <a
            href={item.href}
            className="px-3 py-2 text-gray-100 hover:text-blue-600"
          >
            {item.name}
          </a>
        )}
      </div>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">AssetPro</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
          {navItems
            .filter((item) => item.name !== 'Technology') // Filter out "Technology"
            .map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
            
            {/* Action Buttons */}
            <div className="flex items-center ml-6 space-x-4">
             
              <a
                href="/login"
                className="px-4 py-2 text-sm text-white border border-blue-600 rounded-md hover:bg-blue-50 hover:text-blue-600"
              >
                Log In
              </a>
              <a
                href="/signup"
                className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.name} className="py-2">
                {item.dropdown ? (
                  <div>
                    <button
                      className="flex items-center w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                      onClick={() => {
                        const newItems = [...navItems];
                        const idx = newItems.findIndex((i) => i.name === item.name);
                        newItems[idx].isOpen = !newItems[idx].isOpen;
                      }}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="ml-auto h-5 w-5" />
                    </button>
                    {item.isOpen && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.items?.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <a
                href="/login"
                className="block w-full text-center px-4 py-2 text-base font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 mb-2"
              >
                Log In
              </a>
              <a
                href="/signup"
                className="block w-full text-center px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;