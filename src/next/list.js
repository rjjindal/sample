import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../action/notesAction';

class List extends Component {

    render() {
        console.log(this.props);
        const list = (this.props.data.map(d =>
            <div key={d.id} style={{ position: 'relative', wordBreak: 'break-word', textOverflow: 'ellipsis' }}>
                <p style={{ fontSize: '16px', fontWeight: '500', marginRight: '25px', marginLeft: '10px' }}>{d.title}</p>
                <p style={{ marginRight: '25px', marginLeft: '10px' }}>{d.content}</p>
                <i class="fa fa-close" style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} onClick={() => {
                    console.log('hello', d.id);
                    this.props.deleteNote(d.id);
                }}></i>
                <hr />
            </div>))
        return (<div style={{ height: '100%'}}>
            {list}
        </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.data,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteNote: (id) => { dispatch(deleteNote(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);