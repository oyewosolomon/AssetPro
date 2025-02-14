import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Apple,
  // PlayStore
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Solutions',
      links: [
        { name: 'Individual Investors', href: '/solutions/individual' },
        { name: 'Institutional Clients', href: '/solutions/institutional' },
        { name: 'Investment Advisors', href: '/solutions/advisors' },
        { name: 'Portfolio Analysis', href: '/solutions/analysis' },
        { name: 'Tax Optimization', href: '/solutions/tax' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Story', href: '/about/story' },
        { name: 'Leadership', href: '/about/leadership' },
        { name: 'Careers', href: '/about/careers' },
        { name: 'Press Room', href: '/about/press' },
        { name: 'Contact Us', href: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help Center', href: '/resources/help' },
        { name: 'Blog', href: '/resources/blog' },
        { name: 'Market Insights', href: '/research/market-insights' },
        { name: 'Investment Education', href: '/resources/education' },
        { name: 'Glossary', href: '/resources/glossary' },
        { name: 'API Documentation', href: '/developers/api' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Service', href: '/legal/terms' },
        { name: 'Privacy Policy', href: '/legal/privacy' },
        { name: 'Cookie Policy', href: '/legal/cookies' },
        { name: 'Security', href: '/legal/security' },
        { name: 'Regulatory Disclosures', href: '/legal/regulatory' },
        { name: 'Accessibility', href: '/legal/accessibility' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top section with logo and newsletter signup */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 border-b border-gray-700 pb-12">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white">AssetPro</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Intelligent investing for everyone. We combine cutting-edge technology with institutional expertise to help you achieve your financial goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for market insights and updates.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                required
              />
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Main footer links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold text-white mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom section with app downloads and compliance info */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-1 bg-blue-500"></div>
                <p className="text-sm text-gray-400">
                  AssetPro Financial Technologies, Inc. is registered with the Securities and Exchange Commission as an investment adviser.
                </p>
              </div>
              <p className="text-sm text-gray-400">
                Investing involves risk, including the possible loss of principal. Past performance does not guarantee future results.
              </p>
              <p className="text-sm text-gray-400">
                &copy; {currentYear} AssetPro Financial Technologies, Inc. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-col sm:items-end space-y-4">
              <div className="flex space-x-4">
                <a href="#" className="flex items-center bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md transition-colors duration-300">
                  <Apple className="h-5 w-5 mr-2" />
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                <a href="#" className="flex items-center bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md transition-colors duration-300">
                  {/* <PlayStore className="h-5 w-5 mr-2" /> */}
                  <div>
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">?</span>
                </div>
                <span className="text-sm text-gray-400">24/7 Support: 1-800-ASETPRO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;