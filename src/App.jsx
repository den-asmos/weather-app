import { Route, Routes } from 'react-router-dom';
import { Navigation, HomePage, SearchPage } from './components';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
