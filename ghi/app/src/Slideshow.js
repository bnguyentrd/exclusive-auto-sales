import React from 'react';

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  // Move to the previous slide
  previousSlide = () => {
    const { currentIndex } = this.state;
    const { vehicleModels } = this.props;
    const lastIndex = vehicleModels.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;

    this.setState({
      currentIndex: index,
    });
  }

  // Move to the next slide
  nextSlide = () => {
    const { currentIndex } = this.state;
    const { vehicleModels } = this.props;
    const lastIndex = vehicleModels.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;

    this.setState({
      currentIndex: index,
    });
  }


    render() {
        const { currentIndex } = this.state;
        const { vehicleModels } = this.props;
    
    return (
      <div className="slideshow">
        {/* Previous button */}
  
        {/* Current slide */}
        {vehicleModels.length > 0 && (
          <div>
            {/* Name of the vehicle model */}
            <h1>
                {vehicleModels[currentIndex].manufacturer.name}
            </h1>
            
            <h2>
                {vehicleModels[currentIndex].name}
            </h2>
  
            {/* Picture of the vehicle model */}
            <img src={vehicleModels[currentIndex].picture_url} alt="vehicle" height="400" width="700" />
          </div>
        )}
  
        {/* Next button */}
        <button type="button" 
        class="btn btn-dark" 
        style={{ marginRight: 140, width: 280}} 
        onClick={this.previousSlide}>
          Previous
        </button>

        <button type="button" 
        class="btn btn-dark" 
        style = {{ width: 280 }} 
        onClick={this.nextSlide}>
          Next
        </button>
      </div>
    );
  }
}

export default Slideshow;