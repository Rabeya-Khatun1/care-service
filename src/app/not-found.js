import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        {/* Large stylized 404 */}
        <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest">
          404
        </h1>
        
        {/* Background Overlay Text */}
        <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute translate-y-[-3.5rem] md:translate-y-[-4rem]">
          Page Not Found
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">
            Lost in the Clouds?
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-md"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}