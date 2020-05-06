import React from "react";
import './ActivityDetail.css';
import '../../../src/globalstyles.css';
import { Link } from 'react-router-dom';
class ActivityDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            image: '',
            instructors: [],
            tags: []
        }
    }

    componentDidMount() {
        const data = this.props.location.state
        this.setState({
            name: data.name,
            description: data.description,
            image: data.image,
        })
    }

    render() {
        //const instructors = this.state.instructors.map(instructor => <Link><li className="instructor">{instructor}</li></Link>);
        //const tags = this.state.tags.map(tag => <li className="tag">{tag}</li>)
        return (
            <div className='activityDetailContainer'>
                <div className="activityHeader">
                    <img className='activityMainImage' src={this.state.image} alt={this.state.name} />
                    <h1 className='activityName'>{this.state.name}</h1>
                </div>
                <div className = 'activityDescription'>
                    <p>{this.state.description}</p>
                </div>
                <div align="center">
                    <button className="primary_button_large">
                        <Link style={{ textDecoration: 'none', color: 'white' }}>Visa alla {this.state.name}pass
                            </Link>
                    </button>
                </div>
            </div>

        )
    }
}

export default ActivityDetail;