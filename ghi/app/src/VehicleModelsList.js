<<<<<<< HEAD
import React from 'react'


class ModelsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      models: [],
    }
    this.getVehicleModel = this.getVehicleModel.bind(this)
  }


  async getVehicleModel() {
    const vehicleURL = 'http://localhost:8100/api/models/'
    try {
      const vehiclemodelResponse = await fetch(vehicleURL)
      if (vehiclemodelResponse.ok) {
        const vehiclemodelData = await vehiclemodelResponse.json()
        this.setState({
            models: vehiclemodelData.models,
        })
      }
    } catch (e) {
      console.error(e)
    }
  }

  async componentDidMount() {
    this.getVehicleModel()
  }

  render () {
    return (
        <>
      <table className="table table-striped">
      <caption>List of Vehicle Models</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Manufacturer</th>
          <th>Picture</th>
        </tr>
      </thead>
      <tbody>
       {this.state.models.map(model => {
        return (
          <tr key={model.id}>
            <td>{model.name}</td>
            <td>{model.manufacturer.name}</td>
            <td><img src={model.picture_url}/></td>
          </tr>
        )
       })}
      </tbody>
    </table>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
    </>
    )
  }
}
export default ModelsList;
=======
import React from 'react';

class VehicleModels extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vehiclemodels: [],
        }
        this.getVehicleModel = this.getVehicleModel.bind(this)
    }

    async getVehicleModel() {
        const vehicleUrl = 'http://localhost:8100/api/models/'
        try {
            const vehiclemodelResponse = await fetch(vehicleUrl)
            if (vehiclemodelResponse.ok) {
                const vehiclemodelData = await vehiclemodelResponse.json()
                this.setState({
                    vehiclemodels: vehiclemodelData.models,
                });
            }
        } catch (error) {
            console.error(error)
        }
    }

    async componentDidMount() {
        this.getVehicleModel()
    }


    render () {
        return (
            <table className="table table-striped">
                <h1>Vehicle models</h1>
                <thead>
                    <tr>
                        <th>Model Name</th>
                        <th>Manufacturer</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.vehiclemodels.map(vehiclemodel => {
                        return (
                            <tr key={vehiclemodel.id}>
                                <td>{ vehiclemodel.name }</td>
                                <td>{ vehiclemodel.manufacturer.name }</td>
                                <td><img src={ vehiclemodel.picture_url }/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

export default VehicleModels
>>>>>>> 9cf6f32b00095f8e41aa42053bbf905f42975db6
