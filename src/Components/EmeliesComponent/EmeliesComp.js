import React from 'react'
import {Input, Card, Button, Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';

function EmeliesComp() {
    return (
        <div>
            <h2 style={{color:'green', margin: 30}}>Välkommen!</h2>
            <Card style={
                {margin: 30, height: 140, color: 'green'}}>
                <Input placeholder="Enter username" style={{height:20, width:200}}/>
                <br />
                <Input placeholder="Enter password" style={{height:20, width:200}}/>
                <br />
                <br />
                <Avatar size={60} icon={<UserOutlined />} />
                <Button style={{width:100, height: 30}}>Login</Button>
            </Card>
        </div>
    )
} 

export default EmeliesComp