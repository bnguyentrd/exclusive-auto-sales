import React from 'react';


class VehicleModelsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            pictureUrl: '',
            manufacturers: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePictureChange = this.handlePictureChange.bind(this)
        this.handleManufacturerChange = this.handleManufacturerChange.bind(this)
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state}
        delete data.manufacturers;

        const modelsUrl = 'http://localhost:8100/api/models/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',

            },
        };
        const response = await fetch(modelsUrl, fetchConfig);
        if (response.ok) {

            const cleared = {
                name: '',
                pictureUrl: '',
                manufacturers: '',
            }
            this.setState(cleared)
        }
    }

    handleNameChange(event) {
        const value = event.target.value
        this.setState({name:value})
    }

    handlePictureChange(event) {
        const value = event.target.value
        this.setState({pictureUrl:value})
    }

    handleManufacturerChange(event) {
        const value = event.target.value
        this.setState({manufacturers:value})
    }


    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a New Vehicle Model</h1>
                        <form onSubmit={this.handleSubmit} id="create-hat-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleNameChange}
                                placeholder="Name"
                                required type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                value={this.state.name} />
                                <label htmlFor="style">Vehicle Model Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handlePictureChange}
                                placeholder="Picture"
                                required type="text"
                                name="picture"
                                id="picture"
                                className="form-control"
                                value={this.state.pictureUrl} />
                                <label htmlFor="fabric">Vehicle Picture</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleManufacturerChange} placeholder="Manufacturers" required type="text" name="manufacturers" id="manufacturers" className="form-control" value={this.state.manufacturers} />
                                <label htmlFor="color">Vehicle Manufacturer</label>
                            </div>
                            <button className="btn btn-primary">Create Vehicle Model</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default VehicleModelsForm;
