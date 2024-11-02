import React from "react";
import cartImage from '../../public/images/cart.png';
import chatbotImage from '../../public/images/chatbot.png';
import trendImage from '../../public/images/trend.png';
import updateImage from '../../public/images/update.png';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12" id="About">
      <div className="container mx-auto px-6">
        <h2 className="exo-2-headings uppercase font-extrabold text-5xl text-center text-[#134E4A] mb-12">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-6 hover:shadow-lg rounded-lg shadow-md flex flex-col md:flex-row items-center">
            <div className="w-24 h-24 bg-sky-100 md:bg-transparent rounded-full flex justify-center items-center mb-4 md:mb-0 md:mr-4">
              <div
                className="w-16 h-16 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${cartImage})` }}
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-center md:text-left text-[#134E4A] mb-2">
                Personalized Trend Tips
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                Our AI chatbot analyzes your interests and preferences to provide
                you with tailored trend suggestions, ensuring you always stay
                ahead of the curve.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 hover:shadow-lg rounded-lg shadow-md flex flex-col md:flex-row items-center">
            <div className="w-24 h-24 bg-lime-50 rounded-full md:bg-transparent flex justify-center items-center mb-4 md:mb-0 md:mr-4">
              <div
                className="w-16 h-16 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${chatbotImage})` }}
              />
            </div>
            <div>
              <h3 className="text-2xl text-center md:text-left font-semibold text-[#134E4A] mb-2">
                Interactive Chatbot Experience
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                Engage with our intelligent chatbot to explore trends in a
                conversational manner. Ask questions, get insights, and receive
                instant recommendations.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 hover:shadow-lg rounded-lg shadow-md flex flex-col md:flex-row items-center">
            <div className="w-24 h-24 bg-orange-50 rounded-full md:bg-transparent flex justify-center items-center mb-4 md:mb-0 md:mr-4">
              <div
                className="w-16 h-16 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${trendImage})` }}
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-center md:text-left text-[#134E4A] mb-2">
                Comprehensive Trend Analysis
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                Gain detailed trend analysis and insights. Our platform provides
                context and explanations, helping you understand their
                significance and impact.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 hover:shadow-lg rounded-lg shadow-md flex flex-col md:flex-row items-center">
            <div className="w-24 h-24 bg-indigo-50 rounded-full md:bg-transparent flex justify-center items-center mb-4 md:mb-0 md:mr-4">
              <div
                className="w-16 h-16 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${updateImage})` }}
              />
            </div>
            <div>
              <h3 className="text-2xl text-center md:text-left font-semibold text-[#134E4A] mb-2">
                Real-Time Updates
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                Stay informed with the latest trends as they happen. Our platform
                delivers real-time updates regarding trending fashion choices internationally as well as locally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
