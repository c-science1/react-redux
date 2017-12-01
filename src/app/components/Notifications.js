import React, { Component } from 'react';
import moment from 'moment';

import '../../styles/Notifications.css';

const tenDaysBackDate = moment().subtract('days', 10);

class Notifications extends Component {

    render() {
        return (
            <div className="notifications__wrapper">
                <div className="notifications__actions">
                    <button onClick={this.props.onDeleteAcknowledged} style={{ marginRight: '6px' }}>Delete acknowledged</button>
                    <button onClick={this.props.onAcknowledgeAll} style={{ marginRight: '6px' }}>Acknowledge all</button>
                    <button onClick={this.props.onToggleAcknowledged} value="1">Hide unacknowledged</button>
                </div>
                <table className="notifications__table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.notifications.map((item, index) => {
                            return <tr key={index} className={item.acknowledged ? 'notification__acknowledged' : ''}>
                                <td
                                 className={(!item.acknowledged && (moment(item.date).isBefore(tenDaysBackDate))) ? 'notification__alert' : ''}>{item.title}</td>
                                <td className="notifications__date">{moment(new Date(item.date)).format('DD/MM/YYYY HH:MM')}</td>
                                <td>
                                    <input type="checkbox" value={item.id} checked={item.acknowledged} onChange={this.props.ontoggleStatus} />
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Notifications;
