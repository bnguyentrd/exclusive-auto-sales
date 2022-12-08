import React from "react";

class VehicleModelsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            picture: '',
            manufacturers: [],
          };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePicture = this.handleChangePicture.bind(this);
        this.handleChangeManufacturer = this.handleChangeManufacturer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        const value = event.target.value;
        this.setState({ name: value });
      }

    handleChangePicture(event) {
        const value = event.target.value;
        this.setState({ picture: value });
      }

    handleChangeManufacturer(event) {
        const value = event.target.value;
        this.setState({ manufacturer: value });
      }


    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        data.manufacturer_id = data.manufacturer
        data.picture_url = data.picture
        delete data.picture
        delete data.manufacturers
        delete data.manufacturer
        console.log(data)

        const modelUrl = 'http://localhost:8100/api/models/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(modelUrl, fetchConfig);
        if (response.ok) {
          const newModel = await response.json();
          this.setState({
            name: '',
            picture: '',
            manufacturer: '',
          });
        }
      }

      async componentDidMount() {
        const url = 'http://localhost:8100/api/manufacturers/';

        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          this.setState({ manufacturers: data.manufacturers });
        }
      }

    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a model</h1>
                    <form onSubmit={this.handleSubmit} id="create-model-form">
                    <div className="form-floating mb-3">
                        <input onChange={this.handleChangeName}
                        value={this.state.name}
                        placeholder="Name"
                        required type="text"
                        name="name"
                        id="name"
                        className="form-control" />
                        <label htmlFor="name">Model Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleChangePicture}
                        value={this.state.picture}
                        placeholder="Picture"
                        required type="text"
                        name="picture"
                        id="picture"
                        className="form-control" />
                        <label htmlFor="Picture">Picture URL</label>
                    </div>
                    <div className="mb-3">
                        <select onChange={this.handleChangeManufacturer}
                        value={this.state.manufacturer}
                        required name="manufacturer"
                        id="manufacturer"
                        className="form-select">
                        <option value="">Choose a manufacturer</option>
                        {this.state.manufacturers.map(manufacturer => {
                            return (
                            <option key={manufacturer.id} value={manufacturer.id}>
                                {manufacturer.name}
                            </option>
                            )
                        })}
                        </select>
                    </div>
                    <button className="btn btn-primary">Create</button>
                    </form>
                </div>
                </div>
            </div>
        );
    }
}

export default VehicleModelsForm;
