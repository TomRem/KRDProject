import React, { Component } from 'react'
import axios from 'axios';

export class DeptorsTable extends Component {
    state = {
        deptors: [],
    }

    componentDidMount() {
        axios.get('http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetTopDebts')
        .then(res => {
            console.log(res);
            this.setState({
                deptors: res.data,
            })
        })
    }

    render() {
        return (
            <div>
                <ul>{this.state.deptors.map(deptor => <li>{deptor.Name}</li>)}</ul>
            </div>
        )
    }
}

export default DeptorsTable
