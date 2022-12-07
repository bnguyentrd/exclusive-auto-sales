import React from 'react'

class CreateManufacturer extends React.Component {
    contsructor(props) {
        super(props)
        this.state = {
            name:"",
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit(event) {
        event.preventDefault()
        const data = {...this.state}
        delete data.bins;
        console.log(data);

        const manfacturerUrl = 'http://localhost:8100/api/models/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(manufacturerUrl, fetchConfig);
        if (response.ok) {
            const cleared = {
                name: "",
            }
            this.setState(cleared)
        }
    }

    handleNameChange(event) {
        const value = event.target.value
        this.setState({name: value})
    }


    render () {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create Manufacturer</h1>
                        <form onSubmit={this.handleSubmit} id="create-manufacturer-form">
                            <div className="form-floating mb-3">
                                <input value={this.state.name}
                                onChange={this.handleNameChange}
                                placeholder="name"
                                required type="text"
                                name="name"
                                id="name"
                                className="form-control"/>
                                <label htmlFor="name">Name</label>
                            </div>
                            <div>
                                <button className="btn btn-primary">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default CreateManufacturer;
