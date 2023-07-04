import { useState } from 'react';
import { searchIcon } from '../assets';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeCity } from '../store/weather/city.slice';
import { makeSearchRequest } from './../utils/makeSearchRequest';

const SearchPage = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const search = makeSearchRequest(input);

    if (!search) {
      return;
    }

    dispatch(changeCity(search));
    navigate('/');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center mt-[100px]"
    >
      <div className="relative">
        <input
          type="text"
          placeholder="Enter your city..."
          value={input}
          onChange={({ target }) => setInput(target.value)}
          className="py-3 pl-4 pr-12 w-[400px] h-[50px] outline-none border rounded-md shadow-md shadow-gray-300"
        />
        <button
          type="submit"
          className="w-6 h-6 absolute bottom-1/4 right-4 text-gray-500"
        >
          <img src={searchIcon} alt="search" />
        </button>
      </div>
    </form>
  );
};

export default SearchPage;
