export const CHANGE_PRIMARY_COLOR = 'CHANGE_PRIMARY_COLOR'
export const CHANGE_THEME = 'CHANGE_THEME'

export const changePrimaryColor = (color) => ({
    type: CHANGE_PRIMARY_COLOR,
    color
})

export const changeTheme = (theme) => ({
    type: CHANGE_THEME,
    theme
})