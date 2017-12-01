import moment from 'moment';

/**
 * Mock getting data from an api.
 */
const payload = [
    { id: 1, title: 'Search completed', acknowledged: false },
    { id: 2, title: 'Search failed', acknowledged: false },
    { id: 3, title: 'Advanced search completed', acknowledged: false },
    { id: 4, title: 'Routine finished', acknowledged: false },
    { id: 4, title: 'Routine finished', acknowledged: false },
    { id: 5, title: 'New data received', acknowledged: false },
    { id: 6, title: 'Search completed', acknowledged: false },
    { id: 7, title: 'Search failed', acknowledged: false },
    { id: 8, title: 'Advanced search completed', acknowledged: false },
    { id: 9, title: 'Routine finished', acknowledged: false },
    { id: 10, title: 'Routine finished', acknowledged: false },
    { id: 11, title: 'New data received', acknowledged: false },
    { id: 12, title: 'Search completed', acknowledged: false },
    { id: 13, title: 'Search failed', acknowledged: false },
    { id: 14, title: 'Advanced search completed', acknowledged: false },
    { id: 15, title: 'Routine finished', acknowledged: true },
    { id: 16, title: 'Routine finished', acknowledged: true },
    { id: 17, title: 'New data received', acknowledged: true },
];

export const loadNotifications = () => {
    return {
        type: 'LOAD_NOTIFICATIONS',
        payload: payload.map((item, index) => ({ ...item, date: moment().subtract(item.id-1, 'days') }))
    };
}

export const toggleShowUnacknowledged = (e) => {
    let filtered;
    if(e.target.value == 1){
        filtered = payload.filter(item => {
            return !item.acknowledged;
        });
        e.target.value = 2;
        e.target.innerHTML = "Show unauthorised";
    } else {
        filtered = payload;
        e.target.value = 1;
        e.target.innerHTML = "Hide unauthorised";
      
    }
    
    return {
        type: 'SHOW_UNACKNOWLEDGED',
        payload: filtered.map((item, index) => ({ ...item, date: moment().subtract(item.id-1, 'days') }))
    }
}

export const acknowledgeAll = () => {
    return {
        type: 'ACKNOWLEDGED_ALL',
        payload: payload.map((item, index) => {  
            item.acknowledged = true;
            return { ...item, date: moment().subtract(item.id-1, 'days')};
        })
    }
}

export const deleteAcknowledged = () => {
    let filtered = payload.filter(item => {
        return !item.acknowledged;
    });
    return {
        type: 'DELETE_ACKNOWLEDGED',
        payload: filtered.map((item, index) => ({ ...item, date: moment().subtract(item.id-1, 'days') }))
    }
}

export const toggleStatus = (e) => {
    return {
        type: 'TOGGLE_STATUS',
        payload: payload.map((item, index) => {
            if (item.id == e.target.value) {
                item.acknowledged = !item.acknowledged;
            }
            return { ...item, date: moment().subtract(item.id-1, 'days') }
        })
    };
}
