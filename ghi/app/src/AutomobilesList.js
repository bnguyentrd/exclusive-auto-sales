import React from 'react';

class AutomobilesList extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        automobiles: [],
    };
    
}

async componentDidMount() {
    const url = 'http://localhost:8100/api/automobiles/'
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        this.setState({ automobiles: data.automobiles });
    }
}


render() {
    return (
        <div className="container">
            <h1>Automobiles List</h1>
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
                        {this.state.automobiles.map((automobiles) => {
                            return (
                                <tr key={automobiles.href}>
                                    <td>{ automobiles.vin }</td>
                                    <td>{ automobiles.year }</td>
                                    <td>{ automobiles.model.name }</td>
                                    <td>{ automobiles.color }</td>
                                    <td>{ automobiles.model.manufacturer.name }</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
}

export default AutomobilesList;