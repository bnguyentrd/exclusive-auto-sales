import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import VehicleModelsList from './VehicleModelsList';
import ManufacturersList from './ManufacturersList';
import ManufacturersForm from './ManufacturersForm';
import VehicleModelsForm from './VehicleModelsForm';
import AutomobilesForm from './AutomobilesForm';
import AutomobilesList from './AutomobilesList';
import TechnicianForm from './TechnicianForm';
import ServiceAppointmentForm from './ServiceAppointmentForm';
import AppointmentList from './AppointmentList';
import ServiceHistory from './ServiceHistory';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/models" element={<VehicleModelsList />} />
          <Route path="/manufacturer" element={<ManufacturersList />} />
          <Route path="/manufacturer/new" element={<ManufacturersForm />} />
          <Route path="/models/new" element={<VehicleModelsForm />} />
          <Route path="/automobiles/new" element={<AutomobilesForm />} />
          <Route path="/automobiles" element={<AutomobilesList />} />
          <Route path="/technicianform/new" element={<TechnicianForm />} />
          <Route path="/serviceappointmentform/new" element={<ServiceAppointmentForm />} />
          <Route path="/appointmentlist" element={<AppointmentList />} />
          <Route path="/servicehistory" element={<ServiceHistory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
