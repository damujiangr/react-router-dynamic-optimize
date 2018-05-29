import React from 'react';
import { Route, Link } from "react-router-dom";
import { Icon, Progress, Button } from 'antd';

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <Icon type="plus-circle" />
        <Icon type="question-circle" />
        <Icon type="check" />
        <Button type="primary">Primary</Button>
        <div>
            <Progress type="circle" percent={30} width={80} />
        </div>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route
            exact
            path={match.url}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
);

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);

export default Topics;