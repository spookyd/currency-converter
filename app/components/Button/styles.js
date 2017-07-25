import { StyleSheet } from 'react-native'

import appStyles from '../../config/styles'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 19,
        marginRight: appStyles.dimensions.padding.vertical,
    },
    text: {
        paddingVertical: appStyles.dimensions.margins.vertical,
        color: '#ffffff',
    },
});

export default styles;