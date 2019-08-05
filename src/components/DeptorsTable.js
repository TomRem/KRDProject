import React, { Component } from 'react'

export class DeptorsTable extends Component {
    state = {
        show: true,
        index: null,
        show2: true,
    }

    handleClick = (index) => {
        this.setState({
            index,
        })
        if (index === this.state.index || this.state.show2 === false) {
            this.setState({
                show: !this.state.show,
                show2: !this.state.show2,
            })
        }
    }

    showAndHideAfterClicking = (index) => {
        return (this.state.index === index && this.state.show)
    }

    render() {
        let tableStyle = {
            background: '#ddd'
        }
        return (
            <>
                <table>
                    <thead >
                        <tr className="row">
                            <th className = "col-5">DŁUŻNIK</th>
                            <th className = "col-2">NIP</th>
                            <th className = "col-2">KWOTA ZADŁUŻENIA</th>
                        </tr>
                    </thead>
                    {this.props.deptors.map((deptor, index) =>
                        <>
                            <tbody>
                                <tr className="row" style={(this.showAndHideAfterClicking(index)) ? (tableStyle) : null}>
                                    <td className = "col-5">{(this.showAndHideAfterClicking(index)) ? (<span className="tableText">DŁUŻNIK<br /></span>) : null}{deptor.Name}</td>
                                    <td className = "col-2">{(this.showAndHideAfterClicking(index)) ? (<span className="tableText">NIP<br /></span>) : null}{deptor.NIP} </td>
                                    <td className = "col-2">{(this.showAndHideAfterClicking(index)) ? (<span className="tableText">KWOTA ZADŁUŻENIA<br /></span>) : null}{deptor.Value} </td>
                                    <td className = "col-2"></td>
                                    <td className = "col-1">
                                        <button style={(this.showAndHideAfterClicking(index)) ? (tableStyle) : null} onClick={this.handleClick.bind(this, index)}>
                                            {(this.showAndHideAfterClicking(index)) ? "Mniej" : "Więcej"}
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                            {(this.showAndHideAfterClicking(index)) ?
                                (
                                    <tbody>
                                        <tr className= "row" style={(this.showAndHideAfterClicking(index)) ? (tableStyle) : null}>
                                            <td className="col-5 secondRow">{(this.showAndHideAfterClicking(index)) ? (<span className="tableText">ADRES<br /></span>) : null}{deptor.Address} </td>
                                            <td className="col-2 secondRow">{(this.showAndHideAfterClicking(index)) ? (<span className="tableText">RODZAJ/TYP DOKUMENTU STANOWIĄCY PODSTAWĘ DLA WIERZYTELNOŚCI<br /></span>) : null}{deptor.DocumentType}</td>
                                            <td className="col-2 secondRow">{(this.showAndHideAfterClicking(index)) ? (<span className="tableText">CENA ZADŁUŻENIA<br /></span>) : null}{deptor.Price} </td>
                                            <td className="col-2 secondRow">{(this.showAndHideAfterClicking(index)) ? (<span className="tableText">NUMER<br /></span>) : null}{deptor.Number}</td>
                                            <td className="col-1"></td>
                                            </tr>
                                    </tbody>

                                ) : null}
                        </>
                    )}
                </table>
            </>
        )
    }
}

export default DeptorsTable
