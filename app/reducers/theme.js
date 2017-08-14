import { CHANGE_PRIMARY_COLOR, CHANGE_THEME } from '../actions/theme'

import appStyles, { lightTheme, darkTheme } from '../config/styles'

const DARK_THEME_TYPE = 'Dark';
const LIGHT_THEME_TYPE = 'Light';

const initialState = {
    type: DARK_THEME_TYPE,
    primaryColor: appStyles.colors.primary,
    styles: lightTheme,
};

const setTheme = (themeType) => {
    if (themeType === LIGHT_THEME_TYPE) {
        return {
            type: LIGHT_THEME_TYPE,
            styles: lightTheme,
        }
    }
    return {
        type: DARK_THEME_TYPE,
        styles: darkTheme,
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PRIMARY_COLOR:
            return {
                ...state,
                primaryColor: action.color,
            };
        case CHANGE_THEME:
            let theme = setTheme(action.theme);
            return {
                ...state,
                type: theme.type,
                styles: theme.styles, 
            };
        default:
            return state
    }
};

export default reducer