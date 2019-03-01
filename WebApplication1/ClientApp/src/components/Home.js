import React from 'react';
import { connect } from 'react-redux';

const Home = props => (
    <div>
        <blockquote>
            Retirement is the ugliest word in the language.
           <small>  by <cite>Ernest Hemingway</cite> </small>
        </blockquote>
    </div>
);

export default connect()(Home);
