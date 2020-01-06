import React,{Component} from "react";
import PropTypes from 'prop-types';

class Message extends Component{
    onClick(e){
        e.preventDefault();
        const {setMessage, message} = this.props;
        setMessage(message);
    }
    render() {
        const {activeMessage,message} = this.props;
        const active = message === activeMessage ? 'active' : '';
        return(
            <li className={active} onClick={this.onClick.bind(this)}>
                {this.props.message.desc}
            </li>
        );
    }
}
Message.propTypes = {
    message : PropTypes.object.isRequired,
    setMessage : PropTypes.func.isRequired
}
export default Message;
