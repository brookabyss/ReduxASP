import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Quotes from './components/Quotes';
import QuoteForm from './components/QuoteForm';



export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
    <Route path='/quotes' component={Quotes} />
    <Route path='/newQuote' component={QuoteForm} />

  </Layout>
);
