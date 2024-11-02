import React from "react";

const Testimonials = () => {
  return (
    <div
      className="relative p-4 flex flex-col items-center space-y-16 my-10"
      id="Testimonials"
    >
      <h2 className="text-center text-[#134E4A] text-5xl exo-2-headings uppercase font-extrabold">
        This Is What Our Customers Say!
      </h2>

      <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 w-full max-w-6xl">
        {/* Testimonial 1 */}
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-xl">
          <div className="w-24 h-24 bg-zinc-300 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="../../public/images/user2.avif"
              alt="Customer 1"
            />
          </div>
          <div className="text-center ">
            <p className="text-[#134E4A] text-sm font-normal mt-2">
              “Just what I was looking for. Thank you for making it painless,
              pleasant and most of all hassle free! All products are great.”
            </p>
            <p className="text-[#134E4A] text-xl mt-2 font-semibold">
              UI Designer
            </p>
            <p className="text-[#134E4A] text-xl font-normal font-['Volkhov']">
              Megen W.
            </p>
            <div className="w-16 h-1 bg-[#134E4A] mx-auto my-2" />
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-xl">
          <div className="w-24 h-24 bg-zinc-300 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="../../public/images/user1.avif"
              alt="Customer 2"
            />
          </div>
          <div className="text-center ">
            <p className="text-[#134E4A] text-sm font-normal mt-2">
              “Items That I ordered were the best investment I ever made. I
              can't say enough about your quality service.”
            </p>
            <p className="text-[#134E4A] text-xl mt-2 font-semibold ">
              UI Designer
            </p>
            <p className="text-[#134E4A] text-xl font-normal font-['Volkhov']">
              Suzan B.
            </p>
            <div className="w-16 h-1 bg-[#134E4A] mx-auto my-2" />
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-xl">
          <div className="w-24 h-24 bg-zinc-300 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="../../public/images/user3.avif"
              alt="Customer 3"
            />
          </div>
          <div className="text-center ">
            <p className="text-[#134E4A] text-sm font-normal mt-2">
              "You won't regret it. I would like to personally thank you for
              your outstanding product. Absolutely wonderful!"
            </p>
            <p className="text-[#134E4A] text-xl mt-2 font-semibold">
              Traveler
            </p>
            <p className="text-[#134E4A] text-xl font-normal font-['Volkhov']">
              James K.
            </p>
            <div className="w-16 h-1 bg-[#134E4A] mx-auto my-2" />
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <div className="w-10 h-10 bg-[#134E4A] rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full transform rotate-180" />
        </div>
        <div className="w-10 h-10 bg-[#134E4A] rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
