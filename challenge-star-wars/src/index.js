import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomeBox from './Home';
import PlanetsBox from './Planets';
import ContactBox from './Contact';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    (<Router>
        <App>
            <Switch>
                <Route exact path="/" component={HomeBox} />
                <Route path="/planets" component={PlanetsBox} />
                <Route path="/contact" component={ContactBox} />
            </Switch>
        </App>
    </Router>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
