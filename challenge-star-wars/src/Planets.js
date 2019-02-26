import React, { Component } from 'react';
import $ from 'jquery';

export default class PlanetsBox extends Component {

    constructor() {
        super();
        this.state = { list: [] };
    };

    componenDidMount() {
        $.ajax({
            url: "https://swapi.co/api/planets/1",
            dataType: 'json',
            success: function (response) {
                this.setState({ list: response });
            }.bind(this)
        }
        );
    };

    render() {
        return (
            <div>

                <div className="header">
                    <h1>Planets</h1>
                </div>

                <div className="content" id="content">
                    <table className="pure-table">


                        <thead>
                            {
                                this.state.list.map(function (planet) {
                                    return (
                                        <tr>
                                            <th>Planet: {planet.name}</th>
                                        </tr>
                                    );
                                })
                            }
                        </thead>

                        <tbody>
                            {
                                this.state.list.map(function (planet) {
                                    return (
                                        <tr>
                                            <td>Population: {planet.population}</td>
                                            <td>Climate: {planet.climate}</td>
                                            <td>Terrain: {planet.terrain}</td>
                                            <td>Films: {planet.films}</td>
                                        </tr>
                                    );
                                })
                            }

                        </tbody>

                        <button type="submit" className="pure-button pure-button-primary" onSubmit={this.componenDidMount} method="get">Next Planet</button>

                    </table>
                </div>

            </div>
        );
    }
}
