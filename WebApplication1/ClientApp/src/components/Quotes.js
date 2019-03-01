import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Quotes';

class Quotes extends Component {

    componentWillMount() {
        
        this.props.requestQuotes();
    }

    render() {
        var quotes = [];
        if (this.props.quotes.length > 0) {
            quotes = this.props.quotes.map(q => {

                return (<blockquote key={q.quotesId}>{q.stuff}<small>  by <cite>{q.author}</cite> </small></blockquote>)


            })
            console.log(quotes);
        }
       
        return (
            <div>{quotes}</div>
       )
    }
}

export default connect(
    state => {  return state.quotes },
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Quotes);
