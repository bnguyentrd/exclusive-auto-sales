import React from "react";

class SalesRepForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      employeeId: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmployeeIdChange = this.handleEmployeeIdChange.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    data.employee_id = data.employeeId;
    delete data.employeeId;


    const postUrl = 'http://localhost:8090/api/salesreps/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(postUrl, fetchConfig);
    if (response.ok) {
      const newRep = await response.json();
    }

    const cleared = {
      name: '',
      employeeId: '',
    };

    this.setState(cleared);

  }


  handleNameChange(event) {
    const value = event.target.value;
    this.setState({ name: value })
  }

  handleEmployeeIdChange(event) {
    const value = event.target.value;
    this.setState({ employeeId: value })
  }


  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a Sales Rep</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-floating mb-3">
                <input onChange={this.handleNameChange}
                  placeholder="Name"
                  value={this.state.name}
                  required type="text"
                  id="name"
                  name="name"
                  className="form-control" />
                <label htmlFor="fabric">Sales Rep Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleEmployeeIdChange}
                  placeholder="EmployeeId"
                  value={this.state.employeeId}
                  required type="text"
                  id="employeeId"
                  name="employeeId"
                  className="form-control" />
                <label htmlFor="employeeId">Employee ID</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SalesRepForm;
