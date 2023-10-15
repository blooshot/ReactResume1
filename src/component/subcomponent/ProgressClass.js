import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint'
import { useDataContext } from '../../Provider/DataProvider';

export class ProgressClass extends Component {

    constructor(props) {
        super(props);
        this._handleEnter = this._handleEnter.bind(this);
    }

    _handleEnter(e) {
        let progress = e.event != null ? e.event.target.querySelector('#' + this.props.skillname) : null

        if (progress) {
            progress.style.width = this.props.percentage + '%';
        } else {
            console.log("progress not found")
        }
    }

    render() {
        return (
            <Waypoint onEnter={this._handleEnter}>
                <div className="progress">
                    <span className="skill">{this.props.skillname} <i className="val">{this.props.percentage}%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" id={this.props.skillname} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </Waypoint>
        )
    }
}

export default ProgressClass