const NotFound = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-yellow-100 via-red-100 to-blue-100">
      <div className="w-full h-full p-4">
        <div className="bg-white rounded-3xl shadow-2xl h-full min-h-[calc(100vh-2rem)] p-6 sm:p-8 border-4 border-yellow-400 flex flex-col justify-center items-center">
          <div className="flex items-center justify-between mb-8 w-full">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-red-500 via-blue-500 to-yellow-500 bg-clip-text text-transparent">
              Pokédex
            </h1>
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white animate-pulse">
              <div className="w-6 h-6 bg-white rounded-full border-2 border-gray-300"></div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center">
            <h1 className="text-8xl font-bold bg-gradient-to-r from-red-500 via-blue-500 to-yellow-500 bg-clip-text text-transparent mb-4">
              404
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-600 font-medium">Oops! Page Not Found</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
