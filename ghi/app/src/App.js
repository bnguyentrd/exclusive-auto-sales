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
import SalesRecordList from './SalesRecordList';
import SalesRepList from './SalesRepList';
import SalesCustomerForm from './SalesCustomerForm';
import SalesRepForm from './SalesRepForm';
import SalesRecordForm from './SalesRecordForm';

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
          <Route path="salesrecords/" element={<SalesRecordList />} />
          <Route path="salesreps/" element={<SalesRepList />} />
          <Route path="salescustomers/" element={<SalesCustomerForm />} />
          <Route path="salesreps/new" element={<SalesRepForm />} />
          <Route path="salesrecords/new" element={<SalesRecordForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
