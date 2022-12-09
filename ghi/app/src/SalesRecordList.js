import { useEffect, useState } from "react";

function SalesRecordList() {
    const [salesRecords, setRecords] = useState([]);

    async function loadRecords() {
        const response = await fetch("http://localhost:8090/api/salesrecords/");

        if (response.ok) {
            let data = await response.json();
            setRecords(data.sales_records);
        }
        else {
            console.error("Bad Response", response);
        }
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    useEffect(() => { loadRecords(); }, [])

    return (
        <div>
            <h1>Sales Records</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Sales Rep's Name</th>
                        <th>Employee's ID</th>
                        <th>Sales customer's Name</th>
                        <th>Automobile's VIN</th>
                        <th>Sale's price</th>
                    </tr>
                </thead>
                <tbody>
                    {salesRecords.map((record, i) => {
                        return (
                            <tr key={i}>
                                <td>{ record.sales_rep_name }</td>
                                <td>{ record.sales_rep_id }</td>
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

export default SalesRecordList;