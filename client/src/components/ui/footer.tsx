import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-neutral-dark py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <h3 className="text-white font-bold text-lg">React + Express Fullstack</h3>
            <p className="text-gray-400 text-sm mt-1">Modern web application starter template</p>
          </div>
          <div className="flex space-x-8">
            <Link href="/#">
              <a className="text-gray-400 hover:text-white transition-colors">Documentation</a>
            </Link>
            <Link href="/#">
              <a className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            </Link>
            <Link href="/#">
              <a className="text-gray-400 hover:text-white transition-colors">Support</a>
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} React + Express Fullstack. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
