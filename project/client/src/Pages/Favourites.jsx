import { FaTrash } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  let username = localStorage.getItem("username");

  if (username !== null) {
    // console.log("Show favourites");
  } else {
    username = undefined;
  }

  useEffect(() => {
    const getFavourites = async () => {
      const favs = await axios.get(`${import.meta.env.VITE_baseURL}/favs/`, {
        params: { userID: localStorage.getItem("userID") },
      });
      setFavourites(favs.data.favourites);
      // console.log(favourites);
    };

    getFavourites();
  }, []);

  return (
    <div className="p-4 bg-white flex flex-col items-center w-full gap-8">
      <h1 className="text-5xl uppercase mt-5 font-bold prompt-black">
        Favourites
      </h1>
      {username !== undefined ? (
        <div className="flex flex-wrap justify-center gap-8">
          {favourites.map((fav, index) => (
            <div
              key={index}
              className="relative w-[300px] p-4 h-[330px] border border-gray-300 rounded-lg shadow-lg"
            >
              <FaTrash
                onClick={() => onDelete(fav._id)}
                className="absolute top-2 right-2 text-green-600 text-2xl hover:text-red-600 cursor-pointer"
              />
              <img
                src={fav.image}
                alt={fav.category}
                className="w-full h-48 object-cover rounded-t-lg mb-3"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-1">{fav.name}</h3>
              <p className="text-lg text-black">
                <span className="font-semibold text-green-800">Price:</span> $
                {fav.price}
              </p>
              <p className="text-lg text-black">
                <span className="font-semibold text-green-800">Discount:</span>{" "}
                {fav.discount}%
              </p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="bg-green-100 p-6 rounded-lg text-center">
            <h1 className="text-green-700 text-3xl font-bold">
              Oops! You're Not Logged In
            </h1>
            <p className="text-gray-700 text-lg mt-4">
              It looks like you're trying to access your favorites. To continue
              enjoying your personalized shopping experience, please log in to
              your account.
            </p>
            <p className="text-green-700 font-semibold mt-6">
              "The best things in life are meant to be shared."
            </p>
            <Link
              to="/user/login"
              className="mt-14 relative top-[15px] bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Log In
            </Link>
            <div className="mt-10 text-gray-600">
              <p>
                Don't have an account?
                <Link
                  to="/user/register"
                  className="text-green-600 underline hover:text-green-700"
                >
                  {" "}
                  Sign up here
                </Link>
                !
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Favourites;
