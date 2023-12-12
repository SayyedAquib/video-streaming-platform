import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const cachedResults = useSelector(store => store.search)
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.trim() !== '') {
        // Check if the results are already in the cache
        if (cachedResults[searchQuery]) {
          setSuggestions(cachedResults[searchQuery]);
        } else {
          fetchSuggestions(searchQuery)
            .then((result) => {
              setSuggestions(result);
              // Update the cache with the new results
              dispatch(cacheResults({
                [searchQuery]: result,
              }));
            })
            .catch((error) => {
              console.error('Error fetching suggestions:', error);
            });
        }
      } else {
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);

  }, [searchQuery]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const fetchSuggestions = async (term) => {
    const GOOGLE_AC_URL = 'https://clients1.google.com/complete/search';
    try {
      const res = await axios({
        url: GOOGLE_AC_URL,
        adapter: jsonpAdapter,
        params: {
          client: 'youtube',
          hl: 'en',
          ds: 'yt',
          q: term,
        },
      });
      console.log('jsonp results >> ', res);
      if (res.status !== 200) {
        throw new Error('Suggest API not 200!');
      }
      return res.data[1].map((item) => item[0]);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      throw error;
    }
  };

  return (
    <>
      <div className="flex justify-between items-center bg-white p-2 fixed w-full">
        <div className="flex col-span-1 items-center">
          <Link
            className="text-4xl pb-2 ml-2 cursor-pointer"
            onClick={() => toggleMenuHandler()}
          >
            &#8801;
          </Link>
          <Link to="/">
            <img
              className="h-8 mx-2"
              alt="youtube-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            />
          </Link>
        </div>

        <div className="col-span-10 px-5 md:px-10">
          <div className="relative">
            <input
              className="px-5 w-full md:w-[33rem] border border-gray-400 p-2 rounded-l-full focus:outline-none"
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              onFocus={() => setShowSuggestions(true)}
            />
            <Link
              onClick={() => setShowSuggestions(false)}
              to={"results?search_query=" + searchQuery}
            >
              <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
                🔍
              </button>
            </Link>
          </div>

          {showSuggestions && (
            <div className="absolute top-full bg-white px-2 w-full md:w-[33rem] shadow-lg rounded-lg border border-gray-100 mt-1">
              <ul>
                {suggestions.map((suggestion, index) => (
                  <Link
                    onClick={() => setShowSuggestions(false)}
                    key={index}
                    to={"results?search_query=" + suggestion}
                  >
                    <li
                      onClick={() => setSearchQuery(suggestion)}
                      className="py-1 px-3 shadow-sm font-semibold hover:bg-gray-100"
                    >
                      🔍 {suggestion}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="col-span-1">
          <img
            className="h-8"
            alt="user"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
