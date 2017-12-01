import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
    loadNotifications,
    toggleShowUnacknowledged,
    acknowledgeAll,
    deleteAcknowledged,
    toggleStatus
} from '../actions/notifications';
import Notifications from '../components/Notifications';

class NotificationsContainer extends Component {
    componentWillMount() {
        this.props.loadNotifications();
    }

    render() {
        return (
            <Notifications
                notifications={this.props.notifications}
                onDeleteAcknowledged={this.props.deleteAcknowledged}
                onAcknowledgeAll={this.props.acknowledgeAll}
                onToggleAcknowledged={this.props.toggleShowUnacknowledged}
                onAcknowledge={this.props.acknowledge}
                ontoggleStatus={this.props.toggleStatus}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        notifications: state.notifications
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        loadNotifications,
        toggleShowUnacknowledged,
        acknowledgeAll,
        deleteAcknowledged,
        toggleStatus
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
