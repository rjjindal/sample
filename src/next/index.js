import React, { Component } from 'react';
import List from './list';
import Main from './sideData';
import './next.css';

export default class Next extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
        }
    }

render(){
    return (<div className="project-container" style={{ position: 'relative' }}>
        <div style={{ background: 'aquamarine', height: 'auto', display: '-webkit-box' }}>
           <p style={{ textAlign: 'left' }}>G Notes</p> 
        </div>
        <div className="container-">
            <div className="left-list-container" style={{ width: '30%', height: '100%' }}><List /></div>
            <div style={{ width: '70%' }}><Main /></div>
        </div>
    </div>)
}
}