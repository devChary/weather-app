import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';

import * as actions from '../actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' }
    }

    onInputChange = e => {
        this.setState({ term: e.target.value });
    }

    onFormSubmit = e => {
        e.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <Form layout="inline" onSubmit={this.onFormSubmit}>
                <Form.Item>
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Type any city to get Weather Forecast"
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Search
          </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default connect(null, actions)(SearchBar);