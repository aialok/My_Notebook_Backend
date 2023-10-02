import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  let navigate= useNavigate();
  useEffect(() => {
    console.log(location.pathname);
  }),
    [location];

  const handleLogout = ()=>{
      localStorage.removeItem('authToken')
      navigate("/login")
    }
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className={"flex items-center "}>
            <span
              className={`self-center text-2xl font-semibold whitespace-nowrap dark:text-white  ${
                location.pathname == "/" ? "active:bg-slate-500" : ""
              } `}
            >
              NotesHub
            </span>
          </Link>
          {!localStorage.getItem('authToken') ? <div className="flex items-center">
            <Link
              to="/login"
              className="px-4  py-2 text-lg rounded-md bg-blue-500 text-white mr-4 "
            >
              Login
            </Link>
            <Link
              to="/signup"
              className=" px-4  py-2 text-lg rounded-md bg-blue-500 text-white"
            >
              Signup
            </Link>
          </div> : <div> <Link
              to="/login"
              className="px-4  py-2 text-lg rounded-md bg-blue-500 text-white mr-4 "
              onClick={handleLogout}
            >
              Logout
            </Link></div> }
          
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row  font-medium mt-0 mr-6 space-x-8 md:text-lg">
              <li>
                <Link
                  to="/"
                  className={`text-gray-900 dark:text-white ${
                    location.pathname == "/" ? "opacity-100" : "opacity-60"
                  } `}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="get-notes"
                  className={`text-gray-900 dark:text-white ${
                    location.pathname == "/get-notes"
                      ? "opacity-100"
                      : "opacity-60"
                  } `}
                >
                  Notes
                </Link>
              </li>
              <li>
                <Link
                  to="/add-notes"
                  className={`text-gray-900 dark:text-white ${
                    location.pathname == "/add-notes"
                      ? "opacity-100"
                      : "opacity-60"
                  } `}
                >
                  AddNotes
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`text-gray-900 dark:text-white ${
                    location.pathname == "/about" ? "opacity-100" : "opacity-60"
                  } `}
                >
                  Aboutus
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
