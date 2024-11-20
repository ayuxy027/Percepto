"use client";

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/modules/home/components/Hero';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSignIn = () => {
    // Implement sign in logic here
    setUser({ id: '1', name: 'John Doe', email: 'john@example.com' });
  };

  const handleSignOut = async () => {
    // Implement sign out logic here
    setUser(null);
  };

  return (
    <main className={darkMode ? 'dark' : ''}>
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        user={user}
        onSignIn={handleSignIn}
        onSignOut={handleSignOut}
      />
      <Hero darkMode={darkMode} />
    </main>
  );
}

interface UserType {
  id: string;
  name: string;
  email: string;
  imageUrl?: string;
}