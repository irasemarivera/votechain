import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationAdmin extends Component {
    render() {
        return (
            <div className = 'navbar'>
                <div className = "Admin">Admin</div>
                <Link to = '/' className = "heading">Home</Link>
                <Link to = '/CandidateDetails'>Candidates</Link>
                <Link to = '/RequestVoter'>Apply for voter</Link>
                <Link to = '/Vote'>Vote</Link>
                <Link to = '/VerifyVoter'>Verify voter</Link>
                <Link to = '/AddCandidate'>Add candidate</Link>
                <Link to = '/Result'>Results</Link>
                <Link to = '/Admin'>Start/End</Link>
            </div>
        );
    }
}

export default NavigationAdmin;