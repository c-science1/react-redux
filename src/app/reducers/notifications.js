
const notifications = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_NOTIFICATIONS':
    case 'SHOW_UNACKNOWLEDGED':
    case 'ACKNOWLEDGED_ALL':
    case 'DELETE_ACKNOWLEDGED':
    case 'TOGGLE_STATUS':
      return action.payload;

    default:
      return state
  }
}

export default notifications
