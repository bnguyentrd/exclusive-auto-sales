import { useEffect, useState } from "react";

function SalesRepList() {
    const [salesRecords, setRecords] = useState([]);
    const [salesRep, setRep] = useState([]);
    const [option, setOption] = useState([]);
    const [repsRecords, setRepsRecords] = useState([]);

    async function loadRep() {
        const response = await fetch("http://localhost:8090/api/salesreps/");

        if (response.ok) {
            let data = await response.json();
            setRep(data.sales_reps);
        }
        else {
            console.error("Bad rep response", response);
        }
    }

    function handleChange(event) {
        setOption(event.target.value)
        const value = event.target.value;
        loadRecords(value);
    }

    async function loadRecords(id) {
        const response_rec = await fetch("http://localhost:8090/api/salesrecords");
        
        if (response_rec.ok) {
            const data_rec = await response_rec.json();
            setRecords(data_rec.sales_records);
            const records = data_rec.sales_records;

            const temp = [];
            for (let record of records) {
                if (record.sales_rep_id === id) {
                    temp.push(record);
                }
            }
            setRepsRecords(temp);
        }
        else {
            console.error("Bad records response", response_rec);
        }
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    useEffect(() => { loadRep(); }, [])

    return (
        <div>
            <h1>Sales Rep History List</h1>
            <div className="form-floating mb-3">
                <div className="mb-3">
                    <select 
                    onChange={handleChange}
                    required name="salesRep"
                    className="form-select">
                        <option value="">Choose a Sales Rep</option>
                        {salesRep.map((rep, i) => {
                            return (
                                <option key={i} value={rep.employee_id}>
                                    {rep.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Sales Rep Name</th>
                        <th>Customer Name</th>
                        <th>Automobile VIN</th>
                        <th>Sale Price</th>
                    </tr>
                </thead>
                <tbody>
                    {repsRecords.map((record, i) => {
                        return (
                            <tr key={i}>
                                <td>{ record.sales_rep_name }</td>
                                <td>{ record.sales_customer }</td>
                                <td>{ record.sales_automobile }</td>
                                <td>{ formatter.format(record.sales_price) }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default SalesRepList;