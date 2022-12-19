// function MainPage() {
//   return (
//     <div className="px-4 py-5 my-5 text-center">
//       <h1 className="display-5 fw-bold">CarCar</h1>
//       <div className="col-lg-6 mx-auto">
//         <p className="lead mb-4">
//           The premiere solution for automobile dealership
//           management!
//         </p>
//       </div>
//     </div>
//   );
// }

// export default MainPage;

import React from 'react';
import Slideshow from './Slideshow';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleModels: [],
    };
  }

  async getVehicleModels() {
    const vehicleUrl = 'http://localhost:8100/api/models/';
    try {
      const vehicleModelResponse = await fetch(vehicleUrl);
      if (vehicleModelResponse.ok) {
        const vehicleModelData = await vehicleModelResponse.json();
        this.setState({
          vehicleModels: vehicleModelData.models,
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  async componentDidMount() {
    this.getVehicleModels();
  }

  render() {
    const { vehicleModels } = this.state;

    return (
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Exclusive Auto Haus</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            The premiere solution for high-end exotic cars!
          </p>
        </div>

        {/* Slideshow component */}
        <Slideshow vehicleModels={vehicleModels} />
      </div>
    );
  }
}

export default MainPage;

