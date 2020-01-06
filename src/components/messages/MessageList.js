import React,{Component} from "react";
import PropTypes from 'prop-types';
import Message from "./Message";
import Channel from "../channels/Channel";

class MessageList extends Component{
    render() {
        const{messages,setMessage} =  this.props;
        return(
            <ul>
                {this.props.messages.map(msg => {
                    return <Message
                        message={msg}
                        key={msg.id}
                        {...this.props}
                    />
                })}
            </ul>
        )
    }
}
Message.propTypes = {
    messages : PropTypes.array.isRequired,
    setMessage : PropTypes.func.isRequired
}

export default MessageList;
