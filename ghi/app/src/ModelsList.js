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
