import { StyleSheet } from 'react-native'
import appStyles from '../../config/styles'
import color from 'color'

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

const underlayColor = color('#FFFFFF').darken(0.1);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        width: '90%',
        height: INPUT_HEIGHT,
        borderRadius: BORDER_RADIUS,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: appStyles.dimensions.margins.vertical
    },
    containerDisabled: {
        backgroundColor: appStyles.colors.disabledInput
    },
    buttonContainer: {
        height: INPUT_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 20,
        paddingHorizontal: appStyles.dimensions.padding.horizontal,
        color: appStyles.colors.primary,
    },
    border: {
        height: INPUT_HEIGHT,
        width: StyleSheet.hairlineWidth,
        backgroundColor: appStyles.colors.border,
    },
    input: {
        height: INPUT_HEIGHT,
        flex: 1,
        fontSize: 18,
        paddingHorizontal: appStyles.dimensions.padding.horizontal,
        color: appStyles.colors.inputText
    },
});

export { styles, underlayColor }