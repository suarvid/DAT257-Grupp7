import React from "react";
import './ActivityDetail.css';
import '../../../src/globalstyles.css';

class ActivityDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activitydata:{
            imageUrl: '',
            activityType: '',
            description: '',
            activityID: ''
            }
        }
        this.viewAllClasses = this.viewAllClasses.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        const data = this.props.location.state
        this.setState({
            activitydata:data
        })
    }
    viewAllClasses(){
        this.props.history.push({
            pathname: `../../boka/`,
            filter: this.state.activitydata.activityID
        });
    }
    goBack(){
        this.props.history.push({
            pathname: `../../aktiviteter`
        });
    }

    render() {
        const{imageUrl, activityType, description} = this.state.activitydata;
        return (
            <div className='activityDetailContainer'> 
                <h1 className='activityTitle'>{this.state.name}</h1>
                <div className="activityImageContainer">
                    <img className='activityImage' src={this.state.image} alt={this.state.name} />
                </div>
                <div className = 'postContent'>
                    <p>{this.state.description}</p>
                </div>
                <div align="center">
                    <button className="secondary_button_large" onClick = {this.goBack}>
                        Tillbaka
                    </button>
                    <button className="primary_button_large" onClick = {this.viewAllClasses}>
                        Visa kommande pass
                    </button>
                   
                </div>
            </div>

        )
    }
}

export default ActivityDetail;