import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center p-12 ">
      <div className="w-full max-w-md flex flex-col items-center gap-8">
        {/* Logo Section */}
        <div className="flex w-52 justify-center items-center">
          <img src="/assets/NewsWatch.png" alt="NewsWatch Logo" />
        </div>

        {/* Form Section */}
        <div className="flex flex-col w-full gap-4">
          {/* Input Fields */}
          <input
            type="text"
            placeholder="Username"
            className="w-full h-12 px-4 border-b border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full h-12 px-4 border-b border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full h-12 px-4 border-b border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
          />

          {/* Role Selection */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
              I'm a
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 min-w-44">
                <input
                  type="radio"
                  name="role"
                  value="reporter"
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-gray-700 font-medium">
                  Media Reporter
                </span>
              </label>

              <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 min-w-44">
                <input
                  type="radio"
                  name="role"
                  value="visitor"
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-gray-700 font-medium">Visitor</span>
              </label>
            </div>
          </div>

          {/* Sign Up Button */}
          <Link to={"/signin"}>
            <button className="w-full h-12 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors mt-6">
              Sign Up
            </button>
          </Link>

          {/* Social Login Section */}
          <div className="text-center text-gray-600 mt-6">Or sign in with</div>

          <div className="flex justify-center gap-4 mt-4">
            <div className="flex flex-col items-center p-3 border border-gray-300 rounded-xl hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors">
              <div className="mb-1">
                <img
                  src="/assets/google-logo.png"
                  alt="Google"
                  className="w-6 h-6"
                />
              </div>
              <span className="text-xs text-gray-600">Google</span>
            </div>

            <div className="flex flex-col items-center p-3 border border-gray-300 rounded-xl hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors">
              <div className="mb-1">
                <img
                  src="/assets/facebook-logo.png"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </div>
              <span className="text-xs text-gray-600">Facebook</span>
            </div>

            <div className="flex flex-col items-center p-3 border border-gray-300 rounded-xl hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors">
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

          <div className="flex flex-col justify-center items-center gap-1 text-sm text-gray-600 mt-4">
            By sign in up to News24 you agree to our{" "}
            <Link
              to="/terms-and conditions"
              className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
            >
              Term & Conditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
