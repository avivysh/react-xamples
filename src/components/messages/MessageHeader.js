import React,{Component} from "react";
import PropTypes from 'prop-types';

class MessageHeader extends Component{

    render() {
        const{headerTitle} =  this.props;
        return(
            <div>{headerTitle}</div>
        )
    }

}

MessageHeader.propTypes={
    headerTitle : PropTypes.string
}

export default MessageHeader;
