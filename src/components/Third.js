import React from 'react';
import { Button, Icon, Progress } from 'antd';

const Third = () => (
    <div>
        <h2>Third</h2>
        <Button type="primary">Primary</Button>
        <Icon type="plus-circle" />
        <Icon type="question-circle" />
        <div>
            <Progress type="circle" percent={30} width={80} />
        </div>
    </div>
);

export default Third;