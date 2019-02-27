import React, { Component } from 'react';
import $ from 'jquery';

export default class PlanetsBox extends Component {

    constructor() {
        super();
        this.state = { list: [] };
    };

    componentDidMount() {
        var id = Math.floor(Math.random() * 61 + 1);
        var apiUrl = "https://swapi.co/api/planets/" + id;

        $.ajax({
            url: apiUrl,
            dataType: 'json',
            type: 'get',
            success: function (response) {
                console.log(this);
                this.setState({ list: response });
            }.bind(this)
        });
    };

    render() {
        return (
            <div>

                <div className="header">
                    <h1>Planets</h1>
                </div>

                <div className="content" id="content" align="center">

                    <br></br>

                    <table className="pure-table">


                        <thead>
                            <tr>
                                <th align="center">Planet: {this.state.list.name}</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Population: {this.state.list.population}</td>
                            </tr>
                            <tr>
                                <td>Climate: {this.state.list.climate}</td>
                            </tr>
                            <tr>
                                <td>Terrain: {this.state.list.terrain}</td>
                            </tr>
                            <tr align="center">
                                <td>Featured in {this.state.list.films !== null && this.state.list.films !== undefined ? this.state.list.films.length : 'none'} Film(s)!!!</td>
                            </tr>
                        </tbody>

                    </table>

                    <br></br>

                    <div className="pure-control-group">
                        <button type="button" className="pure-button pure-button-primary" onClick={this.componentDidMount.bind(this)}>Next Planet</button>
                    </div>

                </div>

            </div>
        );
    }
}
