"use client"

import React, { useState } from 'react';
import { Sun, Moon, LogOut, User } from 'lucide-react';

interface UserType {
  id: string;
  name: string;
  email: string;
  imageUrl?: string;
}

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  user: UserType | null;
  onSignIn: () => void;
  onSignOut: () => Promise<void>;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  toggleDarkMode,
  user,
  onSignIn,
  onSignOut,
  className = '',
}) => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <>
      <div className="w-full h-20" /> {/* Spacer for fixed navbar */}
      <nav className={`
        fixed top-0 left-0 right-0 z-50
        backdrop-blur-xl
        ${darkMode 
          ? 'bg-ambient-deeper/80 border-b border-ambient-dark/20' 
          : 'bg-ambient-light/80 border-b border-ambient-base/20'}
        ${className}
      `}>
        {/* Ambient Glow Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-[0.15]" />
          <div className={`
            absolute -top-20 left-1/4 w-64 h-64 rounded-full
            blur-4xl
            ${darkMode 
              ? 'bg-primary-ocean-dark opacity-[0.08]' 
              : 'bg-primary-ocean-light opacity-[0.25]'}
          `} />
          <div className={`
            absolute -top-20 right-1/4 w-64 h-64 rounded-full
            blur-4xl
            ${darkMode 
              ? 'bg-primary-coral-dark opacity-[0.08]' 
              : 'bg-primary-coral-light opacity-[0.25]'}
          `} />
        </div>

        {/* Navbar Content */}
        <div className="relative container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="relative group">
              <span className="
                text-3xl font-bold
                bg-gradient-primary bg-clip-text text-transparent
                animate-gradient-shift
              ">
                Percepto
              </span>
              <div className="
                absolute -bottom-1 left-0 w-full h-0.5
                bg-gradient-primary opacity-0
                group-hover:opacity-100
                transition-opacity duration-300
              " />
            </a>

            {/* Navigation Actions */}
            <div className="flex items-center gap-6">
              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`
                  p-2.5 rounded-xl
                  transition-all duration-300
                  backdrop-blur-sm
                  ${darkMode 
                    ? 'bg-surface-dark hover:bg-surface-dark/80 text-primary-coral-light' 
                    : 'bg-surface-light hover:bg-surface-light/80 text-primary-coral-dark'}
                `}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* User Section */}
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className={`
                      flex items-center gap-3 p-2 pr-4 rounded-xl
                      transition-all duration-300
                      backdrop-blur-sm
                      ${darkMode 
                        ? 'bg-surface-dark hover:bg-surface-dark/80 text-ambient-light' 
                        : 'bg-surface-light hover:bg-surface-light/80 text-ambient-deeper'}
                    `}
                  >
                    <div className="relative">
                      <div className="
                        absolute inset-0 bg-gradient-primary 
                        rounded-full opacity-50 animate-glow-pulse
                      " />
                      <div className="relative w-9 h-9 overflow-hidden rounded-full border-2 border-primary-ocean-base">
                        {user.imageUrl ? (
                          <img 
                            src={user.imageUrl} 
                            alt={user.name} 
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <div className="
                            flex items-center justify-center w-full h-full
                            bg-gradient-primary animate-gradient-shift
                          ">
                            <User className="w-5 h-5 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="hidden md:block font-medium">
                      {user.name}
                    </span>
                  </button>

                  {/* User Menu Dropdown */}
                  {showUserMenu && (
                    <div className={`
                      absolute right-0 top-14 w-48
                      rounded-xl backdrop-blur-xl
                      border shadow-lg
                      ${darkMode 
                        ? 'bg-surface-dark border-ambient-dark' 
                        : 'bg-surface-light border-ambient-base'}
                    `}>
                      <button
                        onClick={onSignOut}
                        className={`
                          w-full p-3 rounded-lg
                          flex items-center gap-2
                          transition-all duration-300
                          ${darkMode 
                            ? 'hover:bg-ambient-deeper/50 text-primary-coral-light' 
                            : 'hover:bg-ambient-base/50 text-primary-coral-dark'}
                        `}
                      >
                        <LogOut className="w-5 h-5" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={onSignIn}
                  className="
                    px-6 py-2.5 rounded-xl
                    bg-gradient-primary
                    text-white font-medium
                    transition-all duration-300
                    animate-gradient-shift
                    hover:shadow-lg
                  "
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;