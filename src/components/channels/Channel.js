import React, {Component} from 'react'
import PropTypes from 'prop-types';

class Channel extends Component{
    onClick(e){
        e.preventDefault();
        const {setChannel, channel,setMessageChannel} = this.props;
        setChannel(channel);
        setMessageChannel(channel.name)
    }
    render(){
        console.log('Render Channel');
        const {channel, activeChannel} = this.props;
        const active = channel === activeChannel ? 'active' : '';
        return (
            <li className={active} onClick={this.onClick.bind(this)}>
                <a >
                    {channel.name}
                </a>
            </li>
        )
    }
}

Channel.propTypes ={
    channel: PropTypes.object.isRequired,
    setChannel: PropTypes.func.isRequired,
    setMessageChannel: PropTypes.func.isRequired
}

export default Channel
