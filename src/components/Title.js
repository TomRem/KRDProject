import React, { Component } from 'react'
import axios from 'axios';

export class Title extends Component {
    state = {
        debtsNumber: 0,
    }

    componentDidMount() {
        axios.get('http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetDebtsCount')
            .then(res => {
                console.log(res);
                this.setState({
                    debtsNumber: res.data,
                })
            })
    }

    render() {
        return (
            <header className="container">
                <div className="row">
                    <div className="col-sm">
                        <span>Podaj numer sprawy, nazwę lub Nip dlużnika</span>
                        <input></input>
                        <button>Szukaj</button>
                    </div>
                    <div className="col-sm">
                        <div>
                            {this.state.debtsNumber}
                    </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Title
