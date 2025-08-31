import { Link } from "react-router-dom";

export default function SetupPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-md flex flex-col items-center gap-5">
        {/* Logo Section */}
        <div className="flex w-44 justify-center items-center mb-12">
          <img src="/assets/NewsWatch.png" alt="NewsWatch Logo" className="w-full h-auto" />
        </div>

        {/* Form Container */}
        <div className="flex flex-col w-full gap-6">
          {/* Username Input */}
          <div className="flex flex-col">
            <label className="text-base text-gray-700 mb-3">
              Enter your username
            </label>
            <input
              type="text"
              placeholder="Username"
              className="border-b border-gray-300 w-full py-2 focus:outline-none focus:border-blue-500 transition-colors text-base pb-3"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label className="text-base text-gray-700 mb-3">
              Enter your email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="border-b border-gray-300 w-full py-2 focus:outline-none focus:border-blue-500 transition-colors text-base pb-3"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col">
            <label className="text-base text-gray-700 mb-3">
              Enter your new password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="border-b border-gray-300 w-full py-2 focus:outline-none focus:border-blue-500 transition-colors text-base pb-3"
            />
          </div>

          {/* Sign In Button */}
          <div className="flex justify-center items-center mt-6">
            <Link to={"/signin"} className="w-full">
              <button className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white text-base font-medium rounded-full py-4 transition-colors active:scale-98">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}