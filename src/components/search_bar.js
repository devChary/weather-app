import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' }
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }
}