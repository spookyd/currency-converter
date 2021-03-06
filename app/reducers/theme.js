import { CHANGE_PRIMARY_COLOR } from '../actions/theme'

import appStyles from '../config/styles'

const initialState = {
    primaryColor: appStyles.colors.primary,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PRIMARY_COLOR:
            return {
                ...state,
                primaryColor: action.color,
            }
        default:
            return state
    }
}

export default reducer