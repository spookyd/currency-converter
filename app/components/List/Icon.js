import React from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'

import images from '../../config/images'
import { styles } from './styles'

const Icon = ({ checkmark, visible, iconBackground }) => {
    const iconStyles = [styles.iconContainer]
    if (visible) {
        iconStyles.push(styles.iconContainerVisible)
    }
    console.log('Background color ', iconBackground)
    if (iconBackground) {
        console.log('Should set color ', iconBackground)
        iconStyles.push({backgroundColor: iconBackground})
    }
    return (
        <View style={iconStyles}>
            { checkmark ? <Image style={styles.icon} source={images.checkmark} resizeMode='contain' /> : null }
        </View>
    )
}

Icon.propTypes = {
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
    iconBackground: PropTypes.string,
}

export default Icon