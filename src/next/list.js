import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../action/notesAction';

 class List extends Component {

    handleDelete =(e) => {
        console.log('hello',e);
        this.props.deleteNote()
    }
render(){
    console.log(this.props);
    const list = (this.props.data.map(d=> 
    <div key={d.id}>
        <p>{d.title}</p>
        <p>{d.content}</p>
        <button onClick={() => {
        console.log('hello',d.id);
        this.props.deleteNote(d.id)
    }}>Delete</button>
        </div>))
    return (<div>
        {list}
    </div>)
}
}
const mapStateToProps = (state)=> {
    return {
        data: state.data,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteNote: (id) => { dispatch(deleteNote(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);