import React from 'react';


function AutomobilesList(props) {

    return (
        <div className="container">
            <h1 className="display-5">Automobiles List</h1>
            <div className="row">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>VIN</th>
                            <th>Year</th>
                            <th>Model</th>
                            <th>Color</th>
                            <th>Manufacturer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.automobiles.map(automobile => {
                            return (
                                <tr key={automobile.href}>
                                    <td>{ automobile.vin }</td>
                                    <td>{ automobile.year }</td>
                                    <td>{ automobile.model.name }</td>
                                    <td>{ automobile.color }</td>
                                    <td>{ automobile.model.manufacturer.name }</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AutomobilesList;