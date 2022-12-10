import React from "react";

class ServiceHistory extends React.Component {
    constructor(props){
        super(props)
        this.state={
            vin:'',
            appointments:[]
        }
        this.handleSearch=this.handleSearch.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    async componentDidMount() {
        const url = 'http://localhost:8080/api/appointment/'
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            this.setState({ appointments: data.appointments })
        }
    }

    async handleSearch(event){
        const value = event.target.value;
        this.setState({vin:value})

    }

    async handleSubmit(event){
        event.preventDefault()
        const url='http://localhost:8080/api/appointment/'
        const response = await fetch(url)
        const vin = this.state.vin
        if (response.ok) {
            const data = await response.json()
            const appointments = data.appointments;
            let appointment = appointments.filter((appointment) =>
                appointment.vin.includes(vin)
            )
            this.setState({ appointments: appointment })
        }
    }

    render() {
        return (
            <>
            <br></br>
            <div className="input-group mb-3">
                <input type="text"
                onChange={this.handleSearch}
                className="form-control"
                placeholder="Search VIN"
                aria-label="Search VIN"
                aria-describedby="button-addon2" />
                <button onClick={this.handleSubmit}
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2">Search</button>
            </div>
            <div className="container">
                <h1>Service History</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>VIN</th>
                            <th>Owner</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Technician</th>
                            <th>Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.appointments.map(appointment => {
                            return (
                                <tr key={appointment.id}>
                                    <td>{appointment.vin}</td>
                                    <td>{appointment.owner}</td>
                                    <td>{new Date(appointment.date_time).toLocaleDateString()}</td>
                                    <td>{new Date(appointment.date_time).toLocaleTimeString()}</td>
                                    <td>{appointment.technician.name}</td>
                                    <td>{appointment.reason}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            </>
        )
    }
}

export default ServiceHistory;
