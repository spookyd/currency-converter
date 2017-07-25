/**
 * styles.js contain global colors, texts, dimensions
 */

const HORIZONTAL_MARGIN = 16
const VERTICAL_MARGIN = 16

const PRIMARY_BLUE = '#3ABEFF'
const PRIMARY_ORANGE = '#D57A66'
const PRIMARY_GREEN = '#00BD9D'
const PRIMARY_PURPLE = '#9E768F'

const styles = {
    colors: {
        primary: PRIMARY_BLUE,
        border: '#e2e2e2',
        inputText: '#797979',
        disabledInput: '#F0F0F0',
        orangeTheme: PRIMARY_ORANGE,
        greenTheme: PRIMARY_GREEN,
        purpleTheme: PRIMARY_PURPLE,
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