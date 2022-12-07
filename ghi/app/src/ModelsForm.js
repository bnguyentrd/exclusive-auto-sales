class ModelsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            pictureUrl: '',
            manufacturers: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePictureChange = this.handlePictureChange.bind(this)
        this.handleManufacturerChange = this.handleManufacturerChange.bind(this)
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state}
        delete data.manufacturers;

        const modelsUrl = 'http://localhost:8100/api/models/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
    
            },
        };
        const response = await fetch(modelsUrl, fetchConfig);
        if (response.ok) {

            const cleared = {
                name: '', 
                
            }
        }
    }
}