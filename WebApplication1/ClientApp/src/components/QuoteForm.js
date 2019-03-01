import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Quotes';

class QuoteForm extends Component {

    constructor(props) {
        super(props);
        this.formState = {
            stuff: "",
            author:""
        }
        
    }

    componentWillMount() {
        console.log(this.props)
    }


    handleChange = event => {
        console.log(event.target)
        this.formState[event.target.name] = event.target.value;
        this.props.updateForm(this.formState);
    }

    handleSubmit = event => {
        this.props.updateForm(this.formState);
        this.props.addQuote(this.formState);
        event.preventDefault();
    }


    render() {
       

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Quote</label>
                    <div>
                        <textarea name="stuff" type="text" onChange={this.handleChange} value={this.formState.stuff}></textarea>
                    </div>
                </div>
                <div>
                    <label>Author</label>
                    <div>
                        <input name="author" type="text" onChange={this.handleChange} value={this.formState.author} />
                    </div>
                </div> 
                <div>
                    <input type="submit" value="Add Quote" />
                </div>  
            </form>
        )
    }
}

export default connect(
    state => { return state.quotes },
    dispatch => { return bindActionCreators(actionCreators, dispatch) }
)(QuoteForm);
