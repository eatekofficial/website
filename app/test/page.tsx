export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-teal-600 mb-4">Test Page</h1>
        <p className="text-gray-700 mb-6">If you can see this page, basic routing is working correctly!</p>
        <div className="space-y-4">
          <a 
            href="/" 
            className="inline-block px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
          >
            Go to Home
          </a>
          <p className="text-sm text-gray-500">
            If the button above doesn&apos;t work, try refreshing the page or check the browser console for errors.
          </p>
        </div>
      </div>
    </div>
  )
}
