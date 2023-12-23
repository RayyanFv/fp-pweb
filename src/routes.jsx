import { Routes, Route } from 'react-router-dom';

import Signin from './app/signin/Main';
import Homepage from './app/homepage/Main';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Signin />} />
    </Routes>
  );
}

export default AppRoutes;
