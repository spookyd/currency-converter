import { StyleSheet } from 'react-native'

import appStyles from '../../config/styles'

const underlayColor = appStyles.colors.border;

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: appStyles.dimensions.margins.horizontal,
        paddingVertical: appStyles.dimensions.margins.vertical,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    text: appStyles.text.subtitle,
    separator: {
        marginLeft: appStyles.dimensions.margins.horizontal,
        backgroundColor: appStyles.colors.border,
        flex: 1,
        height: StyleSheet.hairlineWidth,
    },
    iconContainer: {
        backgroundColor: 'transparent',
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainerVisible: {
        backgroundColor: appStyles.colors.primary,
    },
    icon: {
        width: 18,
    }
});

export { styles, underlayColor }