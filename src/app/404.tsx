const NotFound = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-5xl font-bold text-red-600">404 - Page Not Found</h1>
        <p className="mt-4 text-lg text-gray-600">The page you are looking for does not exist.</p>
        <a href="/" className="mt-6 text-blue-600 underline">Go Back Home</a>
      </div>
    );
  };
  
  export default NotFound;
  