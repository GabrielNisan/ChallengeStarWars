import React, { Component } from 'react';

export default class ContactBox extends Component {
    render() {
        return (
            <div>

                <div className="header">
                    <h1>Contact</h1>
                </div>

                <div className="content" id="content">
                    <br></br>
                    <h3><p>Developer: Gabriel Nisã Brandão Casaes Monteiro</p></h3>
                    <h3><p>E-mail: gabrielnisabcmonteiro@hotmail.com</p></h3>
                    <h3><p>Linkedin: <a href="https://www.linkedin.com/in/gabriel-nis%C3%A3-bc-monteiro-3ab86a61/" rel="external">Gabriel Monteiro</a></p></h3>
                    <h3><p>GitHub: <a href="https://github.com/GabrielNisan" rel="external">Gabriel Monteiro</a></p></h3>
                    <h3><p>Bitbucket: <a href="https://bitbucket.org/gabrielnisanbcmonteiro/" rel="external">Gabriel Monteiro</a></p></h3>
                    <h3><p>Stack Overflow: <a href="https://stackoverflow.com/users/5175122/gabriel-nis%C3%A3-bc-monteiro" rel="external">Gabriel Monteiro</a></p></h3>
                </div>

            </div>
        );
    }
}