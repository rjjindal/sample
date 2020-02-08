import React, { Component } from 'react';
import List from './list';
import Main from './sideData';

export default class Next extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
        }
    }

render(){
    return (<div>
        <div style={{ background: 'aquamarine', height: 'auto', display: '-webkit-box' }}>
           <p style={{ textAlign: 'left' }}>G Notes</p> 
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ width: '25%', height: '100vh', background: 'green' }}><List /></div>
            <div style={{ width: '75%' }}><Main /></div>
        </div>
    </div>)
}
}