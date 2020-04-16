import React from 'react'
import {Input, Card, Button} from 'antd';

function EmeliesComp() {
    return (
        <div>
            <Card title="Login" style={
                {width:300, margin:20}}>
                <Input placeholder="Enter username" />
                <br />
                <Input placeholder="Enter password" />
                <br />
                <Button>Login</Button>
            </Card>
        </div>
    )
} 

export default EmeliesComp