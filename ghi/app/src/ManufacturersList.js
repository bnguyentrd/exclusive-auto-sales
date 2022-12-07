import React from 'react';


class ManufacturersList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            manufacturers: [],
        }
        this.getManufacturers = this.getManufacturers.bind(this)
    }

    async getManufacturers() {
        const manufacturersUrl = 'http://localhost:8100/api/manufacturers/'
        try {
            const manufacturersResponse = await fetch(manufacturersUrl)
            if (manufacturersResponse.ok) {
                const manufacturersData = await manufacturersResponse.json()
                this.setState({
                    manufacturers: manufacturersData.manufacturers,
                })
            }
        } catch (error) {
            console.error(error)
        }
    }

    async componentDidMount() {
        this.getManufacturers()
    }

    render() {
        return (
            <>
            <table className="table table-striped">
                <h1>Manufacturers</h1>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.manufacturers.map(manufacturers => {
                        return (
                            <tr key={ manufacturers.id }>
                                <td>{ manufacturers.name }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </>
        )
    }

}

export default ManufacturersList;
