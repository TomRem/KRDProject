import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
import Title from './components/Title'
import DeptorsTable from './components/DeptorsTable'
import NoSearchResult from "./components/NoSearchResults"
import Spinner from "./components/Spinner"

class App extends Component {

  state = {
    deptors: [],
    value: "",
    warningMessage: null,
    numberOfLetters: 0,
    loadSpinner: false
  }

  componentDidMount() {
    axios.get('http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetTopDebts')
      .then(res => {
        this.setState({
          deptors: res.data,
        })
      })
  }

  handleClick = () => {
    if (this.state.numberOfLetters >= 3) {
      const search = {
        Value: this.state.value
      };
      this.setState({
        loadSpinner: true
      })
      axios.post(`http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetFilteredDebts`, search)
        .then(res => {
          this.setState({
            deptors: res.data,
            warningMessage: "",
            loadSpinner: false
          })
        })
    } else {
      this.setState({
        warningMessage: "Musisz wpisac przynajmniej 3 znaki"
      })
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      numberOfLetters: event.target.value.length
    });
    if (this.state.numberOfLetters < 3) {
      this.setState({
        warningMessage: ""
      });
    }
  }

  render() {
    return (
      <>
        <Title handleChange={this.handleChange} handleClick={this.handleClick} value={this.state.value} warning={this.state.warningMessage} />
        {(this.state.loadSpinner) ? <Spinner /> : ((this.state.deptors.length !== 0) ? <DeptorsTable deptors={this.state.deptors} /> : <NoSearchResult />)}
      </>
    );
  }
}

export default App;
