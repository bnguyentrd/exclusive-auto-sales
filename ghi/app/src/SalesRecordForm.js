import React from "react";

class SaleRecordForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      price: '',
      salesReps: [],
      salesCustomers: [],
      automobiles: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleSalesRepChange = this.handleSalesRepChange.bind(this);
    this.handleSalesCustomerChange = this.handleSalesCustomerChange.bind(this);
    this.handleAutoChange = this.handleAutoChange.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    data.sales_price = data.price;
    data.sales_automobile = data.automobile;
    data.sales_rep = data.salesRep;
    data.sales_customer = data.salesCustomer;
    delete data.price;
    delete data.automobile;
    delete data.salesRep;
    delete data.salesCustomer;
    delete data.salesReps;
    delete data.salesCustomers;
    delete data.automobiles;


    const postUrl = 'http://localhost:8090/api/salesrecords/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(postUrl, fetchConfig);
    if (response.ok) {
      const newSale = await response.json();
    }

    const cleared = {
      price: '',
      salesRep: '',
      salesCustomer: '',
      automobile: '',
    };

    this.setState(cleared);

  }

  handlePriceChange(event) {
    const value = event.target.value;
    this.setState({ price: value })
  }

  handleSalesRepChange(event) {
    const value = event.target.value;
    this.setState({ salesRep: value })
  }

  handleSalesCustomerChange(event) {
    const value = event.target.value;
    this.setState({ salesCustomer: value })
  }

  handleAutoChange(event) {
    const value = event.target.value;
    this.setState({ automobile: value })
  }

  async componentDidMount() {
    const urlRecords = 'http://localhost:8090/api/salesrecords/';

    const response_rec = await fetch(urlRecords);

    if (response_rec.ok) {
      const data = await response_rec.json();
      const records = data.sales_records;


      const soldAutos = [];
      records.map(record => { soldAutos.push(record.sales_automobile) });


      const url = 'http://localhost:8100/api/automobiles/';
      const response_auto = await fetch(url);

      if (response_auto.ok) {
        const data = await response_auto.json();
        const unfiltered = data.autos;

        const autos = unfiltered.filter(auto => !soldAutos.includes(auto.vin))

        this.setState({ automobiles: autos });

      }
    }

    const urlRep = 'http://localhost:8090/api/salesreps/';

    const response_rep = await fetch(urlRep);

    if (response_rep.ok) {
      const data = await response_rep.json();

      this.setState({ salesReps: data.sales_reps });

    }

    const urlCustomer = 'http://localhost:8090/api/salescustomers/';

    const response_cust = await fetch(urlCustomer);

    if (response_cust.ok) {
      const data = await response_cust.json();

      this.setState({ salesCustomers: data.sales_customers });

    }
  }

  render() {

    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a New Sale Record</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-floating mb-3">
                <input onChange={this.handlePriceChange}
                  placeholder="price"
                  value={this.state.price}
                  required type="number"
                  min="1000"
                  step="100"
                  name="price"
                  className="form-control" />
                <label htmlFor="price">Sale price</label>
              </div>
              <div className="mb-3">
                <select onChange={this.handleAutoChange}
                  required id="automobile"
                  name="automobile"
                  className="form-select">
                  <option value="">Choose an Automobile</option>
                  {this.state.automobiles.map(automobile => {
                    return (
                      <option key={automobile.vin} value={automobile.vin}>
                        {automobile.vin}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <select onChange={this.handleSalesRepChange}
                  required id="salesReps"
                  name="salesReps"
                  className="form-select">
                  <option value="">Choose a Sales Rep</option>
                  {this.state.salesReps.map(salesRep => {
                    return (
                      <option key={salesRep.employee_id} value={salesRep.employee_id}>
                        {salesRep.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <select onChange={this.handleSalesCustomerChange}
                  required id="salesCustomers"
                  name="salesCustomers"
                  className="form-select">
                  <option value="">Choose a Customer</option>
                  {this.state.salesCustomers.map(salesCustomer => {
                    return (
                      <option key={salesCustomer.phone_number} value={salesCustomer.phone_number}>
                        {salesCustomer.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SaleRecordForm;
