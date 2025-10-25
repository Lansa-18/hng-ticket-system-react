import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TrackiT</h3>
            <p className="text-gray-400">
              Streamline your support workflow with our powerful ticket
              management solution.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/auth/login"
                  className="hover:text-white transition-colors"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/auth/signup"
                  className="hover:text-white transition-colors"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: support@trackiT.com</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} TrackiT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
