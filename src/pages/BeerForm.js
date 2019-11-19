import React, { Component } from "react";

class Beerform extends Component {

    state = {
        // state will go here
    };

    handleInputChange = event => {

        const { name, value } = event.target;

        this.setState({
            [name]: value
        });

    };

    handleFormSubmit = event => {
        event.preventDefault();
        // this function will take user input from the html form and create an entry into the database
    };

    // will likely need a few more functions, build out here when needed

    render() {
        return (
            <>
            
            </>
        )
    }

};

export default Beerform;