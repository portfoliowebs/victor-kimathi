import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import { profileData } from '../utils/data';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Portfolio',
    path: '/portfolio'
  }, {
    name: 'Testimonials',
    path: '/testimonials'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  return <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif font-bold text-gray-900">
            {profileData.name}
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <NavLink key={item.name} to={item.path} className={({
            isActive
          }) => `font-medium transition-colors ${isActive ? 'text-red-600' : 'text-gray-700 hover:text-blue-800'}`}>
                {item.name}
              </NavLink>)}
            <a href="resume.docx" download className="bg-red-600 text-white px-4 py-2 rounded font-medium hover:bg-red-700 transition-colors">
              Resume
            </a>
          </nav>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map(item => <NavLink key={item.name} to={item.path} className={({
            isActive
          }) => `font-medium py-2 transition-colors ${isActive ? 'text-red-600' : 'text-gray-700 hover:text-blue-800'}`} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </NavLink>)}
              <a href="resume.docx" download className="bg-red-600 text-white px-4 py-2 rounded font-medium hover:bg-red-700 transition-colors text-center">
                Resume
              </a>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;