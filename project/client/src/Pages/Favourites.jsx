import { FaTrash } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  let username = localStorage.getItem("username");

  if (username !== null) {
  } else {
    username = undefined;
  }

  useEffect(() => {
    const getFavourites = async () => {
      const favs = await axios.get(`${import.meta.env.VITE_baseURL}/favs/`, {
        params: { userID: localStorage.getItem("userID") },
      });
      setFavourites(favs.data.favourites);
    };
    getFavourites();
  }, []);

  const handleDelete = async (prodID) => {
    try {
      setFavourites(favourites.filter((prod) => prod._id !== prodID));
      const favs = await axios.delete(`${import.meta.env.VITE_baseURL}/favs/`, {
        data: { userID: localStorage.getItem("userID"), productID: prodID },
      });
      console.log(favs);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div className="text-green-800 font-bold py-6 px-4 text-center">
          <h1 className="text-5xl md:text-5xl font-extrabold uppercase exo-2-headings">
            My Favourites
          </h1>
        </div>

        {username !== undefined ? (
          <div className="p-6 md:p-10">
            {favourites.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p className="text-2xl font-semibold">No favourites yet</p>
                <p className="mt-2 text-lg">
                  Start adding your favorite items!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {favourites.map((fav, index) => (
                  <div
                    key={index}
                    className="bg-green-50 border-2 border-green-200 rounded-xl overflow-hidden  duration-300 hover:shadow-2xl relative"
                  >
                    <div className="relative">
                      <img
                        src={fav.image}
                        alt={fav.category}
                        className="w-full h-56 object-cover"
                      />
                      <FaTrash
                        onClick={() => handleDelete(fav._id)}
                        className="absolute top-4 right-4 text-red-500 text-2xl bg-white rounded-full p-2 w-10 h-10 hover:bg-red-50 cursor-pointer transition duration-300 hover:scale-110 shadow-md"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-2xl font-bold text-green-800 mb-3">
                        {fav.name}
                      </h3>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-green-700">
                          Price:{" "}
                          <span className="text-black">${fav.price}</span>
                        </span>
                        <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                          {fav.discount}% Off
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-green-50 p-10 rounded-2xl shadow-xl">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-green-800">
                  Welcome Back!
                </h2>
                <p className="mt-4 text-lg text-green-600">
                  Log in to access your personalized favorites collection.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <Link
                  to="/user/login"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition duration-300 text-center"
                >
                  Log In
                </Link>
                <div className="text-center">
                  <p className="text-green-700">
                    Don't have an account?{" "}
                    <Link
                      to="/user/register"
                      className="font-semibold text-green-800 hover:underline"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
              <div className="text-center text-green-500 italic">
                "Discover, Save, Enjoy"
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
