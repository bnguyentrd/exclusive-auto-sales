import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import VehicleModelsList from './VehicleModelsList';
import ManufacturerList from './ManufacturersList';
import VehicleModelsForm from './VehicleModelsForm';
import AutomobilesForm from './AutomobilesForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/models" element={<VehicleModelsList />} />
          <Route path="/manufacturer" element={<ManufacturerList />} />
          <Route path="/models/new" element={<VehicleModelsForm />} />
          <Route path="/automobiles/new" element={<AutomobilesForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
