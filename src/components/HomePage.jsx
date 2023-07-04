import Weather from './Weather';

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mt-[40px] text-[50px] font-thin text-orange-400">
        Forecast for today
      </h1>
      <Weather />
    </div>
  );
};

export default HomePage;
