import React from "react";
import './ActivityDetail.css';
import '../../globalstyles.css';
class ActivityDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            image: '',
            prerequisites: [],
            instructors: [],
            tags: []
        }
    }

    componentDidMount() {
        const { handle } = this.props.match.params
        const data = this.props.location.state
        //Add a setState once backend is connected
        this.setState({
            name: data.activity,
            description: data.description,
            image: data.imageUrl,
            prerequisites: data.prerequisites,
            instructors: data.instructors,
            tags: data.tags
        })
    }

    render() {
        const instructors = this.state.instructors.map(instructor => <li key={instructor}>{instructor}</li>);
        return (
            <div align='center'>
                <img className='activityMainImage' src={this.state.image} ></img>
                <h1 className='activityName'>{this.state.name}</h1>
                <p className='activityDescription'>{this.state.description}</p>
                <div align='center'>
                    <h3>Instruktörer</h3>
                    <ul>
                        {instructors}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ActivityDetail;