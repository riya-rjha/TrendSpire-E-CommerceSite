import { FaTrash } from "react-icons/fa";

const Favourites = ({ onDelete }) => {
  return (
    <div className="p-4 bg-white flex flex-col items-center w-full gap-8">
      <h1 className="text-5xl uppercase mt-5 font-bold prompt-black">
        Favourites
      </h1>
      <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 h-[330px] border border-gray-300 rounded-lg shadow-lg">
        <FaTrash
          onClick={() => onDelete("1")}
          className="absolute top-2 right-2 text-green-600 text-2xl hover:text-red-600 cursor-pointer"
        />
        <img
          src="https://img.freepik.com/premium-photo/regal-lion-standing-rock-overlooking-sunsetlit-landscape_268722-41009.jpg?ga=GA1.1.448448890.1721050418"
          alt="Product 1"
          className="w-full h-48 object-cover rounded-t-lg mb-3"
        />
        <h3 className="text-xl md:text-2xl font-bold  mb-1">
          Wide Legged Jeans
        </h3>
        <p className="text-lg text-black">
          <span className="font-semibold text-green-800">Price:</span> $29.99
        </p>
        <p className="text-lg text-black">
          <span className="font-semibold text-green-800">Discount:</span> 10%
        </p>
      </div>
    </div>
  );
};

export default Favourites;
