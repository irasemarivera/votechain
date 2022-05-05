import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div className = 'navbar'>
                <Link to = '/' className = "heading">Home</Link>
                <Link to = '/CandidateDetails'>Candidates</Link>
                <Link to = '/RequestVoter'>Apply for voter</Link>
                <Link to = '/Vote'>Vote</Link>
            </div>
        );
    }
}

export default Navigation;