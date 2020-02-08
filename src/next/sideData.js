import React, { Component } from 'react';
import { AddNote } from '../action/notesAction';
import { connect } from 'react-redux';

 class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            flag: false,
            error: '',
            count: 0,
        }
    }
    addNote() {
        this.setState({
            flag: true,
        })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }
    handleClose(event) {
        event.preventDefault();
        this.setState({
            flag: false,
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.title.length > 0 && this.state.content.length > 0) {
            this.setState({

            })
            this.setState((state, props) => ({
                flag: false,
                count : state.count + 1
                          }));
            const dataaa = {id: this.state.count, title: this.state.title , content: this.state.content};
            this.props.addNote(dataaa)
            console.log(dataaa)
        } else {
            this.setState({
                error: 'please filled mandatory details'
            })

        }
    }
    render() {
        return (<div>
            <button onClick={this.addNote.bind(this)}>Add Notes</button>
            {this.state.flag && <form onSubmit={this.handleSubmit.bind(this)}>
                <div>        <label>
                    Title:
          <textarea id="title" className="text-input" value={this.state.title} rows="1" onChange={this.handleChange} />
                </label></div>
                <div>        <label>
                    Body:
          <textarea id="content" value={this.state.body} rows="10" onChange={this.handleChange} />
                </label></div>
                <div>    <input type="submit" value="Submit" /> <input type="submit" value="Close" onClick={this.handleClose.bind(this)} /></div>
                <br /><span style={{ color: "red" }}>{this.state.error}</span>
            </form>}
        </div>)
    }
}
const mapStateToProps = () => {}
const mapDispatchToProps = (dispatch) => {
    return {
        addNote: (data) => { dispatch(AddNote(data))}
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Main);