import React from 'react';

class Box extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "XGuy"
        }
    }

   
    render () {
        return (
            <div className="box-wrapper">
                {/* {this.props.name || "BOX"} */}
                {this.state.name || "BOX"}
            </div>
        )
    }
};

export default Box;