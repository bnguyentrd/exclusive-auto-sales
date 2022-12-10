import React from "react";

class AppointmentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vin: '',
            appointments: []
        }


        this.handleCancel = this.handleCancel.bind(this)
        this.handleFinished = this.handleFinished.bind(this)

    }

    async handleFinished(event) {
        const value = event.target.value;
        const appointmentUrl = `http://localhost:8080/api/appointment/${value}/`;
        const fetchConfig = {
            method: "put",
        };

        const response = await fetch(appointmentUrl, fetchConfig);
        const appointmentFinished = await response.json();
        console.log(appointmentFinished);
        if (response.ok) {
            this.componentDidMount();
        }
    }



    async handleCancel(event) {
        const value = event.target.value;
        const appointmentUrl = `http://localhost:8080/api/appointment/${value}/`;
        const fetchConfig = {
            method: "delete",
        };

        const response = await fetch(appointmentUrl, fetchConfig);
        const appointmentDeleted = await response.json();
        if (response.ok) {
            this.componentDidMount();
        }
    }

    async componentDidMount() {
        const url = 'http://localhost:8080/api/appointment/'
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            this.setState({ appointments: data.appointments })
        }
    };


    render() {
        return (
            <div>
                <h1>Appointment List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Vin</th>
                            <th>Owner</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Technician</th>
                            <th>Reason</th>
                            <th>VIP</th>
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
                                    <td>{appointment.technician["name"]}</td>
                                    <td>{appointment.reason}</td>
                                    <td>{appointment.vip ? 'VIP' : false}</td>
                                    <td><button className="btn btn-danger"
                                        onClick={this.handleFinished}
                                        value={appointment.id}
                                    >
                                        Finished
                                    </button></td>
                                    <td><button className="btn btn-danger"
                                        onClick={this.handleCancel}
                                        value={appointment.id}
                                    >
                                        Cancel
                                    </button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    };

}



export default AppointmentList;
