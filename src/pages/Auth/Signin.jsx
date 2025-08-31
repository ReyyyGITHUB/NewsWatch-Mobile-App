import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        {/* Logo Section */}
        <div className="flex w-44 justify-center items-center mb-12">
          <img src="/assets/NewsWatch.png" alt="NewsWatch Logo" className="w-full h-auto" />
        </div>

        {/* Form Section */}
        <div className="flex flex-col w-full gap-6">
          {/* Input Fields */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-500 text-base">Username</label>
            <input
              type="text"
              className="border-b border-gray-300 w-full pt-1 text-lg font-normal focus:outline-none focus:border-blue-500 transition-colors pb-2"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-gray-500 text-base">Email</label>
            <input
              type="email"
              className="border-b border-gray-300 w-full pt-1 text-lg font-normal focus:outline-none focus:border-blue-500 transition-colors pb-2"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-gray-500 text-base">Password</label>
            <input
              type="password"
              className="border-b border-gray-300 w-full pt-1 text-lg font-normal focus:outline-none focus:border-blue-500 transition-colors pb-2"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link
              to="/resetpassword"
              className="font-medium text-sm text-blue-500 hover:text-blue-600 active:text-blue-700 transition-colors"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        {/* Button Section */}
        <div className="w-full flex flex-col">
          <Link to={"/home"} className="w-full">
            <button className="w-full h-12 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-colors text-base active:scale-98">
              Sign In
            </button>
          </Link>

          {/* Social Login Section */}
          <div className="text-center text-gray-600 mt-6 text-sm">Or sign in with</div>

          <div className="flex justify-center gap-3 mt-4">
            <div className="flex flex-col items-center p-3 border border-gray-300 rounded-xl hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors active:scale-95 min-w-[68px]">
              <div className="mb-1">
                <img
                  src="/assets/google-logo.png"
                  alt="Google"
                  className="w-6 h-6"
                />
              </div>
              <span className="text-xs text-gray-600">Google</span>
            </div>

            <div className="flex flex-col items-center p-3 border border-gray-300 rounded-xl hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors active:scale-95 min-w-[68px]">
              <div className="mb-1">
                <img
                  src="/assets/facebook-logo.png"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </div>
              <span className="text-xs text-gray-600">Facebook</span>
            </div>

            <div className="flex flex-col items-center p-3 border border-gray-300 rounded-xl hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors active:scale-95 min-w-[68px]">
              <div className="mb-1">
                <img
                  src="/assets/twitter-logo.png"
                  alt="Twitter"
                  className="w-6 h-6"
                />
              </div>
              <span className="text-xs text-gray-600">Twitter</span>
            </div>
          </div>

          {/* Register Link */}
          <div className="flex justify-center items-center gap-1 text-sm text-gray-600 mt-6 text-center">
            Don't have an account?
            <Link
              to="/signup"
              className="text-blue-500 hover:text-blue-600 active:text-blue-700 font-medium transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}