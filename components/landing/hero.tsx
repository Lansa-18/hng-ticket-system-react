import Link from "next/link";
import { WaveBackground } from "../ui/wave";

export const Hero = () => {
  return (
    <div className="relative bg-blue-600 min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-white opacity-20" />
      <div className="absolute bottom-40 left-[5%] w-48 h-48 rounded-full bg-blue-400 opacity-25" />
      <div className="absolute top-40 left-[15%] w-32 h-32 rounded-full bg-white opacity-10" />
      <div className="absolute -top-10 right-[20%] w-24 h-24 rounded-full bg-blue-300 opacity-20" />

      {/* Animated circle with gradient */}
      <div className="absolute top-1/4 right-1/3 w-72 h-72 rounded-full bg-linear-to-r from-white/10 to-blue-400/10 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10 text-center text-white max-w-[1440px]">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">TrackiT</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-blue-100">
          Streamline Your Support
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-blue-50">
          Manage your support tickets efficiently with our powerful and
          intuitive ticket management system
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/auth/login"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors border border-white/20"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Wave Background */}
      <WaveBackground />
    </div>
  );
};
