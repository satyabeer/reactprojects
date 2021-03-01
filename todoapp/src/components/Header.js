import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button'

const Header = (props) => {

    // add task
    const addTask = async (event) => {
        // toggle form
        let taskForm = document.querySelector('.task-form-container');
        if (taskForm.classList.contains("hidden")) {
            taskForm.classList.remove("hidden");
        } else {
            taskForm.classList.add("hidden");
        }
    }

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <Link to="#" className="navbar-brand">
                <img src={logo} height="50" alt="CoolBrand" />
            </Link>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <Link to="#" className="nav-item nav-link active">Home</Link>
                    <Link to="#" className="nav-item nav-link">Profile</Link>
                    <Link to="#" className="nav-item nav-link">About Us</Link>
                    <Link to="#" className="nav-item nav-link">Contact Us</Link>
                </div>
                <div className="navbar-nav ml-auto">
                    <Button variant="success" onClick={addTask}>Add Task <FontAwesomeIcon icon={faPlus} /></Button>
                    <Button variant="primary">Login <FontAwesomeIcon icon={faSignInAlt} /></Button>
                </div>
            </div>
        </nav>
    )
}

export default Header;