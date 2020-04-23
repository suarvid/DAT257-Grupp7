import React from "react";
import './ActivityDetail.css';
import { Link } from 'react-router-dom';
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
        const data = this.props.location.state
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
        const instructors = this.state.instructors.map(instructor => <Link><li className="instructor">{instructor}</li></Link>);
        const tags = this.state.tags.map(tag => <li className="tag">{tag}</li>)
        return (
            <div>
                <div className='activityDetailContainer'>
                    <img className='activityMainImage' src={this.state.image} ></img>
                    <h1 className='activityName'>{this.state.name}</h1>
                    <p className='activityDescription'>{this.state.description}</p>
                    <br />

                    <div>
                        <ul>{tags}</ul>
                        <h3 className="subHeader">Instruktörer</h3>
                        <ul>
                            {instructors}
                        </ul>
                        
                        <button id="showActivityButton"><Link style={{ textDecoration: 'none', color: 'white'}}>Visa alla {this.state.name}pass </Link></button>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default ActivityDetail;