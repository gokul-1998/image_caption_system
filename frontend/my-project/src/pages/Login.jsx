import React from "react";
import { Image, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 px-6">
      <div className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 text-white">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-2xl bg-blue-500/20 border border-blue-400/30">
            <Image className="w-8 h-8 text-blue-400" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center">
          Welcome Back
        </h2>

        <p className="text-gray-400 text-center mt-2">
          Login to continue generating captions
        </p>

        <form className="mt-8 space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Email Address
            </label>

            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <Mail className="w-5 h-5 text-gray-400" />

              <input
                type="email"
                placeholder="you@example.com"
                className="bg-transparent outline-none w-full text-white placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Password
            </label>

            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <Lock className="w-5 h-5 text-gray-400" />

              <input
                type="password"
                placeholder="••••••••"
                className="bg-transparent outline-none w-full text-white placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Remember */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-400">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="text-blue-400 hover:text-blue-300"
            >
              Forgot password?
            </button>
          </div>

          {/* Button */}
          <button className="w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition-all font-semibold">
            Login
          </button>
        </form>

        <p className="text-center text-gray-400 mt-8">
          Don&apos;t have an account?
          <button className="ml-2 text-blue-400 hover:text-blue-300">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}