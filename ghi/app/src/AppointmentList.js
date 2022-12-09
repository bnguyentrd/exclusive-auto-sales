import React from 'react';


function AppointmentList({ appointments }) {
    const deleteService = async (id) => {

    fetch(`http://localhost:8080/api/appointment/${id}/`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
        }
    })
    window.location.reload();
    }

    const finishedService = async (id) => {
    fetch(`http://localhost:8080/api/appointment/${id}/`, {
        method: 'PUT',
        body: JSON.stringify({appointment_finished:true}),
        headers: {
        'Content-Type': 'application/json'
        }
    })
    window.location.reload();
    }


    return(
        <div>
        <h1>Appointment List</h1>
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Vin</th>
                <th> </th>
                <th>Customer name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Technician</th>
                <th>Reason</th>
            </tr>
            </thead>
            <tbody>
            {appointments?.filter(appointment => appointment.appointment_finished === false)
            .map(appointment => {
                return (
                <tr key={appointment.id}>
                    <td>{appointment.vin_appointment}</td>
                    <td>{appointment.vip ? 'VIP': false}</td>
                    <td>{appointment.customer_name}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.time}</td>
                    <td>{appointment.technician["name"]}</td>
                    <td>{appointment.reason}</td>
                    <td><button className="btn btn-success" onClick={() => finishedService(appointment.id)} type="button">Finished</button></td>
                    <td><button className="btn btn-danger" onClick={() => deleteService(appointment.id)} type="button">Cancel</button></td>
                </tr>
                );
            })}
            </tbody>
        </table>
        </div>
    );
}

export default AppointmentList;
