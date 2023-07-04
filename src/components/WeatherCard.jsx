import { humidity, windSpeed } from '../assets';

const Weather = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-[50px] border py-4 px-4 rounded-md shadow-md shadow-gray-300">
      <h2 className="text-2xl">
        Currently in <span className="text-orange-400">{data.name}</span>
      </h2>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
        alt="weather"
        className="-mb-8"
      />
      <p className="text-[2rem]">{Math.round(data.main.temp)} &#8451;</p>
      <div className="flex flex-col w-full justify-center items-start mt-4 text-lg">
        <div className="flex items-center">
          <img
            src={windSpeed}
            alt="wind-speed"
            className="h-4 w-4 object-contain mr-2"
          />
          <p>{data.wind.speed} km/h</p>
        </div>
        <div className="flex items-center">
          <img
            src={humidity}
            alt="humidity"
            className="h-4 w-4 object-contain mr-2"
          />
          <p>{data.main.humidity}%</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
