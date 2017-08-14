import { StyleSheet, StatusBar } from 'react-native'

import appStyle from '../../config/styles'

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        zIndex: 100,
        paddingTop: appStyle.dimensions.margins.horizontal,
    },
    button: {
        alignSelf: 'flex-end',
        paddingHorizontal: appStyle.dimensions.margins.horizontal,
        paddingVertical: appStyle.dimensions.padding.vertical,
    },
    icon: {
        width: 18
    }
});

export default styles