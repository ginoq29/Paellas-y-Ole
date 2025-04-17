import { useState } from "react";
import { Link } from "wouter";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-primary font-bold text-xl">
              React + Express Starter
            </div>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/">
              <a className="text-neutral-medium hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Dashboard
              </a>
            </Link>
            <Link href="/#">
              <a className="text-neutral-medium hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Docs
              </a>
            </Link>
            <Link href="/#">
              <a className="text-neutral-medium hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
            </Link>
            <Link href="/#">
              <a className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium">
                Get Started
              </a>
            </Link>
          </nav>
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              className="text-neutral-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <a className="text-neutral-medium hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Dashboard
              </a>
            </Link>
            <Link href="/#">
              <a className="text-neutral-medium hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Docs
              </a>
            </Link>
            <Link href="/#">
              <a className="text-neutral-medium hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                About
              </a>
            </Link>
            <Link href="/#">
              <a className="bg-primary hover:bg-primary/90 text-white block px-3 py-2 rounded-md text-base font-medium">
                Get Started
              </a>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
