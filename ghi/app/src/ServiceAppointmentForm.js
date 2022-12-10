import React from 'react'

class ServiceAppointmentForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            vin: '',
            owner: '',
            dateTime: '',
            reason: '',
            technicians: [],
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleVinChange = this.handleVinChange.bind(this)
        this.handleOwnerChange = this.handleOwnerChange.bind(this)
        this.handleDateTimeChange = this.handleDateTimeChange.bind(this)
        this.handleReasonChange = this.handleReasonChange.bind(this)
        this.handleTechnicianChange = this.handleTechnicianChange.bind(this)



    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state }
        data.date_time = data.dateTime
        delete data.dateTime
        delete data.owner
        delete data.reason
        delete data.technicians
        const technicianUrl = "http://localhost:8080/api/appointment/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }
        const response = await fetch(technicianUrl, fetchConfig)
        if (response.ok) {
            const newServiceAppointment = await response.json()

            const cleared = {
                vin: "",
                owner: "",
                dateTime: "",
                reason: "",
                technicians: [],
            }
            this.setState(cleared);
        }
    }

    async componentDidMount() {
        const url = 'http://localhost:8080/api/technician/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            this.setState({ technicians: data.technicians })
        }
    };

    handleVinChange(event) {
        const value = event.target.value;
        this.setState({ vin: value })
    }

    handleOwnerChange(event) {
        const value = event.target.value;
        this.setState({ owner: value })
    }

    handleDateTimeChange(event) {
        const value = event.target.value;
        this.setState({ dateTime: value })
    }

    handleReasonChange(event) {
        const value = event.target.value;
        this.setState({ reason: value })
    }

    handleTechnicianChange(event) {
        const value = event.target.value;
        this.setState({ technician: value })
    }


    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create New Service Appointment</h1>
                        <form onSubmit={this.handleSubmit} id="create-service-appointment-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleVinChange}
                                    placeholder="Vin"
                                    required type="text"
                                    value={this.state.vin}
                                    name="vin"
                                    id="vin"
                                    className="form-control" />
                                <label htmlFor="vin">VIN</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleOwnerChange}
                                    placeholder="Owner"
                                    required type="text"
                                    value={this.state.owner}
                                    name="owner"
                                    id="owner"
                                    className="form-control" />
                                <label htmlFor="owner">Owner</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleDateTimeChange}
                                    placeholder="Date and Time"
                                    required type="datetime-local"
                                    value={this.state.dateTime}
                                    name="date_and_time"
                                    id="date_and_time"
                                    className="form-control" />
                                <label htmlFor="date_and_time">Date and Time</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleReasonChange}
                                    placeholder="Reason"
                                    required type="text"
                                    name="reason"
                                    value={this.state.reason}
                                    id="reason"
                                    className="form-control" />
                                <label htmlFor="reason">Reason</label>
                            </div>
                            <div className="mb-3">
                                <select onChange={this.handleTechnicianChange}
                                    required id="technician"
                                    name="technician"
                                    className="form-select">
                                    <option value="">Technician</option>
                                    {this.state.technicians.map(technician => {
                                        return (
                                            <option key={technician.name} value={technician.employee_number}>
                                                {technician.name}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <button className="btn btn-success btn-default">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default ServiceAppointmentForm;
