import React from "react";

export default class InstructorDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {},
            email: {},
            imageurl: {},
            activities: [],
        }
    }


    componentDidMount() {
        console.log("Component Mounted");
        this.setState({
            name: this.props.data.name,
            email: this.props.data.email,
            imageurl: this.props.data.image,
        })
    }


    render() {
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.email}</h1>
                <h1>{this.state.imageurl}</h1>
            </div>
        )
    }
}