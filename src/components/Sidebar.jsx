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

  if (!isMenuOpen) return null;

  return (
    <>
      <div className="shadow-lg px-3 mt-16 flex justify-center">
        <ul>
          <li>
            <Link onClick={() => setText("MERN")} to="/">
              <img className="h-[26px] mt-5 mx-4" src={home} alt="Home logo" />
              <p className="text-[10px] mx-4">Home</p>
            </Link>
          </li>
          <li>
            <Link onClick={() => setText("Shorts")}>
              <img
                className="h-[26px] mt-5 mx-4"
                src={shorts}
                alt="Shorts logo"
              />
              <p className="text-[10px] mx-4">Shorts</p>
            </Link>
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
    </>
  );
};

export default Sidebar;
