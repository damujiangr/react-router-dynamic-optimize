import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import Loadable from "react-loadable";

const Loading = () => <div>Loading...</div>;

// Load components with dynamic imports.
const Home = Loadable({
    loader: () => import('./App'),
    loading: Loading
});

const About = Loadable({
    loader: () => import('./components/About'),
    loading: Loading
});


const Third = Loadable({
    loader: () => import('./components/Third'),
    loading: Loading
});

const Topics = Loadable({
    loader: () => import('./components/Topics'),
    loading: Loading
});

// basic example of react router 4.x
const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
                <li>
                    <Link to="/third">Third</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/third" component={Third} />
            <Route path="/topics" component={Topics} />
        </div>
    </Router>
);

export default BasicExample;