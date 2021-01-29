import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            rollno: '',
            className: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, rollno, className } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlfor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label htmlfor="rollno">Roll no.</label>
                <input
                    type="text"
                    name="rollno"
                    id="rollno"
                    value={rollno}
                    onChange={this.handleChange} />
                <label htmlfor="class">Class</label>
                <input
                    type="text"
                    name="className"
                    id="className"
                    value={className}
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;