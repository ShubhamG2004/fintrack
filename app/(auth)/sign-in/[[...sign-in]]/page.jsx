import { SignIn } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-white">
      {/* Back button */}
      <div className="absolute top-6 left-6">
        <Link
          href="/"
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back to <span className="text-indigo-600">FinTrack</span>
          </h1>
          <p className="text-gray-600 max-w-md">
            Sign in to continue managing your finances
          </p>
        </div>

        {/* Clerk SignIn component with custom appearance */}
        <div className="w-full max-w-md">
          <SignIn
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "w-full shadow-none border border-gray-200 rounded-xl bg-white",
                headerTitle: "text-lg font-medium text-gray-900",
                headerSubtitle: "text-gray-500",
                socialButtonsBlockButton:
                  "border-gray-300 hover:bg-gray-50 transition-colors",
                socialButtonsBlockButtonText: "text-gray-700",
                dividerLine: "bg-gray-200",
                dividerText: "text-gray-400",
                formFieldLabel: "text-gray-700",
                formFieldInput:
                  "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg",
                formButtonPrimary:
                  "bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors",
                footerActionText: "text-gray-600",
                footerActionLink:
                  "text-indigo-600 hover:text-indigo-700 transition-colors",
              },
              variables: {
                colorPrimary: "#4f46e5", // indigo-600
                colorText: "#374151", // gray-700
                colorTextOnPrimaryBackground: "#ffffff",
                colorTextSecondary: "#6b7280", // gray-500
                colorBackground: "#ffffff",
                colorInputBackground: "#ffffff",
                colorInputText: "#111827", // gray-900
              },
            }}
            path="/sign-in"
            routing="path"
            signUpUrl="/sign-up"
            afterSignInUrl="/dashboard"
            afterSignUpUrl="/dashboard"
          />
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link href="/sign-up" className="text-indigo-600 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}