import { Link } from "react-router-dom";

export default function ResetPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center p-12">
      <div className="w-full max-w-md flex flex-col items-center gap-8">
        {/* Logo Section */}
        <div className="flex w-52 justify-center items-center mb-[80px]">
          <img src="/assets/NewsWatch.png" alt="NewsWatch Logo" />
        </div>

        {/* Email Input Section */}
        <div className="flex flex-col w-full">
          <label className="text-base text-gray-500 text-left mb-4">
            Enter your email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="border-b border-gray-300 w-full py-3 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button className="self-end bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-1 rounded-full mt-8 transition-colors">
            Get OTP
          </button>
        </div>

        {/* Verification Code Section */}
        <div className="flex flex-col w-full">
          <label className="text-base text-gray-500 text-left mb-4">
            Verification Code
          </label>
          <input
            type="password"
            placeholder="Code"
            className="border-b border-gray-300 w-full py-3 focus:outline-none focus:border-blue-500 transition-colors"
          />

          <Link to={"/resetpassword-setup"}>
            <button className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white py-4 rounded-full mt-8 font-medium transition-colors">
              Verify
            </button>
          </Link>
        </div>

        {/* Back to Sign In */}
        <div className="flex justify-center items-center gap-1 text-sm text-gray-600">
          Remember your password?
          <Link
            to="/signin"
            className="text-blue-500 hover:text-blue-600 active:text-blue-700 font-medium transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
