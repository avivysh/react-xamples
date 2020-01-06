import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.js';
import UserSection from "./users/UserSection";
import MessageSection from "./messages/MessageSection";
import MessageList from "./messages/MessageList";

class AppChannel extends Component{
    constructor(props){
        super(props);
        this.state = {
            channels: [],
            users: [],
            messages: []
        };
    }
    addChannel(name){
        console.log('addChannel props appChannel.js')
        let {channels} = this.state;
        channels.push({id: channels.length, name});
        this.setState({channels});
        // TODO: Send to server
    }
    setChannel(activeChannel){
        console.log('setChannel props appChannel.js')
        this.setState({activeChannel});

        // TODO: Get Channels Messages
    }

    addUser(name){
        console.log('addUser props appChannel.js')
        let {users} = this.state;
        users.push({id: users.length, name});
        this.setState({users});

        // channels.push({id: channels.length, name});
        // this.setState({channels});
        // TODO: Send to server
    }
    setUser(activeUser){
        console.log('setUser props appChannel.js')
        this.setState({activeUser});
        // TODO: Get Channels Messages
    }

    addMessage(desc){
        let {messages} = this.state;
        messages.push({id:messages.length,desc});
        this.setState({messages});
    }

    setMessage(activeMessage){
        this.setState({activeMessage})
    }

    setMessageChannel(headerTitle){
        this.setState({headerTitle})
    }

    render(){
        return (
            <div className='app'>
                <div className='nav'>
                    <ChannelSection
                        {...this.state}
                        addChannel={this.addChannel.bind(this)}
                        setChannel={this.setChannel.bind(this)}
                        setMessageChannel={this.setMessageChannel.bind(this)}
                    />
                </div>
                <div className='nav'>
                    <UserSection
                        {...this.state}
                        addUser={this.addUser.bind(this)}
                        setUser={this.setUser.bind(this)}
                    />
                </div>
                <div className='nav'>
                    <MessageSection
                    {...this.state}
                    addMessage={this.addMessage.bind(this)}
                    setMessage={this.setMessage.bind(this)}
                    />
                </div>
            </div>
        )
    }
}


export default AppChannel
