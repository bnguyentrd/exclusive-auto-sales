import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturer">Manufacturer List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturer/new">Create Manufacturer</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/models">Vehicle Models List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/models/new">Create Vehicle Model</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles/new">Create Automobile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles">Automobiles List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technicianform/new">Enter a technician</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/serviceappointmentform/new">Enter a service appointment</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointmentlist">Appointment List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/servicehistory">Service History</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="salesrecords/">Sales Record List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="salesreps/">Sales Rep List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="salescustomers/">Create Sales Customer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="salesreps/new">Create Sales Rep</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="salesrecords/new">Create Sales Record</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
