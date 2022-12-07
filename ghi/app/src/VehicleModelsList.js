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

export default VehicleModels;
