import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <nav className="flex justify-between items-center py-4 px-5 bg-orange-400 shadow-md text-white">
        <h2 className="font-bold text-xl">Weather</h2>
        <div className="flex text-lg">
          <NavLink to="/">
            <p className="mr-5 transition ease-in-out   hover:scale-110 duration-200">
              Home
            </p>
          </NavLink>
          <NavLink to="/search">
            <p className="transition ease-in-out   hover:scale-110 duration-200">
              Search
            </p>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
