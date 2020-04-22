import React from "react";

class ActivityDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Activity Name',
            description: 'Activity Description'
        }
    }

    componentDidMount() {
        const { handle } = this.props.match.params
        const data = this.props.location.state
        //Add a setState once backend is connected
    }

    render() {
        return (
            <div align='center'>
                <h1>{this.state.name}</h1>
                <p>{this.state.description}</p>
            </div>
        )
    }
}

export default ActivityDetail;