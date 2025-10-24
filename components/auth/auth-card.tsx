import Link from "next/link";
import { WaveBackground } from "../ui/wave";

interface AuthCardProps {
  children: React.ReactNode;
  title: string;
  description: string;
  backLink?: boolean;
}

export const AuthCard = ({
  children,
  title,
  description,
  backLink = true,
}: AuthCardProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-blue-600 py-12 px-4 sm:px-6 lg:px-8">
      {/* Decorative Circles */}
      <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-white opacity-20" />
      <div className="absolute bottom-40 left-[5%] w-48 h-48 rounded-full bg-blue-400 opacity-25" />

      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-2xl relative z-10">
        {backLink && (
          <div className="absolute top-8 left-8">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-500 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back
            </Link>
          </div>
        )}

        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {description}
          </p>
        </div>

        {children}
      </div>

      <WaveBackground />
    </div>
  );
};
