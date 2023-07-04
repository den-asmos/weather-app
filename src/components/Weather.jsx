import { useGetWeatherQuery } from '../store/weather/weather.api';
import WeatherCard from './WeatherCard';
import { notFound } from '../assets';
import Loader from './Loader';
import { useSelector } from 'react-redux';

const Weather = () => {
  const city = useSelector((state) => state.city.city);
  const { isError, isLoading, data } = useGetWeatherQuery(city);

  if (isError) {
    return (
      <div className="mx-auto flex flex-col justify-center items-center mt-[100px]">
        <h2 className="text-2xl mb-2">Smth went wrong</h2>
        <img src={notFound} alt="404" className="mt-5" />
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      {isLoading ? <Loader /> : <WeatherCard data={data} />}
    </div>
  );
};

export default Weather;
