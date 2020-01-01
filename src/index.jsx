import React from 'react';
import {getCurrentChannel} from 'mattermost-redux/selectors/entities/channels';

// Courtesy of https://feathericons.com/
const Icon = () => <i className='icon fa fa-plug'/>;

class tingsButtonTest {
    initialize(registry, store) {
        registry.registerChannelHeaderButtonAction(
            // icon - JSX element to use as the button's icon
            <Icon />,
            // action - a function called when the button is clicked, passed the channel and channel member as arguments
            // null,
            () => {
                alert("tings Button Test!");
            },
            // dropdown_text - string or JSX element shown for the dropdown button description
            "tings Button Test",
            "tings Button Test",
            () => {
                const state = store.getState();
                const channel = getCurrentChannel(state);
                return (channel.name!='tings');
            },
            () => {
                const state = store.getState();
                const channel = getCurrentChannel(state);
                return (channel.name!='off-topic');
            }
        );
    }
}

window.registerPlugin('com.spikeassociates.tings-buttontest', new tingsButtonTest());