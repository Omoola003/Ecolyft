// app/not-found.js
import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Ecolyft",
  robots: "noindex, nofollow",
};

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-gray-50">
      <h1 className="text-7xl font-bold text-[#2E8B57] mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        Oops, page not found
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Seems this page has been recycled out of existence. Let’s get you back
        to something useful.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-green-600 text-white hover:bg-green-500 transition"
      >
        Return to Homepage
      </Link>
    </main>
  );
}
