import React from 'react';


class AutomobilesList extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            automobiles: [],
            automobiles_copy:[],
            manufacturers: [],
            checked_manu: [],
            records: [],
            manu_len: 0,
        }
        this.handleFieldChange = this.handleFieldChange.bind(this);
    }


    handleFieldChange(event) {
        const value = event.target.value;
        if (this.state.checked_manu.includes(value)) {
            const manus = this.state.checked_manu.filter(e => e !== value);
            const result = this.state.manu_len - 1;
            this.setState({manu_len: result})
            if (result === 0){
                this.setState({automobiles: this.state.automobiles_copy})
                this.setState({checked_manu: []})
            }else{
                this.setState({checked_manu: manus})
                const manus1 = [];
                for(const manu of manus){
                    for (const automobile of this.state.automobiles_copy){
                        if (automobile.model.manufacturer.name === manu){
                            manus1.push(automobile)
                        }
                    }
                }
                this.setState({automobiles: manus1})
            }
        
        }else{
            const result = this.state.manu_len + 1;
            this.setState({manu_len: result})
            this.state.checked_manu.push(value);
            const manus = [];
            for(const manu of this.state.checked_manu){
                for (const automobile of this.state.automobiles_copy){
                    if (automobile.model.manufacturer.name === manu){
                        manus.push(automobile)
                    }
                }
            }
            this.setState({automobiles: manus})
        }
    }

    
    async componentDidMount() {
        const url = "http://localhost:8100/api/automobiles/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({automobiles: data.autos, automobiles_copy: data.autos});
        };

        const url_manu = "http://localhost:8100/api/manufacturers/";
        const response_m = await fetch(url_manu);
        if (response_m.ok) {
            const data = await response_m.json();
            this.setState({manufacturers: data.manufacturers});
        };
        
        const url_record = "http://localhost:8090/api/salesrecords/";
        const response_record = await fetch(url_record);
        if (response.ok) {
            const data = await response_record.json();
            this.setState({records: data.sales_records});
        };

        for (const record of this.state.records){
            for (const automobile of this.state.automobiles_copy){
                if (record.sales_automobile.vin === automobile.vin){
                    automobile.is_sold = true;
                }
            }
        }
    }

    render() {
        return (
            <div>
                <h2 className="mt-5"><b>Automobiles</b></h2>
                <div>
                    <div className="checkbox_manufacturerlist">
                        {this.state.manufacturers.map(manufacturer => {
                            let count = 0;
                            for (const automobile of this.state.automobiles_copy) {
                                if (automobile.model.manufacturer.name === manufacturer.name){
                                    count += 1;
                                }
                            }
                                return (
                                    <div key={manufacturer.id} className="checkbox1">
                                        <input
                                            id={ manufacturer.id }
                                            value = {manufacturer.name}
                                            type="checkbox"
                                            title="show first category products"
                                            name="name"
                                            onChange={this.handleFieldChange}
                                            className="form-check-input checkbox_check"
                                            />
                                            <label className="form-check-label" htmlFor="myInput">{manufacturer.name} ({count})</label>
                                    </div>
                                );
                            })}
                    </div>

                    <table className="table table-striped table_manufacturerlist">
                        <thead>
                            <tr>
                                <th>VIN</th>
                                <th>Color</th>
                                <th>Year</th>
                                <th>Model</th>
                                <th>Manufacturer</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.automobiles.map(automobile => {
                                return (
                                    <tr key={automobile.id}>
                                        <td>{ automobile.vin }</td>
                                        <td>{ automobile.color }</td>
                                        <td>{ automobile.year }</td>
                                        <td>{ automobile.model.name }</td>
                                        <td>{ automobile.model.manufacturer.name }</td>
                                        <td>{ automobile.is_sold ?
                                            <b className='soldtag'>SOLD</b>: "" }</td>
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
