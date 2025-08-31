import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function OnboardingScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/signup");
    }, 2000);

    // Cleanup timer jika component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-12 gap-12">
      <div className="flex flex-col gap-8 items-center justify-center">
        {/* Logo Section */}
        <div className="flex w-52 justify-center items-center">
          <img src="/assets/NewsWatch.png" alt="NewsWatch Logo" />
        </div>

        {/* Subtitle */}
        <div className="flex justify-center items-center">
          <p className="font-normal text-center text-gray-600 max-w-sm">
            All type of news from all trusted sources for all type of people
          </p>
        </div>
      </div>

      {/* Optional: Loading indicator */}
      <div className="flex justify-center">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}