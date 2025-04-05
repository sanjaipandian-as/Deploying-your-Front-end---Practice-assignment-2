import React from "react";

const TravelDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-6 flex flex-col">
        <h2 className="text-blue-400 text-2xl font-bold mb-6">Kalvium Travels</h2>
        <ul className="space-y-3">
          <li className="bg-blue-500 p-3 rounded-lg cursor-pointer">Dashboard</li>
          <li className="p-3 rounded-lg cursor-pointer hover:bg-blue-500">My Tickets</li>
          <li className="p-3 rounded-lg cursor-pointer hover:bg-blue-500">Favourite</li>
          <li className="p-3 rounded-lg cursor-pointer hover:bg-blue-500">Message</li>
          <li className="p-3 rounded-lg cursor-pointer hover:bg-blue-500">Transaction</li>
          <li className="p-3 rounded-lg cursor-pointer hover:bg-blue-500">Settings</li>
          <li className="p-3 rounded-lg cursor-pointer text-red-500">Logout</li>
        </ul>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-6">
        <header className="flex items-center justify-between bg-gray-800 p-4 rounded-lg mb-6">
          <input 
            type="text" 
            placeholder="Search for your favorite destination"
            className="flex-1 p-2 bg-gray-700 rounded-lg text-black"
          />
          <button className="bg-blue-500 p-2 rounded-lg ml-4">Search</button>
          <div className="ml-4">User</div>
        </header>
        <h1 className="text-3xl">Hello USER!</h1>
        <p className="mb-6">Welcome back and explore the world.</p>
        
        <h2 className="text-xl mb-4">Easy Visa Destinations</h2>
        <div className="grid grid-cols-3 gap-4">
          {["bali.jpg", "dubai.jpg", "maldives.jpg"].map((img, i) => (
            <div key={i} className="bg-gray-700 p-4 rounded-lg text-center">
              <img src={img} alt="destination" className="w-full h-24 rounded-lg mb-2" />
              Destination {i + 1} - ₹{(i + 1) * 10000}
            </div>
          ))}
        </div>
        
        <h2 className="text-xl mt-6 mb-4">Most Popular</h2>
        <div className="grid grid-cols-4 gap-4">
          {["kerala.jpg", "sukhothai.jpg", "eiffel.jpg", "kashmir.jpg"].map((img, i) => (
            <div key={i} className="bg-gray-700 p-4 rounded-lg text-center">
              <img src={img} alt="popular" className="w-full h-24 rounded-lg mb-2" />
              Location {i + 1} - ₹248/day
            </div>
          ))}
        </div>
      </div>
      
      {/* Right Sidebar */}
      <div className="w-64 bg-gray-800 p-6">
        <div className="bg-gray-700 p-4 rounded-lg text-center mb-6">
          <h2>Kalvium Calander</h2>
          <h3 className="text-lg">September 2022</h3>
          <p className="mt-2">Sun Mon Tue Wed Thu Fri Sat</p>
          <p>1 2 3</p>
          <p>4 5 6 7 8 9 10</p>
          <p>11 12 13 14 15 16 17</p>
          <p>18 19 20 21 22 23 24</p>
          <p>25 26 27 28 29 30</p>
        </div>
        <div>
          <h3 className="text-lg mb-4">Festical Details</h3>
          {["Pongal - 15 Jan  - 18 Jan ", "Fetching the Festival details"].map((booking, i) => (
            <div key={i} className="bg-gray-700 p-3 rounded-lg mb-2">
              {booking}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelDashboard;
