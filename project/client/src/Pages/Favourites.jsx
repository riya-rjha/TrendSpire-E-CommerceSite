import { FaTrash } from "react-icons/fa";

const Favourites = ({ onDelete }) => {
  return (
    <div className="p-4 bg-white flex w-full gap-8">
      <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 h-[400px] md:h-[380px] border border-gray-300 rounded-lg shadow-lg">
        <FaTrash
          onClick={() => onDelete("1")}
          className="absolute top-2 right-2 text-green-600 text-2xl hover:text-red-600 cursor-pointer"
        />
        <img
          src="https://img.freepik.com/premium-photo/regal-lion-standing-rock-overlooking-sunsetlit-landscape_268722-41009.jpg?ga=GA1.1.448448890.1721050418"
          alt="Product 1"
          className="w-full h-48 object-cover rounded-t-lg mb-3"
        />
        <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-1">
          Product 1
        </h3>
        <p className="text-xl text-black">
          <span className="font-semibold text-green-800">Price:</span> $29.99
        </p>
        <p className="text-xl text-black">
          <span className="font-semibold text-green-800">Discount:</span> 10%
        </p>
        <button className="bg-green-600 w-full transition-all delay-75 text-white py-2 px-4 rounded-md hover:bg-green-700 mt-2">
          Remove from Favourites
        </button>
      </div>
    </div>
  );
};

export default Favourites;
