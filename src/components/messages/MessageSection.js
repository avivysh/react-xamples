import React,{Component} from "react";
import PropTypes from 'prop-types';
import Message from "./Message";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";
import MessageHeader from "./MessageHeader";

class MessageSection extends Component{

    render() {
        return(
            <div className='support panel panel-primary' >
                <div className='panel-heading'>
                    <strong>Messages</strong>
                </div>
                <MessageHeader {...this.props} />
                <div>
                    <MessageList {...this.props} />
                    <MessageForm {...this.props} />
                </div>
            </div>
        )
    }
}
Message.propTypes = {
    headerTitle : PropTypes.string,
    messages : PropTypes.array.isRequired,
    setMessage : PropTypes.func.isRequired
}

export default MessageSection;
