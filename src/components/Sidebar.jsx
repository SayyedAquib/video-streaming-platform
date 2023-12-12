import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import home from "../assets/home.png";
import play from "../assets/play.png";
import shorts from "../assets/shorts.png";
import subscribe from "../assets/subscribe.png";
import ButtonsContext from "../utils/ButtonsContext";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const { setText } = useContext(ButtonsContext);

  if (isMenuOpen)
    return (
      <div className="m-2 mt-16 shadow-lg p-4 rounded-lg">
        <ul className="text-black">
          <li
            onClick={() => setText("All")}
            className="cursor-pointer hover:text-gray-300 transition"
          >
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li
            onClick={() => setText("Shorts")}
            className="cursor-pointer hover:text-gray-300 transition"
          >
            Shorts
          </li>
          <li className="hover:text-gray-300 transition">Videos</li>
          <li className="hover:text-gray-300 transition">Live</li>
        </ul>

        <h1 className="font-bold text-xl text-black pt-5">Subscriptions</h1>
        <ul className="text-black">
          <li className="hover:text-gray-300 transition">Music</li>
          <li className="hover:text-gray-300 transition">Sports</li>
          <li className="hover:text-gray-300 transition">Gaming</li>
          <li className="hover:text-gray-300 transition">Movies</li>
        </ul>

        <h1 className="font-bold text-xl text-black pt-5">Watch Later</h1>
        <ul className="text-black">
          <li className="hover:text-gray-300 transition">Music</li>
          <li className="hover:text-gray-300 transition">Sports</li>
          <li className="hover:text-gray-300 transition">Gaming</li>
          <li className="hover:text-gray-300 transition">Movies</li>
        </ul>
      </div>
    );

  return (
    <div className="ml-1 mt-16 flex justify-center">
      <ul>
        <li>
          <Link onClick={() => setText("All")} to="/">
            <img className="h-[26px] mt-5 mx-4" src={home} alt="Home logo" />
            <p className="text-[10px] mx-4">Home</p>
          </Link>
        </li>
        <li>
          <img className="h-[26px] mt-5 mx-4" src={shorts} alt="Shorts logo" />
          <p className="text-[10px] mx-4">Shorts</p>
        </li>
        <li>
          <img
            className="h-[26px] mt-5 mx-4"
            src={subscribe}
            alt="Subscription logo"
          />
          <p className="text-[10px]">Subscriptions</p>
        </li>
        <li>
          <img className="h-[26px] mt-5 mx-4" src={play} alt="You logo" />
          <p className="text-[10px] mx-5">You</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
