/**
 * styles.js contain global colors, texts, dimensions
 */

// DARK THEME
const DARK_THEME_BACKGROUND = '#303030';
const DARK_THEME_BORDER = '#FFFFFF1E';

export const darkTheme = {
    background: {
        backgroundColor: DARK_THEME_BACKGROUND,
    },
    card: {
        backgroundColor: '#424242'
    },
    primaryText: {
        color: '#FFFFFF',
    },
    secondaryText: {
        color: '#FFFFFFB3',
    },
    disabledText: {
        color: '#FFFFFF80',
    },
    border: {
        color: DARK_THEME_BORDER,
    }
};

// LIGHT THEME
const LIGHT_THEME_BACKGROUND = '#FAFAFA';
const LIGHT_THEME_BORDER = '#0000001E';

export const lightTheme = {
    background: {
        backgroundColor: LIGHT_THEME_BACKGROUND,
    },
    card: {
        backgroundColor: '#FFFFFF'
    },
    primaryText: {
        color: '#000000DE',
    },
    secondaryText: {
        color: '#0000008A',
    },
    disabledText: {
        color: '#00000061',
    },
    border: {
        color: LIGHT_THEME_BORDER,
    }
};

const PRIMARY_BLUE = '#3ABEFF';
const PRIMARY_ORANGE = '#D57A66';
const PRIMARY_GREEN = '#00BD9D';
const PRIMARY_PURPLE = '#9E768F';

export const primaryColors = {
    blue: PRIMARY_BLUE,
    orange: PRIMARY_ORANGE,
    green: PRIMARY_GREEN,
    purple: PRIMARY_PURPLE,
};

const HORIZONTAL_MARGIN = 16;
const VERTICAL_MARGIN = 16;

const styles = {
    colors: {
        primary: PRIMARY_BLUE,
        border: '#e2e2e2',
        inputText: '#797979',
        disabledInput: '#F0F0F0',
    },
    text: {
        title: {
            fontWeight: '600',
            fontSize: 28,
            letterSpacing: -0.5,
            marginTop: HORIZONTAL_MARGIN,
            color: '#ffffff'
        },
        subtitle: {
            fontSize: 16,
            color: '#343434',
        }
    },
    dimensions: {
        margins: {
            vertical: VERTICAL_MARGIN,
            horizontal: HORIZONTAL_MARGIN,
        },
        padding: {
            vertical: VERTICAL_MARGIN / 2,
            horizontal: HORIZONTAL_MARGIN / 2,
        },
    }
};

export default styles;