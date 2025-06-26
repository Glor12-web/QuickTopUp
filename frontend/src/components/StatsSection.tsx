import React from "react";
import { FaStar, FaUserFriends, FaChartLine, FaAward, FaGlobe } from "react-icons/fa";

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Nigerians
      </h2>
      <p className="text-gray-600 text-lg mb-10 max-w-xl">
        We've built the most reliable and user-friendly platform for digital payments in Nigeria.
      </p>

      {/* Main content grid: stats & features left, testimonial right */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Stats and Features */}
        <div className="flex-1">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 text-center mb-12">
            <div>
              <p className="text-3xl font-bold text-blue-800">50K+</p>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-800">1M+</p>
              <p className="text-gray-600">Transactions</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-800">99.9%</p>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-800 flex items-center justify-center gap-1">
                4.8 <FaStar className="text-yellow-500" />
              </p>
              <p className="text-gray-600">User Rating</p>
            </div>
          </div>

          {/* Feature points */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mb-0 lg:mb-0">
            <div className="flex items-start gap-4">
              <FaUserFriends className="text-blue-600 text-xl mt-1 " />
              <p>Trusted by thousands of satisfied customers</p>
            </div>
            <div className="flex items-start gap-4">
              <FaChartLine className="text-blue-600 text-xl mt-1" />
              <p>Consistently growing platform with proven results</p>
            </div>
            <div className="flex items-start gap-4">
              <FaAward className="text-blue-600 text-xl mt-1" />
              <p>Award-winning customer service and support</p>
            </div>
            <div className="flex items-start gap-4">
              <FaGlobe className="text-blue-600 text-xl mt-1" />
              <p>Available nationwide with local support</p>
            </div>
          </div>
        </div>

        {/* Right: Testimonial */}
        <div className="lg:w-[500px] flex-shrink-0">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl p-6 md:p-8 max-w-2xl">
            <h3 className="text-xl font-semibold mb-4">What Our Users Say</h3>
            <div className="bg-blue-400 bg-opacity-20 p-4 rounded-lg">
            <div className="flex  items-center space-x-2 ">
                <span className="md:flex gap-4 items-center">
                    <div className="bg-gray-300 bg-opacity-30 rounded-full w-10 h-10 justify-center items-center flex">
                        <span className="font-medium dark:text-gray-500 ">AO</span>
                    </div>
                    <div>
                        <p className="font-bold">Adebayo Olamide</p>
                        <p className="text-sm text-gray-200 mb-2">Lagos, Nigeria</p>
                    </div>
                </span>
            </div>
              <p className="mb-2">
                "QuickTopUp has made paying my bills so much easier. The platform is fast, reliable, and the customer service is excellent!"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
