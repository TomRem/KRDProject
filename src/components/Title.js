import React, { Component } from 'react'
import axios from 'axios';

export class Title extends Component {
    state = {
        debtsNumber: 0,
    }

    componentDidMount() {
        axios.get('http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetDebtsCount')
            .then(res => {

                this.setState({
                    debtsNumber: res.data,
                })
            })
    }

    render() {
        return (
            <header className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-5 titleText">
                        Podaj numer sprawy, nazwę lub Nip dlużnika</div>
                    <div className="col-5 redText">
                        Całkowita ilość spraw
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-5">
                        <input type="text" value={this.props.value} onChange={this.props.handleChange}></input>
                        <button id="searchButton" onClick={this.props.handleClick}><span className="titleText">Szukaj</span></button>
                        <div className="threeLetters">{this.props.warning}</div>
                    </div>
                    <div className="col-5 totalNumberOfCases" >
                        {this.state.debtsNumber}
                    </div>
                </div>
            </header>
        )
    }
}
export default Title
