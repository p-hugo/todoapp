import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputPresenter from "./Input.presenter";

export default class InputContainer extends Component {

    static propTypes = {
        handleUpdate: PropTypes.func.isRequired
    }
    constructor(props){
        super(props);
        this.state = {
            value: ""
        }
    }

    /**
     * The typical onChange handler for inputs
     *
     */
    handleChange = ({target}) => {
        this.setState({
            value: target.value
        });
    };

    /**
     * Triggers the addTask method when the "Enter" key
     * is pressed
     *
     */
    handleKeyPress = ({key}) => {
        if(key === "Enter"){
            this.addTask(this.state.value);
            this.setState({
                value: ""
            });
        }
    };

    /**
     * Sends a POST request to the API with a description
     * of the task as the body. It then triggers the update
     * handler for the parent so that the List can be updated
     *
     * @param {string} description
     */
    addTask = (description) => {
        this.props.handleUpdate(description);
    };

    render(){
        return(
            <InputPresenter
                value={this.state.value}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
            />
        )
    }

}